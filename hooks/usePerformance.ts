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
    weeklyVolume: [],
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

    workouts.forEach(workout => {
      if (workout.total_volume && workout.start_time) {
        const workoutDate = new Date(workout.start_time);
        
        // Solo incluir workouts de la semana actual
        if (workoutDate >= startOfWeek) {
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
    const exerciseMaxes = new Map<string, { weight: number, date: string }>();

    // Ordenar workouts de más antiguo a más reciente para calcular PRs correctamente
    const sortedWorkouts = [...workouts].sort((a, b) =>
      new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
    );

    sortedWorkouts.forEach(workout => {
      if (workout.workout_exercises) {
        workout.workout_exercises.forEach((exercise: any) => {
          const currentMax = exercise.max_weight || 0;
          const exerciseName = exercise.exercise_name;
          const prevRecord = exerciseMaxes.get(exerciseName);

          if (currentMax > 0 && (!prevRecord || currentMax > prevRecord.weight)) {
            const improvement = prevRecord ? currentMax - prevRecord.weight : currentMax;
            
            exerciseMaxes.set(exerciseName, {
              weight: currentMax,
              date: workout.start_time
            });

            // Solo agregar si es una mejora significativa (más de 0.5kg)
            if (improvement >= 0.5) {
              prs.push({
                exercise: exerciseName,
                weight: currentMax,
                date: workout.start_time,
                improvement: Math.round(improvement * 10) / 10
              });
            }
          }
        });
      }
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
          stats.weights.push(maxWeight);
          stats.dates.push(workout.start_time);

          exerciseStats.set(exerciseName, stats);
        });
      }
    });

    // Convertir a array y calcular tendencias
    return Array.from(exerciseStats.entries())
      .filter(([_, stats]) => stats.count >= 2) // Solo ejercicios con al menos 2 registros
      .map(([name, stats]) => {
        // Calcular tendencia basada en los últimos vs primeros pesos
        const sortedByDate = stats.weights
          .map((weight, index) => ({ weight, date: stats.dates[index] }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        const firstHalf = sortedByDate.slice(0, Math.ceil(sortedByDate.length / 2));
        const secondHalf = sortedByDate.slice(Math.floor(sortedByDate.length / 2));

        const avgFirst = firstHalf.reduce((sum, item) => sum + item.weight, 0) / firstHalf.length;
        const avgSecond = secondHalf.reduce((sum, item) => sum + item.weight, 0) / secondHalf.length;

        const trend: 'up' | 'down' = avgSecond > avgFirst ? 'up' : 'down';
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
      return;
    }

    const subscription = supabase
      .channel(`workout_changes_${user.id}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'workouts',
        filter: `profile_id=eq.${user.id}`
      }, () => {
        console.log('Workout data changed, refreshing...');
        setRefreshFlag(prev => !prev);
      })
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'workout_exercises'
      }, () => {
        console.log('Exercise data changed, refreshing...');
        setRefreshFlag(prev => !prev);
      })
      .subscribe();

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
            *,
            workout_exercises (
              id,
              exercise_name,
              sets,
              total_volume,
              max_weight,
              total_reps,
              created_at
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

    fetchPerformanceData();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [user?.id, refreshFlag]);

  // Función para refrescar manualmente los datos
  const refreshData = () => {
    setRefreshFlag(prev => !prev);
  };

  return { 
    metrics, 
    loading, 
    error,
    refreshData
  };
}