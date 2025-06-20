import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ChevronRight, Dumbbell, TrendingUp, Timer, Weight, Play, Calendar, Target, Zap } from 'lucide-react-native';
import { trainingPrograms } from '@/constants/programs';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { usePerformance } from '@/hooks/usePerformance';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

interface ActiveProgram {
  id: string;
  name: string;
  level: string;
  image: string;
  progress: string;
  lastWorkout: string;
}

export default function TrainScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const { metrics, loading: performanceLoading } = usePerformance();
  const [activePrograms, setActivePrograms] = useState<ActiveProgram[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivePrograms = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { data: workouts, error } = await supabase
          .from('workouts')
          .select('*')
          .eq('profile_id', user.id)
          .order('start_time', { ascending: false });

        if (error) throw error;

        const programWorkouts = workouts?.reduce((acc, workout) => {
          if (!workout.program_id) return acc;
          
          if (!acc[workout.program_id] || 
              new Date(workout.start_time) > new Date(acc[workout.program_id].start_time)) {
            acc[workout.program_id] = workout;
          }
          return acc;
        }, {} as Record<string, any>);

        const active = Object.entries(programWorkouts || {}).map(([programId, lastWorkout]) => {
          const program = trainingPrograms.find(p => p.id === programId);
          if (!program) return null;

          return {
            ...program,
            progress: `Semana ${lastWorkout.week_number} de ${program.duration.split(' ')[0]}`,
            lastWorkout: `Último: Día ${lastWorkout.day_number}`,
          };
        }).filter(Boolean) as ActiveProgram[];

        setActivePrograms(active);
      } catch (err) {
        console.error('Error fetching active programs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchActivePrograms();
  }, [user]);

  const performanceMetrics = [
    {
      id: 1,
      title: 'Tiempo Total',
      value: `${metrics.totalTime}min`,
      change: 'Esta semana',
      icon: Timer,
      color: '#6366F1',
      bgColor: '#EEF2FF',
    },
    {
      id: 2,
      title: 'Volumen Total',
      value: `${metrics.totalVolume.toLocaleString()}kg`,
      change: 'Últimos 30 días',
      icon: Weight,
      color: '#10B981',
      bgColor: '#ECFDF5',
    },
    {
      id: 3,
      title: 'Records',
      value: `${metrics.personalRecords} PRs`,
      change: 'Nuevos records',
      icon: TrendingUp,
      color: '#F59E0B',
      bgColor: '#FFFBEB',
    },
  ];

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginPrompt}>
          <Dumbbell size={48} color="#D1D5DB" />
          <Text style={styles.loginPromptTitle}>Inicia sesión para entrenar</Text>
          <Text style={styles.loginPromptText}>
            Accede a tu cuenta para ver tus programas y seguir tu progreso
          </Text>
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => router.push('/(auth)/login')}
          >
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroGreeting}>¡Hora de entrenar!</Text>
            <Text style={styles.heroSubtitle}>Continúa con tu progreso hacia tus objetivos</Text>
          </View>
          <View style={styles.heroImageContainer}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400' }}
              style={styles.heroImage}
            />
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity 
            style={[styles.quickActionButton, { backgroundColor: '#6366F1' }]}
            onPress={() => router.push('/train/programs')}
          >
            <View style={styles.quickActionIcon}>
              <Dumbbell size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.quickActionText}>Explorar Programas</Text>
            <ChevronRight size={20} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.quickActionButton, { backgroundColor: '#10B981' }]}
            onPress={() => router.push('/train/workout-builder')}
          >
            <View style={styles.quickActionIcon}>
              <Play size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.quickActionText}>Entreno Libre</Text>
            <ChevronRight size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        
        {/* Active Programs */}
        {activePrograms.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Entrenamientos Activos</Text>
              <TouchableOpacity onPress={() => router.push('/train/programs')}>
                <Text style={styles.sectionAction}>Ver todos</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.programsScroll}>
              {activePrograms.map((program) => (
                <TouchableOpacity 
                  key={program.id} 
                  style={styles.programCard}
                  onPress={() => router.push({
                    pathname: '/train/program/select-week',
                    params: { id: program.id }
                  })}
                >
                  <Image 
                    source={{ uri: program.image }}
                    style={styles.programCardImage}
                  />
                  <View style={styles.programCardOverlay}>
                    <View style={styles.programCardBadge}>
                      <Text style={styles.programCardBadgeText}>{program.level}</Text>
                    </View>
                    <View style={styles.programCardContent}>
                      <Text style={styles.programCardTitle}>{program.name}</Text>
                      <Text style={styles.programCardProgress}>{program.progress}</Text>
                      <Text style={styles.programCardLastWorkout}>{program.lastWorkout}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Performance Overview */}
        <View style={styles.section}>
          <TouchableOpacity 
            style={styles.performanceHeader}
            onPress={() => router.push('/train/performance')}
          >
            <Text style={styles.sectionTitle}>Tu Rendimiento</Text>
            <View style={styles.performanceHeaderAction}>
              <Text style={styles.sectionAction}>Ver detalles</Text>
              <ChevronRight size={16} color="#6B7280" />
            </View>
          </TouchableOpacity>
          
          {performanceLoading ? (
            <View style={styles.loadingMetrics}>
              <Text style={styles.loadingText}>Cargando estadísticas...</Text>
            </View>
          ) : (
            <View style={styles.metricsGrid}>
              {performanceMetrics.map((metric) => (
                <View 
                  key={metric.id} 
                  style={[styles.metricCard, { backgroundColor: metric.bgColor }]}
                >
                  <View style={[styles.metricIconContainer, { backgroundColor: metric.color }]}>
                    <metric.icon size={20} color="#FFFFFF" />
                  </View>
                  <Text style={[styles.metricValue, { color: metric.color }]}>{metric.value}</Text>
                  <Text style={styles.metricTitle}>{metric.title}</Text>
                  <Text style={styles.metricChange}>{metric.change}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Motivation Section */}
        <View style={styles.motivationSection}>
          <View style={styles.motivationContent}>
            <Zap size={32} color="#F59E0B" />
            <Text style={styles.motivationTitle}>¡Sigue así!</Text>
            <Text style={styles.motivationText}>
              Cada entrenamiento te acerca más a tus objetivos. La constancia es la clave del éxito.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  loginPrompt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  loginPromptTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
  },
  loginPromptText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  loginButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  heroSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  heroContent: {
    flex: 1,
    paddingRight: 16,
  },
  heroGreeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  heroImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  quickActionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  quickActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  quickActionIcon: {
    marginRight: 16,
  },
  quickActionText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  sectionAction: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366F1',
  },
  programsScroll: {
    paddingLeft: 20,
    gap: 16,
  },
  programCard: {
    width: 280,
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  programCardImage: {
    width: '100%',
    height: '100%',
  },
  programCardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    justifyContent: 'space-between',
  },
  programCardBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backdropFilter: 'blur(10px)',
  },
  programCardBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  programCardContent: {
    alignSelf: 'stretch',
  },
  programCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  programCardProgress: {
    fontSize: 14,
    color: '#E5E7EB',
    marginBottom: 2,
  },
  programCardLastWorkout: {
    fontSize: 12,
    color: '#D1D5DB',
  },
  performanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  performanceHeaderAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  loadingMetrics: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#6B7280',
  },
  metricsGrid: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  metricCard: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  metricIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  metricTitle: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
    textAlign: 'center',
  },
  metricChange: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  motivationSection: {
    marginHorizontal: 20,
    backgroundColor: '#FFFBEB',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FEF3C7',
  },
  motivationContent: {
    alignItems: 'center',
  },
  motivationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#92400E',
    marginTop: 12,
    marginBottom: 8,
  },
  motivationText: {
    fontSize: 16,
    color: '#78350F',
    textAlign: 'center',
    lineHeight: 24,
  },
});