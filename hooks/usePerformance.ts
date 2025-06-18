import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';

interface PerformanceMetrics {
  totalWorkouts: number;
  totalVolume: number;
  totalTime: number;
  personalRecords: number;
  weeklyVolume: {
    day: string;
    value: number;
  }[];
  recentPRs: {
    exercise: string;
    weight: number;
    date: string;
    improvement: number;
  }[];
  frequentExercises: {
    name: string;
    sets: number;
    avgWeight: number;
    trend: 'up' | 'down';
    percentage: number;
  }[];
}

export function usePerformance() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    totalWorkouts: 0,
    totalVolume: 0,
    totalTime: 0,
    personalRecords: 0,
    weeklyVolume: [
      { day: 'Dom', value: 0 },
      { day: 'Lun', value: 0 },
      { day: 'Mar', value: 0 },
      { day: 'Mié', value: 0 },
      { day: 'Jue', value: 0 },
      { day: 'Vie', value: 0 },
      { day: 'Sáb', value: 0 },
    ],
    recentPRs: [],
    frequentExercises: []
  });

  const calculateWeeklyVolume = (workouts: any[]) => {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const weeklyVolume = new Array(7).fill(0);
    
    // Obtener la fecha de inicio de la semana actual (domingo)
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    workouts.forEach(workout => {
      if (workout.total_volume && workout.start_time) {
        const workoutDate = new Date(workout.start_time);
        
        // Solo incluir workouts de la semana actual
        if (workoutDate >= startOfWeek && workoutDate <= endOfWeek) {
          const dayIndex = workoutDate.getDay(); // 0 (Domingo) a 6 (Sábado)
          weeklyVolume[dayIndex] += workout.total_volume;
        }
      }
    });

    return days.map((day, index) => ({
      day,
      value: Math.round(weeklyVolume[index])
    }));
  };

  const getRecentPRs = (workouts: any[]) => {
    const prs: any[] = [];
    const exerciseHistory = new Map<string, { weight: number, date: string }[]>();

    // Recopilar historial de cada ejercicio
    workouts.forEach(workout => {
      if (workout.workout_exercises) {
        workout.workout_exercises.forEach((exercise: any) => {
          const exerciseName = exercise.exercise_name;
          const maxWeight = exercise.max_weight || 0;
          
          if (maxWeight > 0) {
            if (!exerciseHistory.has(exerciseName)) {
              exerciseHistory.set(exerciseName, []);
            }
            exerciseHistory.get(exerciseName)!.push({
              weight: maxWeight,
              date: workout.start_time
            });
          }
        });
      }
    });

    // Encontrar PRs para cada ejercicio
    exerciseHistory.forEach((history, exerciseName) => {
      // Ordenar por fecha
      history.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      
      let currentMax = 0;
      history.forEach(record => {
        if (record.weight > currentMax) {
          const improvement = record.weight - currentMax;
          if (improvement >= 0.5) { // Solo mejoras significativas
            prs.push({
              exercise: exerciseName,
              weight: record.weight,
              date: record.date,
              improvement: Math.round(improvement * 10) / 10
            });
          }
          currentMax = record.weight;
        }
      });
    });

    // Retornar los 3 PRs más recientes
    return prs
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  };

  const getFrequentExercises = (workouts: any[]) => {
    const exerciseStats = new Map<string, { 
      sets: number, 
      totalWeight: number, 
      count: number, 
      weights: number[],
      dates: string[]
    }>();

    // Procesar todos los ejercicios de todos los workouts
    workouts.forEach(workout => {
      if (workout.workout_exercises) {
        workout.workout_exercises.forEach((exercise: any) => {
          const exerciseName = exercise.exercise_name;
          const maxWeight = exercise.max_weight || 0;
          const setsCount = Array.isArray(exercise.sets) ? exercise.sets.length : 1;

          const stats = exerciseStats.get(exerciseName) || {
            sets: 0,
            totalWeight: 0,
            count: 0,
            weights: [],
            dates: []
          };

          stats.sets += setsCount;
          stats.totalWeight += maxWeight;
          stats.count += 1;
          if (maxWeight > 0) {
            stats.weights.push(maxWeight);
            stats.dates.push(workout.start_time);
          }

          exerciseStats.set(exerciseName, stats);
        });
      }
    });

    // Convertir a array y calcular tendencias
    return Array.from(exerciseStats.entries())
      .filter(([_, stats]) => stats.count >= 2 && stats.weights.length >= 2) // Solo ejercicios con datos suficientes
      .map(([name, stats]) => {
        // Calcular tendencia basada en los últimos vs primeros pesos
        const sortedByDate = stats.weights
          .map((weight, index) => ({ weight, date: stats.dates[index] }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        const firstHalf = sortedByDate.slice(0, Math.ceil(sortedByDate.length / 2));
        const secondHalf = sortedByDate.slice(Math.floor(sortedByDate.length / 2));

        const avgFirst = firstHalf.reduce((sum, item) => sum + item.weight, 0) / firstHalf.length;
        const avgSecond = secondHalf.reduce((sum, item) => sum + item.weight, 0) / secondHalf.length;

        const trend: 'up' | 'down' = avgSecond >= avgFirst ? 'up' : 'down';
        const percentage = avgFirst > 0 
          ? Math.round(((avgSecond - avgFirst) / avgFirst) * 100)
          : 0;

        return {
          name,
          sets: stats.sets,
          avgWeight: Math.round(stats.totalWeight / stats.count),
          trend,
          percentage: Math.abs(percentage)
        };
      })
      .sort((a, b) => b.sets - a.sets) // Ordenar por más frecuentes
      .slice(0, 3); // Retornar solo los 3 ejercicios más frecuentes
  };

  useEffect(() => {
    if (!user?.id) {
      setLoading(false);
      setMetrics({
        totalWorkouts: 0,
        totalVolume: 0,
        totalTime: 0,
        personalRecords: 0,
        weeklyVolume: [
          { day: 'Dom', value: 0 },
          { day: 'Lun', value: 0 },
          { day: 'Mar', value: 0 },
          { day: 'Mié', value: 0 },
          { day: 'Jue', value: 0 },
          { day: 'Vie', value: 0 },
          { day: 'Sáb', value: 0 },
        ],
        recentPRs: [],
        frequentExercises: []
      });
      return;
    }

    let subscription: any;

    const fetchPerformanceData = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log('Fetching performance data for user:', user.id);

        // Obtener workouts del último mes con ejercicios
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const { data: workouts, error: workoutsError } = await supabase
          .from('workouts')
          .select(`
            id,
            start_time,
            end_time,
            total_volume,
            total_reps,
            workout_exercises (
              id,
              exercise_name,
              sets,
              total_volume,
              max_weight,
              total_reps
            )
          `)
          .eq('profile_id', user.id)
          .gte('start_time', thirtyDaysAgo.toISOString())
          .order('start_time', { ascending: false });

        if (workoutsError) {
          console.error('Error fetching workouts:', workoutsError);
          throw workoutsError;
        }

        console.log('Fetched workouts:', workouts?.length || 0);
        console.log('Sample workout:', workouts?.[0]);

        // Calcular métricas básicas
        const totalWorkouts = workouts?.length || 0;
        const totalVolume = workouts?.reduce((acc, workout) => acc + (workout.total_volume || 0), 0) || 0;

        // Calcular tiempo total en minutos
        const totalTime = workouts?.reduce((acc, workout) => {
          if (workout.end_time && workout.start_time) {
            const start = new Date(workout.start_time).getTime();
            const end = new Date(workout.end_time).getTime();
            const durationInMinutes = Math.floor((end - start) / (1000 * 60));
            return acc + (durationInMinutes > 0 ? durationInMinutes : 0);
          }
          return acc;
        }, 0) || 0;

        // Calcular métricas adicionales
        const weeklyVolume = calculateWeeklyVolume(workouts || []);
        const recentPRs = getRecentPRs(workouts || []);
        const frequentExercises = getFrequentExercises(workouts || []);

        console.log('Calculated metrics:', {
          totalWorkouts,
          totalVolume,
          totalTime,
          weeklyVolumeTotal: weeklyVolume.reduce((sum, day) => sum + day.value, 0),
          prsCount: recentPRs.length,
          exercisesCount: frequentExercises.length
        });

        setMetrics({
          totalWorkouts,
          totalVolume,
          totalTime,
          personalRecords: recentPRs.length,
          weeklyVolume,
          recentPRs,
          frequentExercises
        });

      } catch (err) {
        console.error('Error fetching performance data:', err);
        setError(err instanceof Error ? err.message : 'Error al cargar los datos de rendimiento');
      } finally {
        setLoading(false);
      }
    };

    // Configurar suscripción a cambios en tiempo real
    subscription = supabase
      .channel(`workout_changes_${user.id}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'workouts',
        filter: `profile_id=eq.${user.id}`
      }, (payload) => {
        console.log('Workout data changed:', payload);
        setRefreshFlag(prev => !prev);
      })
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'workout_exercises'
      }, (payload) => {
        console.log('Exercise data changed:', payload);
        setRefreshFlag(prev => !prev);
      })
      .subscribe();

    fetchPerformanceData();

    return () => {
      if (subscription) {
        supabase.removeChannel(subscription);
      }
    };
  }, [user?.id, refreshFlag]);

  // Función para refrescar manualmente los datos
  const refreshData = () => {
    console.log('Manual refresh triggered');
    setRefreshFlag(prev => !prev);
  };

  return { 
    metrics, 
    loading, 
    error,
    refreshData
  };
}