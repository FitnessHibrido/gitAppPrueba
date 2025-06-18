import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, RefreshControl, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight, TrendingUp, Clock, Weight, Calendar, Trophy, Target, Dumbbell, ArrowUp, ArrowDown, RefreshCw, AlertCircle } from 'lucide-react-native';
import { usePerformance } from '@/hooks/usePerformance';
import { useAuth } from '@/context/AuthContext';
import { useState, useCallback } from 'react';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const CHART_WIDTH = width - 40;

export default function PerformanceScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const { metrics, loading, error, refreshData } = usePerformance();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    refreshData();
    setTimeout(() => setRefreshing(false), 1500);
  }, [refreshData]);

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.noAuthContainer}>
          <AlertCircle size={48} color="#6B7280" />
          <Text style={styles.noAuthTitle}>Inicia sesión para ver tus estadísticas</Text>
          <Text style={styles.noAuthText}>
            Necesitas iniciar sesión para acceder a tus datos de rendimiento y progreso
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

  const maxVolume = Math.max(...metrics.weeklyVolume.map(d => d.value), 1);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView 
        style={styles.content}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh}
            colors={['#6366F1']}
            tintColor="#6366F1"
          />
        }
      >
        {/* Header con información del usuario */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tu Rendimiento</Text>
          <Text style={styles.headerSubtitle}>Últimos 30 días</Text>
        </View>

        {loading && !refreshing ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#6366F1" />
            <Text style={styles.loadingText}>Cargando tus estadísticas...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <AlertCircle size={48} color="#EF4444" />
            <Text style={styles.errorTitle}>No pudimos cargar tus datos</Text>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity style={styles.retryButton} onPress={refreshData}>
              <RefreshCw size={20} color="#3B82F6" />
              <Text style={styles.retryButtonText}>Reintentar</Text>
            </TouchableOpacity>
          </View>
        ) : metrics.totalWorkouts === 0 ? (
          <View style={styles.emptyState}>
            <Dumbbell size={48} color="#D1D5DB" />
            <Text style={styles.emptyStateTitle}>¡Comienza a entrenar!</Text>
            <Text style={styles.emptyStateText}>
              Completa tu primer entrenamiento para ver tus estadísticas aquí
            </Text>
            <TouchableOpacity 
              style={styles.startWorkoutButton}
              onPress={() => router.push('/train')}
            >
              <Text style={styles.startWorkoutButtonText}>Ir a Entrenar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Resumen Mensual</Text>
              <View style={styles.statsGrid}>
                <View style={styles.statCard}>
                  <View style={[styles.iconContainer, { backgroundColor: '#EFF6FF' }]}>
                    <Calendar size={24} color="#3B82F6" />
                  </View>
                  <Text style={styles.statValue}>{metrics.totalWorkouts}</Text>
                  <Text style={styles.statLabel}>Entrenos</Text>
                </View>
                <View style={styles.statCard}>
                  <View style={[styles.iconContainer, { backgroundColor: '#F0FDF4' }]}>
                    <Weight size={24} color="#22C55E" />
                  </View>
                  <Text style={styles.statValue}>{metrics.totalVolume.toLocaleString()}kg</Text>
                  <Text style={styles.statLabel}>Volumen</Text>
                </View>
                <View style={styles.statCard}>
                  <View style={[styles.iconContainer, { backgroundColor: '#FEF3C7' }]}>
                    <Clock size={24} color="#F59E0B" />
                  </View>
                  <Text style={styles.statValue}>{metrics.totalTime}min</Text>
                  <Text style={styles.statLabel}>Tiempo</Text>
                </View>
                <View style={styles.statCard}>
                  <View style={[styles.iconContainer, { backgroundColor: '#FCE7F3' }]}>
                    <Trophy size={24} color="#EC4899" />
                  </View>
                  <Text style={styles.statValue}>{metrics.personalRecords}</Text>
                  <Text style={styles.statLabel}>PRs</Text>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Volumen Semanal</Text>
              <Text style={styles.sectionSubtitle}>Semana actual</Text>
              <View style={styles.chartContainer}>
                {metrics.weeklyVolume.map((day) => (
                  <View key={day.day} style={styles.barContainer}>
                    <View style={styles.barWrapper}>
                      <View
                        style={[
                          styles.bar,
                          {
                            height: `${Math.max((day.value / maxVolume) * 100, 2)}%`,
                            backgroundColor: day.value > 0 ? '#3B82F6' : '#E5E7EB'
                          }
                        ]}
                      />
                    </View>
                    <Text style={styles.barLabel}>{day.day}</Text>
                    <Text style={styles.barValue}>
                      {day.value > 0 ? `${(day.value / 1000).toFixed(1)}k` : '-'}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={styles.weeklyTotal}>
                <Text style={styles.weeklyTotalLabel}>Total semanal:</Text>
                <Text style={styles.weeklyTotalValue}>
                  {metrics.weeklyVolume.reduce((sum, day) => sum + day.value, 0).toLocaleString()}kg
                </Text>
              </View>
            </View>

            {metrics.recentPRs.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Records Personales Recientes</Text>
                {metrics.recentPRs.map((pr, index) => (
                  <View key={index} style={styles.prCard}>
                    <View style={styles.prHeader}>
                      <Text style={styles.prExercise}>{pr.exercise}</Text>
                      <View style={styles.prBadge}>
                        <Text style={styles.prImprovement}>+{pr.improvement}kg</Text>
                      </View>
                    </View>
                    <View style={styles.prDetails}>
                      <View style={styles.prDetail}>
                        <Weight size={16} color="#6B7280" />
                        <Text style={styles.prDetailText}>{pr.weight}kg</Text>
                      </View>
                      <View style={styles.prDetail}>
                        <Calendar size={16} color="#6B7280" />
                        <Text style={styles.prDetailText}>
                          {new Date(pr.date).toLocaleDateString()}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            )}

            {metrics.frequentExercises.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Ejercicios Frecuentes</Text>
                {metrics.frequentExercises.map((exercise, index) => (
                  <View key={index} style={styles.exerciseCard}>
                    <View style={styles.exerciseIcon}>
                      <Dumbbell size={24} color="#3B82F6" />
                    </View>
                    <View style={styles.exerciseInfo}>
                      <Text style={styles.exerciseName}>{exercise.name}</Text>
                      <View style={styles.exerciseStats}>
                        <Text style={styles.exerciseStat}>{exercise.sets} series</Text>
                        <Text style={styles.exerciseStat}>•</Text>
                        <Text style={styles.exerciseStat}>Media: {exercise.avgWeight}kg</Text>
                      </View>
                    </View>
                    <View style={styles.trendContainer}>
                      {exercise.trend === 'up' ? (
                        <ArrowUp size={20} color="#22C55E" />
                      ) : (
                        <ArrowDown size={20} color="#EF4444" />
                      )}
                      <Text style={[
                        styles.trendText,
                        { color: exercise.trend === 'up' ? '#22C55E' : '#EF4444' }
                      ]}>
                        {exercise.percentage}%
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  loadingContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  noAuthContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noAuthTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  noAuthText: {
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
  errorContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
  },
  errorText: {
    color: '#6B7280',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  retryButtonText: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  chartContainer: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  barContainer: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
  barWrapper: {
    height: '75%',
    width: 24,
    justifyContent: 'flex-end',
  },
  bar: {
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#3B82F6',
    minHeight: 2,
  },
  barLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  barValue: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 4,
  },
  weeklyTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  weeklyTotalLabel: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
  weeklyTotalValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3B82F6',
  },
  prCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  prHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  prExercise: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  prBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  prImprovement: {
    fontSize: 12,
    fontWeight: '500',
    color: '#059669',
  },
  prDetails: {
    flexDirection: 'row',
    gap: 16,
  },
  prDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  prDetailText: {
    fontSize: 14,
    color: '#6B7280',
  },
  exerciseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  exerciseIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#EFF6FF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  exerciseStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  exerciseStat: {
    fontSize: 14,
    color: '#6B7280',
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendText: {
    fontSize: 14,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 16,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  startWorkoutButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  startWorkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});