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

    workouts.forEach(workout => {
      if (workout.total_volume) {
        const date = new Date(workout.start_time);
        const dayIndex = date.getDay(); // 0 (Domingo) a 6 (Sábado)
        weeklyVolume[dayIndex] += workout.total_volume;
      }
    });

    return days.map((day, index) => ({
      day,
      value: weeklyVolume[index]
    }));
  };

  const getRecentPRs = (workouts: any[]) => {
    const prs: any[] = [];
    const exerciseMaxes = new Map<string, number>();

    // Ordenar workouts de más reciente a más antiguo
    const sortedWorkouts = [...workouts].sort((a, b) =>
      new Date(b.start_time).getTime() - new Date(a.start_time).getTime()
    );

    sortedWorkouts.forEach(workout => {
      workout.workout_exercises?.forEach((exercise: any) => {
        const currentMax = exercise.max_weight || 0;
        const prevMax = exerciseMaxes.get(exercise.exercise_name) || 0;

        if (currentMax > prevMax) {
          exerciseMaxes.set(exercise.exercise_name, currentMax);
          prs.push({
            exercise: exercise.exercise_name,
            weight: currentMax,
            date: workout.start_time,
            improvement: currentMax - prevMax
          });
        }
      });
    });

    return prs.slice(0, 3); // Retornar solo los 3 PRs más recientes
  };

  const getFrequentExercises = (workouts: any[]) => {
    const exerciseStats = new Map<string, { sets: number, totalWeight: number, count: number, lastWeight: number, firstWeight: number }>();

    // Procesar todos los ejercicios de todos los workouts
    workouts.forEach(workout => {
      workout.workout_exercises?.forEach((exercise: any) => {
        const stats = exerciseStats.get(exercise.exercise_name) || {
          sets: 0,
          totalWeight: 0,
          count: 0,
          lastWeight: 0,
          firstWeight: 0
        };

        const maxWeight = exercise.max_weight || 0;

        stats.sets += (exercise.sets?.length || 0);
        stats.totalWeight += maxWeight;
        stats.count += 1;

        // Para el primer registro del ejercicio
        if (stats.firstWeight === 0) {
          stats.firstWeight = maxWeight;
        }

        // Actualizar el último peso registrado
        stats.lastWeight = maxWeight;

        exerciseStats.set(exercise.exercise_name, stats);
      });
    });

    // Convertir a array y calcular tendencias
    return Array.from(exerciseStats.entries())
      .map(([name, stats]) => {
        const trend: 'up' | 'down' = stats.lastWeight > stats.firstWeight ? 'up' : 'down';
        const percentage = stats.firstWeight > 0
          ? Math.round(((stats.lastWeight - stats.firstWeight) / stats.firstWeight) * 100)
          : 0;

        return {
          name,
          sets: stats.sets,
          avgWeight: Math.round(stats.totalWeight / stats.count),
          trend,
          percentage
        };
      })
      .sort((a, b) => b.sets - a.sets) // Ordenar por más frecuentes
      .slice(0, 3); // Retornar solo los 3 ejercicios más frecuentes
  };

  useEffect(() => {
    if (!user?.id) return;

    const subscription = supabase
      .channel('workout_changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'workouts',
        filter: `profile_id=eq.${user.id}`
      }, () => {
        setRefreshFlag(prev => !prev);
      })
      .subscribe();

    const fetchPerformanceData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Obtener workouts del último mes
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const { data: workouts, error: workoutsError } = await supabase
          .from('workouts')
          .select(`*, workout_exercises (*)`)
          .eq('profile_id', user.id)
          .gte('start_time', thirtyDaysAgo.toISOString())
          .order('start_time', { ascending: false });

        if (workoutsError) throw workoutsError;

        // Calcular métricas básicas
        const totalWorkouts = workouts?.length || 0;
        const totalVolume = workouts?.reduce((acc, workout) => acc + (workout.total_volume || 0), 0) || 0;

        // Calcular tiempo total en minutos
        const totalTime = workouts?.reduce((acc, workout) => {
          if (workout.end_time && workout.start_time) {
            const start = new Date(workout.start_time).getTime();
            const end = new Date(workout.end_time).getTime();
            const durationInMinutes = Math.floor((end - start) / (1000 * 60));
            return acc + (durationInMinutes || 0);
          }
          return acc;
        }, 0) || 0;

        // Calcular métricas adicionales
        const weeklyVolume = calculateWeeklyVolume(workouts || []);
        const recentPRs = getRecentPRs(workouts || []);
        const frequentExercises = getFrequentExercises(workouts || []);

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

  return { metrics, loading, error };
}