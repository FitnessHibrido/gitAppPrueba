import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { Crown, Medal, Search, AlertCircle } from 'lucide-react-native';
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

export default function RankingScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [rankings, setRankings] = useState<UserRanking[]>([]);
  const [userRank, setUserRank] = useState<UserRanking | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchRankings = async () => {
    try {
      setError(null);
      
      // Obtener ranking completo
      const { data, error: rankingError } = await supabase
        .from('community_ranking_view')
        .select('*')
        .order('rank', { ascending: true })
        .limit(100);

      if (rankingError) throw rankingError;
      setRankings(data || []);

      // Obtener rango del usuario actual si está autenticado
      if (user) {
        const { data: currentUserRank, error: userRankError } = await supabase
          .from('community_ranking_view')
          .select('*')
          .eq('id', user.id)
          .single();

        if (userRankError && userRankError.code !== 'PGRST116') throw userRankError;
        setUserRank(currentUserRank || null);
      }
    } catch (err) {
      console.error('Error fetching rankings:', err);
      setError('No pudimos cargar el ranking. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRankings();
  }, [user]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchRankings();
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
    if (rank === 1) return <Crown size={24} color="#F59E0B" />;
    if (rank === 2) return <Medal size={24} color="#94A3B8" />;
    if (rank === 3) return <Medal size={24} color="#B45309" />;
    return null;
  };

  const renderRankItem = ({ item }: { item: UserRanking }) => {
    const isCurrentUser = user && item.id === user.id;
    const prestigeColor = getPrestigeColor(item.prestige);
    
    return (
      <TouchableOpacity
        style={[
          styles.rankItem,
          isCurrentUser && styles.currentUserRank
        ]}
        onPress={() => router.push({
          pathname: '/community/user-profile',
          params: { userId: item.id }
        })}
      >
        <View style={styles.rankPosition}>
          {getRankIcon(item.rank) || (
            <Text style={styles.rankNumber}>#{item.rank}</Text>
          )}
        </View>
        
        <Image
          source={{ 
            uri: item.avatar_url || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' 
          }}
          style={styles.avatar}
        />
        
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <View style={[
            styles.prestigeBadge,
            { backgroundColor: `${prestigeColor}20` }
          ]}>
            <Text style={[
              styles.prestigeText,
              { color: prestigeColor }
            ]}>
              {item.prestige}
            </Text>
          </View>
        </View>
        
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsValue}>{item.total_points}</Text>
          <Text style={styles.pointsLabel}>puntos</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      {/* Top 3 Podium */}
      {rankings.length >= 3 && (
        <View style={styles.podiumContainer}>
          {/* Second Place */}
          <View style={styles.podiumItem}>
            <Image
              source={{ 
                uri: rankings[1].avatar_url || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' 
              }}
              style={styles.podiumAvatar}
            />
            <View style={[styles.podiumBadge, styles.secondPlace]}>
              <Text style={styles.podiumRank}>2</Text>
            </View>
            <Text style={styles.podiumName} numberOfLines={1}>{rankings[1].name}</Text>
            <Text style={styles.podiumPoints}>{rankings[1].total_points} pts</Text>
          </View>
          
          {/* First Place */}
          <View style={[styles.podiumItem, styles.firstPlaceContainer]}>
            <LinearGradient
              colors={['#FBBF24', '#F59E0B']}
              style={styles.firstPlaceGradient}
            >
              <Crown size={24} color="#FFFFFF" />
            </LinearGradient>
            <Image
              source={{ 
                uri: rankings[0].avatar_url || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' 
              }}
              style={[styles.podiumAvatar, styles.firstPlaceAvatar]}
            />
            <View style={[styles.podiumBadge, styles.firstPlace]}>
              <Text style={styles.podiumRank}>1</Text>
            </View>
            <Text style={[styles.podiumName, styles.firstPlaceName]} numberOfLines={1}>{rankings[0].name}</Text>
            <Text style={[styles.podiumPoints, styles.firstPlacePoints]}>{rankings[0].total_points} pts</Text>
          </View>
          
          {/* Third Place */}
          <View style={styles.podiumItem}>
            <Image
              source={{ 
                uri: rankings[2].avatar_url || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' 
              }}
              style={styles.podiumAvatar}
            />
            <View style={[styles.podiumBadge, styles.thirdPlace]}>
              <Text style={styles.podiumRank}>3</Text>
            </View>
            <Text style={styles.podiumName} numberOfLines={1}>{rankings[2].name}</Text>
            <Text style={styles.podiumPoints}>{rankings[2].total_points} pts</Text>
          </View>
        </View>
      )}
      
      {/* User's current rank */}
      {userRank && (
        <View style={styles.currentRankContainer}>
          <Text style={styles.currentRankTitle}>Tu posición actual</Text>
          <View style={styles.currentRankContent}>
            <View style={styles.currentRankPosition}>
              <Text style={styles.currentRankNumber}>#{userRank.rank}</Text>
            </View>
            <View style={styles.currentRankInfo}>
              <Text style={styles.currentRankPoints}>{userRank.total_points} puntos</Text>
              <Text style={styles.currentRankNextLevel}>
                {userRank.rank > 1 
                  ? `A ${rankings[userRank.rank - 2]?.total_points - userRank.total_points} puntos del siguiente nivel` 
                  : 'Eres el número 1!'}
              </Text>
            </View>
          </View>
        </View>
      )}
      
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderTitle}>Ranking Global</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Search size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading && !refreshing) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#6366F1" />
          <Text style={styles.loadingText}>Cargando ranking...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <AlertCircle size={48} color="#EF4444" />
          <Text style={styles.errorTitle}>No pudimos cargar el ranking</Text>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchRankings}>
            <Text style={styles.retryButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <FlatList
        data={rankings.slice(3)} // Skip top 3 as they're in the podium
        renderItem={renderRankItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
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
    padding: 20,
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
    padding: 20,
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
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  podiumContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  podiumItem: {
    alignItems: 'center',
    width: 100,
  },
  firstPlaceContainer: {
    marginTop: -30,
    marginHorizontal: 10,
  },
  firstPlaceGradient: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  podiumAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  firstPlaceAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#F59E0B',
  },
  podiumBadge: {
    position: 'absolute',
    bottom: 45,
    right: 15,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  firstPlace: {
    backgroundColor: '#F59E0B',
    bottom: 55,
    right: 10,
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  secondPlace: {
    backgroundColor: '#94A3B8',
  },
  thirdPlace: {
    backgroundColor: '#B45309',
  },
  podiumRank: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  podiumName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
    width: 90,
  },
  firstPlaceName: {
    fontSize: 16,
  },
  podiumPoints: {
    fontSize: 12,
    color: '#6B7280',
  },
  firstPlacePoints: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F59E0B',
  },
  currentRankContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  currentRankTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
    marginBottom: 12,
  },
  currentRankContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentRankPosition: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  currentRankNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  currentRankInfo: {
    flex: 1,
  },
  currentRankPoints: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  currentRankNextLevel: {
    fontSize: 14,
    color: '#6B7280',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  listHeaderTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  rankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    backgroundColor: '#FFFFFF',
  },
  currentUserRank: {
    backgroundColor: '#F0F9FF',
  },
  rankPosition: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  prestigeBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  prestigeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  pointsContainer: {
    alignItems: 'flex-end',
  },
  pointsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6366F1',
  },
  pointsLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
});