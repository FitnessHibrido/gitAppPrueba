import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { Trophy, Award, Star, Calendar, MapPin, Mail, ArrowLeft, CircleAlert as AlertCircle } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface UserProfile {
  id: string;
  name: string;
  email: string | null;
  avatar_url: string | null;
  bio: string | null;
  location: string | null;
  prestige: string;
  total_points: number;
  created_at: string;
}

interface UserAchievement {
  id: string;
  achievement_id: number;
  achievement_name: string;
  achievement_type: string;
  points: number;
  achieved_at: string;
}

export default function UserProfileScreen() {
  const { userId } = useLocalSearchParams();
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [achievements, setAchievements] = useState<UserAchievement[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!userId) {
          throw new Error('ID de usuario no proporcionado');
        }

        // Comprobar si es el usuario actual
        setIsCurrentUser(user?.id === userId);

        // Obtener perfil del usuario
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('id, name, email, avatar_url, bio, location, prestige, total_points, created_at')
          .eq('id', userId)
          .single();

        if (profileError) throw profileError;
        setProfile(profileData);

        // Obtener logros del usuario
        const { data: achievementsData, error: achievementsError } = await supabase
          .from('user_achievements_view')
          .select('id, achievement_id, achievement_name, achievement_type, points, achieved_at')
          .eq('user_id', userId)
          .order('achieved_at', { ascending: false })
          .limit(10);

        if (achievementsError) throw achievementsError;
        setAchievements(achievementsData || []);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('No pudimos cargar el perfil del usuario. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId, user]);

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

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'workout': return <Trophy size={20} color="#FFFFFF" />;
      case 'streak': return <Calendar size={20} color="#FFFFFF" />;
      case 'volume': return <Award size={20} color="#FFFFFF" />;
      default: return <Star size={20} color="#FFFFFF" />;
    }
  };

  const getAchievementColor = (type: string) => {
    switch (type) {
      case 'workout': return ['#3B82F6', '#2563EB'];
      case 'streak': return ['#F59E0B', '#D97706'];
      case 'volume': return ['#10B981', '#059669'];
      default: return ['#8B5CF6', '#7C3AED'];
    }
  };

  const formatJoinDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#6366F1" />
          <Text style={styles.loadingText}>Cargando perfil...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error || !profile) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <AlertCircle size={48} color="#EF4444" />
          <Text style={styles.errorTitle}>No pudimos cargar el perfil</Text>
          <Text style={styles.errorText}>{error || 'Perfil no encontrado'}</Text>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButtonContainer}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="#FFFFFF" />
          </TouchableOpacity>
          
          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'transparent']}
            style={styles.headerGradient}
          />
          
          <View style={styles.profileImageContainer}>
            <Image
              source={{ 
                uri: profile.avatar_url || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' 
              }}
              style={styles.profileImage}
            />
          </View>
          
          <Text style={styles.profileName}>{profile.name}</Text>
          
          <View style={[
            styles.prestigeBadge,
            { backgroundColor: `${getPrestigeColor(profile.prestige)}20` }
          ]}>
            <Text style={[
              styles.prestigeText,
              { color: getPrestigeColor(profile.prestige) }
            ]}>
              {profile.prestige}
            </Text>
          </View>
          
          <View style={styles.pointsContainer}>
            <Star size={20} color="#F59E0B" fill="#F59E0B" />
            <Text style={styles.pointsText}>{profile.total_points} puntos</Text>
          </View>
        </View>

        {/* Profile Info */}
        <View style={styles.infoSection}>
          {profile.bio && (
            <Text style={styles.bioText}>{profile.bio}</Text>
          )}
          
          <View style={styles.infoItems}>
            {profile.location && (
              <View style={styles.infoItem}>
                <MapPin size={16} color="#6B7280" />
                <Text style={styles.infoText}>{profile.location}</Text>
              </View>
            )}
            
            {profile.email && (
              <View style={styles.infoItem}>
                <Mail size={16} color="#6B7280" />
                <Text style={styles.infoText}>{profile.email}</Text>
              </View>
            )}
            
            <View style={styles.infoItem}>
              <Calendar size={16} color="#6B7280" />
              <Text style={styles.infoText}>
                Miembro desde {formatJoinDate(profile.created_at)}
              </Text>
            </View>
          </View>
        </View>

        {/* Recent Achievements */}
        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Logros Recientes</Text>
          
          {achievements.length === 0 ? (
            <View style={styles.emptyAchievements}>
              <Award size={32} color="#D1D5DB" />
              <Text style={styles.emptyAchievementsText}>
                {isCurrentUser 
                  ? 'Aún no tienes logros. ¡Completa entrenamientos para ganarlos!' 
                  : 'Este usuario aún no tiene logros.'}
              </Text>
            </View>
          ) : (
            <View style={styles.achievementsGrid}>
              {achievements.map(achievement => (
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
                  
                  <View style={styles.achievementMeta}>
                    <View style={styles.achievementPoints}>
                      <Star size={14} color="#F59E0B" fill="#F59E0B" />
                      <Text style={styles.achievementPointsText}>
                        +{achievement.points}
                      </Text>
                    </View>
                    
                    <Text style={styles.achievementDate}>
                      {new Date(achievement.achieved_at).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}
          
          {achievements.length > 0 && (
            <TouchableOpacity 
              style={styles.viewAllButton}
              onPress={() => router.push({
                pathname: '/community/achievements',
                params: { userId: profile.id }
              })}
            >
              <Text style={styles.viewAllButtonText}>
                {isCurrentUser ? 'Ver todos mis logros' : 'Ver todos sus logros'}
              </Text>
            </TouchableOpacity>
          )}
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
  backButton: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    height: 240,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  profileImageContainer: {
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  prestigeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  prestigeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 8,
  },
  pointsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 12,
  },
  bioText: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 16,
  },
  infoItems: {
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#6B7280',
  },
  achievementsSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  emptyAchievements: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
  },
  emptyAchievementsText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 20,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  achievementCard: {
    width: '48%',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  achievementIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  achievementName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
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
  viewAllButton: {
    backgroundColor: '#EFF6FF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  viewAllButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
  },
});