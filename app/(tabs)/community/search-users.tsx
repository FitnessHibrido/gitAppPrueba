import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Search, UserPlus, Check, CircleAlert as AlertCircle } from 'lucide-react-native';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';

interface User {
  id: string;
  name: string;
  avatar_url: string | null;
  prestige: string;
  isFollowing: boolean;
}

export default function SearchUsersScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [followLoading, setFollowLoading] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  const searchUsers = async (query: string) => {
    if (!query.trim() || !user) return;

    try {
      setLoading(true);
      setError(null);

      // Search for users by name
      const { data: usersData, error: usersError } = await supabase
        .from('profiles')
        .select('id, name, avatar_url, prestige')
        .ilike('name', `%${query}%`)
        .neq('id', user.id) // Exclude current user
        .limit(20);

      if (usersError) throw usersError;

      // Get following status for each user
      const usersWithFollowStatus = await Promise.all(
        usersData.map(async (userData) => {
          const { data: followData, error: followError } = await supabase
            .from('follows')
            .select('id')
            .eq('follower_id', user.id)
            .eq('following_id', userData.id)
            .maybeSingle();

          if (followError) throw followError;

          return {
            ...userData,
            isFollowing: !!followData
          };
        })
      );

      setUsers(usersWithFollowStatus);
    } catch (err) {
      console.error('Error searching users:', err);
      setError('No pudimos buscar usuarios. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const delayDebounceFn = setTimeout(() => {
        searchUsers(searchQuery);
      }, 500);

      return () => clearTimeout(delayDebounceFn);
    } else {
      setUsers([]);
    }
  }, [searchQuery]);

  const handleFollow = async (userId: string, isFollowing: boolean) => {
    if (!user) return;

    try {
      setFollowLoading(prev => ({ ...prev, [userId]: true }));

      if (isFollowing) {
        // Unfollow
        const { error } = await supabase
          .from('follows')
          .delete()
          .eq('follower_id', user.id)
          .eq('following_id', userId);

        if (error) throw error;
      } else {
        // Follow
        const { error } = await supabase
          .from('follows')
          .insert({
            follower_id: user.id,
            following_id: userId
          });

        if (error) throw error;
      }

      // Update local state
      setUsers(prevUsers => 
        prevUsers.map(u => 
          u.id === userId 
            ? { ...u, isFollowing: !isFollowing } 
            : u
        )
      );
    } catch (err) {
      console.error('Error toggling follow:', err);
    } finally {
      setFollowLoading(prev => ({ ...prev, [userId]: false }));
    }
  };

  const navigateToProfile = (userId: string) => {
    router.push({
      pathname: '/community/user-profile',
      params: { userId }
    });
  };

  const renderUserItem = ({ item }: { item: User }) => (
    <View style={styles.userItem}>
      <TouchableOpacity 
        style={styles.userInfo}
        onPress={() => navigateToProfile(item.id)}
      >
        <Image
          source={{ 
            uri: item.avatar_url || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' 
          }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userPrestige}>{item.prestige}</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[
          styles.followButton,
          item.isFollowing && styles.followingButton
        ]}
        onPress={() => handleFollow(item.id, item.isFollowing)}
        disabled={followLoading[item.id]}
      >
        {followLoading[item.id] ? (
          <ActivityIndicator size="small" color={item.isFollowing ? '#6366F1' : '#FFFFFF'} />
        ) : (
          <>
            {item.isFollowing ? (
              <Check size={16} color="#6366F1" />
            ) : (
              <UserPlus size={16} color="#FFFFFF" />
            )}
            <Text style={[
              styles.followButtonText,
              item.isFollowing && styles.followingButtonText
            ]}>
              {item.isFollowing ? 'Siguiendo' : 'Seguir'}
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar usuarios..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCapitalize="none"
          />
        </View>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#6366F1" />
          <Text style={styles.loadingText}>Buscando usuarios...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <AlertCircle size={48} color="#EF4444" />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : users.length === 0 ? (
        <View style={styles.emptyContainer}>
          {searchQuery.trim().length >= 2 ? (
            <Text style={styles.emptyText}>No se encontraron usuarios que coincidan con "{searchQuery}"</Text>
          ) : (
            <Text style={styles.emptyText}>Busca usuarios por nombre para seguirlos</Text>
          )}
        </View>
      ) : (
        <FlatList
          data={users}
          renderItem={renderUserItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#111827',
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
  errorText: {
    marginTop: 16,
    fontSize: 16,
    color: '#EF4444',
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  listContainer: {
    padding: 16,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  userPrestige: {
    fontSize: 14,
    color: '#6B7280',
  },
  followButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6366F1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  followingButton: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#6366F1',
  },
  followButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  followingButtonText: {
    color: '#6366F1',
  },
});