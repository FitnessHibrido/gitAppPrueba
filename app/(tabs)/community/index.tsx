import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, RefreshControl, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Trophy, Users, Award, ChevronRight, Medal, Star, TrendingUp, Crown, CircleAlert as AlertCircle } from 'lucide-react-native';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

interface UserRanking {
  id: string;
  name: string;
  avatar_url: string | null;
  prestige: string;
  total_points: number;
  achievements_count: number;
  rank: number;
}

interface UserAchievement {
  id: string;
  user_id: string;
  achievement_id: number;
  achievement_name: string;
  achievement_type: string;
  points: number;
  achieved_at: string;
}

export default function CommunityScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [topUsers, setTopUsers] = useState<UserRanking[]>([]);
  const [userRank, setUserRank] = useState<UserRanking | null>(null);
  const [recentAchievements, setRecentAchievements] = useState<UserAchievement[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchCommunityData = async () => {
    try {
      setError(null);
      
      // Obtener top 10 usuarios
      const { data: rankingData, error: rankingError } = await supabase
        .from('community_ranking_view')
        .select('*')
        .limit(10);

      if (rankingError) throw rankingError;
      setTopUsers(rankingData || []);

      // Obtener rango del usuario actual si está autenticado
      if (user) {
        const { data: currentUserRank, error: userRankError } = await supabase
          .from('community_ranking_view')
          .select('*')
          .eq('id', user.id)
          .single();

        if (userRankError && userRankError.code !== 'PGRST116') throw userRankError;
        setUserRank(currentUserRank || null);

        // Obtener logros recientes de la comunidad
        const { data: achievementsData, error: achievementsError } = await supabase
          .from('user_achievements_view')
          .select('id, user_id, achievement_id, achievement_name, achievement_type, points, achieved_at')
          .order('achieved_at', { ascending: false })
          .limit(5);

        if (achievementsError) throw achievementsError;
        setRecentAchievements(achievementsData || []);
      }
    } catch (err) {
      console.error('Error fetching community data:', err);
      setError('No pudimos cargar los datos de la comunidad. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchCommunityData();
  }, [user]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchCommunityData();
  }, []);

  const getPrestigeColor = (prestige: string) => {
    switch (prestige) {
      case 'Recluta': return '#6B7280';
      case 'Bronce': return '#B45309';
      case 'Plata': return '#94A3B8';
      case 'Oro': return '#F59E0B';
      case 'Platino': return '#06B6D4';
      case 'Diamante': return '#3B82F6';
      case 'Maestro': return '#8B5CF6';
      case 'Gran Maestro': return '#EC4899';
      default: return '#6B7280';
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown size={20} color="#F59E0B" />;
    if (rank === 2) return <Medal size={20} color="#94A3B8" />;
    if (rank === 3) return <Medal size={20} color="#B45309" />;
    return <Star size={20} color="#6B7280" />;
  };

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'workout': return <TrendingUp size={20} color="#3B82F6" />;
      case 'streak': return <Award size={20} color="#F59E0B" />;
      case 'volume': return <Trophy size={20} color="#10B981" />;
      default: return <Star size={20} color="#6B7280" />;
    }
  };

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.noAuthContainer}>
          <AlertCircle size={48} color="#6B7280" />
          <Text style={styles.noAuthTitle}>Inicia sesión para ver la comunidad</Text>
          <Text style={styles.noAuthText}>
            Necesitas iniciar sesión para acceder a la comunidad y ver el ranking
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
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Comunidad</Text>
          <Text style={styles.subtitle}>Compite, comparte y celebra tus logros</Text>
        </View>

        {loading && !refreshing ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#6366F1" />
            <Text style={styles.loadingText}>Cargando datos de la comunidad...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <AlertCircle size={48} color="#EF4444" />
            <Text style={styles.errorTitle}>No pudimos cargar los datos</Text>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity style={styles.retryButton} onPress={fetchCommunityData}>
              <Text style={styles.retryButtonText}>Reintentar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {/* User Rank Card */}
            {userRank && (
              <View style={styles.userRankCard}>
                <LinearGradient
                  colors={['#6366F1', '#4F46E5']}
                  style={styles.userRankGradient}
                >
                  <View style={styles.userRankContent}>
                    <View style={styles.userRankInfo}>
                      <Image
                        source={{ 
                          uri: userRank.avatar_url || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' 
                        }}
                        style={styles.userAvatar}
                      />
                      <View>
                        <Text style={styles.userName}>{userRank.name}</Text>
                        <View style={styles.prestigeBadge}>
                          <Text style={styles.prestigeText}>{userRank.prestige}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.userStats}>
                      <View style={styles.userStat}>
                        <Text style={styles.userStatValue}>#{userRank.rank}</Text>
                        <Text style={styles.userStatLabel}>Ranking</Text>
                      </View>
                      <View style={styles.userStat}>
                        <Text style={styles.userStatValue}>{userRank.total_points}</Text>
                        <Text style={styles.userStatLabel}>Puntos</Text>
                      </View>
                      <View style={styles.userStat}>
                        <Text style={styles.userStatValue}>{userRank.achievements_count}</Text>
                        <Text style={styles.userStatLabel}>Logros</Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            )}

            {/* Quick Actions */}
            <View style={styles.quickActionsContainer}>
              <TouchableOpacity 
                style={styles.quickActionButton}
                onPress={() => router.push('/community/ranking')}
              >
                <View style={[styles.quickActionIcon, { backgroundColor: '#EFF6FF' }]}>
                  <Trophy size={24} color="#3B82F6" />
                </View>
                <View style={styles.quickActionContent}>
                  <Text style={styles.quickActionTitle}>Ranking</Text>
                  <Text style={styles.quickActionSubtitle}>Ver tabla de clasificación</Text>
                </View>
                <ChevronRight size={20} color="#6B7280" />
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.quickActionButton}
                onPress={() => router.push('/community/achievements')}
              >
                <View style={[styles.quickActionIcon, { backgroundColor: '#ECFDF5' }]}>
                  <Award size={24} color="#10B981" />
                </View>
                <View style={styles.quickActionContent}>
                  <Text style={styles.quickActionTitle}>Mis Logros</Text>
                  <Text style={styles.quickActionSubtitle}>Ver tus medallas y logros</Text>
                </View>
                <ChevronRight size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>

            {/* Top Users Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Top Atletas</Text>
                <TouchableOpacity onPress={() => router.push('/community/ranking')}>
                  <Text style={styles.sectionAction}>Ver todos</Text>
                </TouchableOpacity>
              </View>

              {topUsers.slice(0, 5).map((rankUser, index) => (
                <TouchableOpacity
                  key={rankUser.id}
                  style={styles.rankCard}
                  onPress={() => router.push({
                    pathname: '/community/user-profile',
                    params: { userId: rankUser.id }
                  })}
                >
                  <View style={styles.rankPosition}>
                    {getRankIcon(rankUser.rank)}
                    <Text style={styles.rankNumber}>#{rankUser.rank}</Text>
                  </View>
                  
                  <Image
                    source={{ 
                      uri: rankUser.avatar_url || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' 
                    }}
                    style={styles.rankAvatar}
                  />
                  
                  <View style={styles.rankInfo}>
                    <Text style={styles.rankName}>{rankUser.name}</Text>
                    <View style={[
                      styles.rankPrestige,
                      { backgroundColor: `${getPrestigeColor(rankUser.prestige)}20` }
                    ]}>
                      <Text style={[
                        styles.rankPrestigeText,
                        { color: getPrestigeColor(rankUser.prestige) }
                      ]}>
                        {rankUser.prestige}
                      </Text>
                    </View>
                  </View>
                  
                  <View style={styles.rankPoints}>
                    <Text style={styles.rankPointsValue}>{rankUser.total_points}</Text>
                    <Text style={styles.rankPointsLabel}>pts</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Recent Achievements */}
            {recentAchievements.length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Logros Recientes</Text>
                </View>

                {recentAchievements.map((achievement) => (
                  <View key={achievement.id} style={styles.achievementCard}>
                    <View style={[
                      styles.achievementIcon,
                      { backgroundColor: achievement.achievement_type === 'workout' ? '#EFF6FF' : 
                                        achievement.achievement_type === 'streak' ? '#FEF3C7' : '#ECFDF5' }
                    ]}>
                      {getAchievementIcon(achievement.achievement_type)}
                    </View>
                    
                    <View style={styles.achievementInfo}>
                      <Text style={styles.achievementName}>{achievement.achievement_name}</Text>
                      <Text style={styles.achievementDate}>
                        {new Date(achievement.achieved_at).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </Text>
                    </View>
                    
                    <View style={styles.achievementPoints}>
                      <Text style={styles.achievementPointsValue}>+{achievement.points}</Text>
                      <Text style={styles.achievementPointsLabel}>pts</Text>
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
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
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
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: '600',
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
  userRankCard: {
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  userRankGradient: {
    borderRadius: 20,
  },
  userRankContent: {
    padding: 20,
  },
  userRankInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  prestigeBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  prestigeText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  userStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
  },
  userStat: {
    alignItems: 'center',
  },
  userStatValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  userStatLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  quickActionsContainer: {
    padding: 20,
    gap: 12,
  },
  quickActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  quickActionContent: {
    flex: 1,
  },
  quickActionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  quickActionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  sectionAction: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6366F1',
  },
  rankCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  rankPosition: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 50,
  },
  rankNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginLeft: 4,
  },
  rankAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  rankInfo: {
    flex: 1,
  },
  rankName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  rankPrestige: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  rankPrestigeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  rankPoints: {
    alignItems: 'flex-end',
  },
  rankPointsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6366F1',
  },
  rankPointsLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  achievementDate: {
    fontSize: 14,
    color: '#6B7280',
  },
  achievementPoints: {
    alignItems: 'flex-end',
  },
  achievementPointsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10B981',
  },
  achievementPointsLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
});