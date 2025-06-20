import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { Award, Trophy, TrendingUp, Star, Clock, CircleAlert as AlertCircle, RefreshCw, Heart, Book, Users, Calendar, Target, Gift } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Achievement {
  id: string;
  user_id: string;
  achievement_id: number;
  achievement_name: string;
  achievement_condition: string;
  achievement_type: string;
  points: number;
  achieved_at: string;
  is_repeatable: boolean;
}

export default function AchievementsScreen() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [userPoints, setUserPoints] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const fetchAchievements = async () => {
    try {
      setError(null);
      
      if (!user) {
        setLoading(false);
        return;
      }

      // Obtener logros del usuario
      const { data, error: achievementsError } = await supabase
        .from('user_achievements_view')
        .select('*')
        .eq('user_id', user.id)
        .order('achieved_at', { ascending: false });

      if (achievementsError) throw achievementsError;
      setAchievements(data || []);

      // Obtener puntos totales del usuario
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('total_points')
        .eq('id', user.id)
        .single();

      if (profileError) throw profileError;
      setUserPoints(profileData?.total_points || 0);
    } catch (err) {
      console.error('Error fetching achievements:', err);
      setError('No pudimos cargar tus logros. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, [user]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchAchievements();
  }, []);

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'workout': return <TrendingUp size={24} color="#FFFFFF" />;
      case 'streak': return <Clock size={24} color="#FFFFFF" />;
      case 'volume': return <Trophy size={24} color="#FFFFFF" />;
      case 'nutrition': return <Heart size={24} color="#FFFFFF" />;
      case 'tracking': return <Target size={24} color="#FFFFFF" />;
      case 'learning': return <Book size={24} color="#FFFFFF" />;
      case 'social': return <Users size={24} color="#FFFFFF" />;
      case 'milestone': return <Calendar size={24} color="#FFFFFF" />;
      case 'challenge': return <Target size={24} color="#FFFFFF" />;
      case 'special': return <Gift size={24} color="#FFFFFF" />;
      default: return <Award size={24} color="#FFFFFF" />;
    }
  };

  const getAchievementColor = (type: string) => {
    switch (type) {
      case 'workout': return ['#3B82F6', '#2563EB'];
      case 'streak': return ['#F59E0B', '#D97706'];
      case 'volume': return ['#10B981', '#059669'];
      case 'nutrition': return ['#EC4899', '#DB2777'];
      case 'tracking': return ['#8B5CF6', '#7C3AED'];
      case 'learning': return ['#14B8A6', '#0D9488'];
      case 'social': return ['#6366F1', '#4F46E5'];
      case 'milestone': return ['#F97316', '#EA580C'];
      case 'challenge': return ['#EF4444', '#DC2626'];
      case 'special': return ['#A855F7', '#9333EA'];
      default: return ['#8B5CF6', '#7C3AED'];
    }
  };

  const getAchievementTypeName = (type: string) => {
    switch (type) {
      case 'workout': return 'Entrenamiento';
      case 'streak': return 'Constancia';
      case 'volume': return 'Volumen';
      case 'nutrition': return 'Nutrición';
      case 'tracking': return 'Seguimiento';
      case 'learning': return 'Aprendizaje';
      case 'social': return 'Social';
      case 'milestone': return 'Hitos';
      case 'challenge': return 'Desafíos';
      case 'special': return 'Especiales';
      default: return 'Otros';
    }
  };

  const groupAchievementsByType = () => {
    const grouped: Record<string, Achievement[]> = {};
    
    achievements.forEach(achievement => {
      const type = achievement.achievement_type || 'other';
      if (!grouped[type]) {
        grouped[type] = [];
      }
      grouped[type].push(achievement);
    });
    
    return grouped;
  };

  if (loading && !refreshing) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Award size={48} color="#D1D5DB" />
          <Text style={styles.loadingText}>Cargando tus logros...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <AlertCircle size={48} color="#EF4444" />
          <Text style={styles.errorTitle}>No pudimos cargar tus logros</Text>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchAchievements}>
            <RefreshCw size={20} color="#3B82F6" />
            <Text style={styles.retryButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const groupedAchievements = groupAchievementsByType();
  const achievementTypes = Object.keys(groupedAchievements);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh}
            colors={['#6366F1']}
            tintColor="#6366F1"
          />
        }
      >
        {/* Points Summary */}
        <View style={styles.pointsSummary}>
          <LinearGradient
            colors={['#6366F1', '#4F46E5']}
            style={styles.pointsGradient}
          >
            <View style={styles.pointsContent}>
              <View style={styles.pointsHeader}>
                <Star size={24} color="#FFFFFF" />
                <Text style={styles.pointsTitle}>Puntos Totales</Text>
              </View>
              <Text style={styles.pointsValue}>{userPoints}</Text>
              <Text style={styles.pointsSubtitle}>
                Has conseguido {achievements.length} logros
              </Text>
            </View>
          </LinearGradient>
        </View>

        {achievements.length === 0 ? (
          <View style={styles.emptyState}>
            <Award size={64} color="#D1D5DB" />
            <Text style={styles.emptyStateTitle}>¡Aún no tienes logros!</Text>
            <Text style={styles.emptyStateText}>
              Completa entrenamientos y desafíos para ganar logros y puntos
            </Text>
          </View>
        ) : (
          achievementTypes.map(type => (
            <View key={type} style={styles.section}>
              <Text style={styles.sectionTitle}>
                Logros de {getAchievementTypeName(type)}
              </Text>
              
              <View style={styles.achievementsGrid}>
                {groupedAchievements[type].map(achievement => (
                  <View key={achievement.id} style={styles.achievementCard}>
                    <LinearGradient
                      colors={getAchievementColor(achievement.achievement_type)}
                      style={styles.achievementIconContainer}
                    >
                      {getAchievementIcon(achievement.achievement_type)}
                    </LinearGradient>
                    
                    <Text style={styles.achievementName}>
                      {achievement.achievement_name}
                    </Text>
                    
                    <Text style={styles.achievementCondition}>
                      {achievement.achievement_condition}
                    </Text>
                    
                    <View style={styles.achievementMeta}>
                      <View style={styles.achievementPoints}>
                        <Star size={14} color="#F59E0B" fill="#F59E0B" />
                        <Text style={styles.achievementPointsText}>
                          +{achievement.points} pts
                        </Text>
                      </View>
                      
                      <Text style={styles.achievementDate}>
                        {new Date(achievement.achieved_at).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6B7280',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
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
  pointsSummary: {
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  pointsGradient: {
    borderRadius: 20,
  },
  pointsContent: {
    padding: 24,
    alignItems: 'center',
  },
  pointsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  pointsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  pointsValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  pointsSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
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
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  achievementCard: {
    width: '47%',
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  achievementIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  achievementName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  achievementCondition: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  achievementMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  achievementPoints: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  achievementPointsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F59E0B',
  },
  achievementDate: {
    fontSize: 12,
    color: '#6B7280',
  },
});