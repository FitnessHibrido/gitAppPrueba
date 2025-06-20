import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { Heart, MessageCircle, Share2, MoreVertical, Send, Image as ImageIcon, CircleAlert as AlertCircle, RefreshCw } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface Post {
  id: string;
  user_id: string;
  title: string | null;
  caption: string | null;
  image_url: string | null;
  images_url: string[] | null;
  created_at: string;
  user: {
    name: string;
    avatar_url: string | null;
    prestige: string;
  };
  likes: number;
  comments: number;
  liked_by_user: boolean;
}

interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  created_at: string;
  user: {
    name: string;
    avatar_url: string | null;
  };
}

export default function CommunityFeedScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newComment, setNewComment] = useState('');
  const [commentingPostId, setCommentingPostId] = useState<string | null>(null);
  const [comments, setComments] = useState<Record<string, Comment[]>>({});
  const [loadingComments, setLoadingComments] = useState<Record<string, boolean>>({});

  const fetchPosts = async () => {
    try {
      setError(null);
      
      const { data: postsData, error: postsError } = await supabase
        .from('community_posts')
        .select(`
          *,
          user:profiles(name, avatar_url, prestige)
        `)
        .order('created_at', { ascending: false });

      if (postsError) throw postsError;

      // Get likes count for each post
      const postsWithLikes = await Promise.all(postsData.map(async (post) => {
        const { count: likesCount, error: likesError } = await supabase
          .from('community_likes')
          .select('*', { count: 'exact', head: true })
          .eq('post_id', post.id);

        if (likesError) throw likesError;

        // Check if current user liked the post
        const { data: userLike, error: userLikeError } = await supabase
          .from('community_likes')
          .select('*')
          .eq('post_id', post.id)
          .eq('user_id', user?.id)
          .maybeSingle();

        if (userLikeError) throw userLikeError;

        // Get comments count
        const { count: commentsCount, error: commentsError } = await supabase
          .from('community_comments')
          .select('*', { count: 'exact', head: true })
          .eq('post_id', post.id);

        if (commentsError) throw commentsError;

        return {
          ...post,
          likes: likesCount || 0,
          comments: commentsCount || 0,
          liked_by_user: !!userLike
        };
      }));

      setPosts(postsWithLikes);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('No pudimos cargar las publicaciones. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const fetchComments = async (postId: string) => {
    try {
      setLoadingComments(prev => ({ ...prev, [postId]: true }));
      
      const { data, error } = await supabase
        .from('community_comments')
        .select(`
          *,
          user:profiles(name, avatar_url)
        `)
        .eq('post_id', postId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      
      setComments(prev => ({ ...prev, [postId]: data }));
    } catch (err) {
      console.error('Error fetching comments:', err);
    } finally {
      setLoadingComments(prev => ({ ...prev, [postId]: false }));
    }
  };

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, [user]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchPosts();
  }, []);

  const handleLike = async (postId: string, isLiked: boolean) => {
    if (!user) return;

    try {
      if (isLiked) {
        // Unlike
        await supabase
          .from('community_likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', user.id);
      } else {
        // Like
        await supabase
          .from('community_likes')
          .insert({
            post_id: postId,
            user_id: user.id
          });
      }

      // Update local state
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === postId 
            ? { 
                ...post, 
                likes: isLiked ? post.likes - 1 : post.likes + 1,
                liked_by_user: !isLiked
              } 
            : post
        )
      );
    } catch (err) {
      console.error('Error toggling like:', err);
    }
  };

  const handleComment = async (postId: string) => {
    if (!user || !newComment.trim()) return;

    try {
      const { data, error } = await supabase
        .from('community_comments')
        .insert({
          post_id: postId,
          user_id: user.id,
          content: newComment.trim()
        })
        .select(`
          *,
          user:profiles(name, avatar_url)
        `)
        .single();

      if (error) throw error;

      // Update comments
      setComments(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), data]
      }));

      // Update comment count
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === postId 
            ? { ...post, comments: post.comments + 1 } 
            : post
        )
      );

      // Clear input
      setNewComment('');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  const toggleComments = (postId: string) => {
    if (commentingPostId === postId) {
      setCommentingPostId(null);
    } else {
      setCommentingPostId(postId);
      if (!comments[postId]) {
        fetchComments(postId);
      }
    }
  };

  const handleShare = async (post: Post) => {
    try {
      const message = `¡Mira esta publicación de ${post.user.name}!\n\n${post.title || ''}\n${post.caption || ''}\n\n#FitnessHibrido`;
      
      // Use Share API
      const result = await Share.share({
        message,
        url: post.image_url || undefined,
        title: 'Compartir publicación'
      });
    } catch (error) {
      console.error('Error sharing post:', error);
    }
  };

  const navigateToProfile = (userId: string) => {
    router.push({
      pathname: '/community/user-profile',
      params: { userId }
    });
  };

  const renderPost = ({ item: post }: { item: Post }) => {
    const isCommenting = commentingPostId === post.id;
    
    return (
      <View style={styles.postCard}>
        {/* Post Header */}
        <TouchableOpacity 
          style={styles.postHeader}
          onPress={() => navigateToProfile(post.user_id)}
        >
          <Image
            source={{ 
              uri: post.user.avatar_url || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' 
            }}
            style={styles.avatar}
          />
          <View style={styles.postHeaderInfo}>
            <Text style={styles.userName}>{post.user.name}</Text>
            <Text style={styles.postTime}>
              {new Date(post.created_at).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </Text>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <MoreVertical size={20} color="#6B7280" />
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Post Content */}
        <View style={styles.postContent}>
          {post.title && (
            <Text style={styles.postTitle}>{post.title}</Text>
          )}
          {post.caption && (
            <Text style={styles.postCaption}>{post.caption}</Text>
          )}
          {post.image_url && (
            <Image
              source={{ uri: post.image_url }}
              style={styles.postImage}
              resizeMode="cover"
            />
          )}
          {post.images_url && post.images_url.length > 0 && (
            <FlatList
              data={post.images_url}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item: imageUrl }) => (
                <Image
                  source={{ uri: imageUrl }}
                  style={styles.galleryImage}
                  resizeMode="cover"
                />
              )}
              keyExtractor={(item, index) => `${post.id}-image-${index}`}
              contentContainerStyle={styles.imageGallery}
              pagingEnabled
            />
          )}
        </View>

        {/* Post Actions */}
        <View style={styles.postActions}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => handleLike(post.id, post.liked_by_user)}
          >
            <Heart 
              size={20} 
              color={post.liked_by_user ? '#EF4444' : '#6B7280'} 
              fill={post.liked_by_user ? '#EF4444' : 'transparent'} 
            />
            <Text style={styles.actionText}>{post.likes}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => toggleComments(post.id)}
          >
            <MessageCircle size={20} color="#6B7280" />
            <Text style={styles.actionText}>{post.comments}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => handleShare(post)}
          >
            <Share2 size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Comments Section */}
        {isCommenting && (
          <View style={styles.commentsSection}>
            {loadingComments[post.id] ? (
              <ActivityIndicator size="small" color="#6366F1" style={styles.commentsLoading} />
            ) : (
              <>
                {comments[post.id]?.length === 0 ? (
                  <Text style={styles.noCommentsText}>No hay comentarios aún. ¡Sé el primero en comentar!</Text>
                ) : (
                  comments[post.id]?.map(comment => (
                    <View key={comment.id} style={styles.commentItem}>
                      <Image
                        source={{ 
                          uri: comment.user.avatar_url || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' 
                        }}
                        style={styles.commentAvatar}
                      />
                      <View style={styles.commentContent}>
                        <Text style={styles.commentUserName}>{comment.user.name}</Text>
                        <Text style={styles.commentText}>{comment.content}</Text>
                        <Text style={styles.commentTime}>
                          {new Date(comment.created_at).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </Text>
                      </View>
                    </View>
                  ))
                )}
              </>
            )}
            
            <View style={styles.addCommentContainer}>
              <TextInput
                style={styles.commentInput}
                placeholder="Añadir un comentario..."
                value={newComment}
                onChangeText={setNewComment}
                multiline
              />
              <TouchableOpacity 
                style={[
                  styles.sendButton,
                  !newComment.trim() && styles.sendButtonDisabled
                ]}
                onPress={() => handleComment(post.id)}
                disabled={!newComment.trim()}
              >
                <Send size={20} color={newComment.trim() ? '#FFFFFF' : '#A1A1AA'} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  };

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.noAuthContainer}>
          <AlertCircle size={48} color="#6B7280" />
          <Text style={styles.noAuthTitle}>Inicia sesión para ver el feed</Text>
          <Text style={styles.noAuthText}>
            Necesitas iniciar sesión para acceder al feed de la comunidad
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
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed de la Comunidad</Text>
        <TouchableOpacity 
          style={styles.newPostButton}
          onPress={() => router.push('/community/new-post')}
        >
          <ImageIcon size={20} color="#FFFFFF" />
          <Text style={styles.newPostButtonText}>Publicar</Text>
        </TouchableOpacity>
      </View>

      {loading && !refreshing ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#6366F1" />
          <Text style={styles.loadingText}>Cargando publicaciones...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <AlertCircle size={48} color="#EF4444" />
          <Text style={styles.errorTitle}>No pudimos cargar las publicaciones</Text>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchPosts}>
            <RefreshCw size={20} color="#3B82F6" />
            <Text style={styles.retryButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      ) : posts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No hay publicaciones aún</Text>
          <Text style={styles.emptyText}>
            Sé el primero en compartir algo con la comunidad
          </Text>
          <TouchableOpacity 
            style={styles.createPostButton}
            onPress={() => router.push('/community/new-post')}
          >
            <Text style={styles.createPostButtonText}>Crear Publicación</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.feedContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              onRefresh={onRefresh}
              colors={['#6366F1']}
              tintColor="#6366F1"
            />
          }
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  newPostButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6366F1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  newPostButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  emptyText: {
    color: '#6B7280',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  createPostButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  createPostButtonText: {
    color: '#FFFFFF',
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
  feedContainer: {
    padding: 12,
  },
  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postHeaderInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  postTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  moreButton: {
    padding: 4,
  },
  postContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  postCaption: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 16,
    lineHeight: 24,
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 12,
  },
  imageGallery: {
    gap: 8,
  },
  galleryImage: {
    width: 300,
    height: 300,
    borderRadius: 12,
    marginRight: 8,
  },
  postActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
    gap: 6,
  },
  actionText: {
    fontSize: 14,
    color: '#6B7280',
  },
  commentsSection: {
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    padding: 16,
  },
  commentsLoading: {
    marginVertical: 16,
  },
  noCommentsText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginVertical: 16,
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
  },
  commentUserName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 4,
  },
  commentTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    gap: 12,
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: '#111827',
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#E5E7EB',
  },
});