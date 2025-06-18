import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Play, BookOpen, ChevronRight, Star, Clock, Users } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function LearnScreen() {
  const router = useRouter();

  const featuredContent = [
    {
      id: 1,
      title: 'Técnica de Sentadilla Perfecta',
      type: 'Video',
      duration: '8 min',
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Técnica',
    },
    {
      id: 2,
      title: 'Guía Completa de Nutrición',
      type: 'Manual',
      duration: '15 min lectura',
      rating: 4.8,
      thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Nutrición',
    },
  ];

  return (
    <>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Biblioteca de Conocimiento</Text>
              <Text style={styles.subtitle}>Aprende y mejora tus habilidades</Text>
            </View>
            <View style={styles.headerStats}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>50+</Text>
                <Text style={styles.statLabel}>Videos</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>15+</Text>
                <Text style={styles.statLabel}>Guías</Text>
              </View>
            </View>
          </View>

          {/* Featured Content */}
          <View style={styles.featuredSection}>
            <Text style={styles.sectionTitle}>Contenido Destacado</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.featuredScroll}>
              {featuredContent.map((item) => (
                <TouchableOpacity key={item.id} style={styles.featuredCard}>
                  <Image source={{ uri: item.thumbnail }} style={styles.featuredImage} />
                  <View style={styles.featuredOverlay}>
                    <View style={styles.featuredBadge}>
                      <Text style={styles.featuredBadgeText}>{item.category}</Text>
                    </View>
                    <View style={styles.playButton}>
                      {item.type === 'Video' ? (
                        <Play size={20} color="#FFFFFF" fill="#FFFFFF" />
                      ) : (
                        <BookOpen size={20} color="#FFFFFF" />
                      )}
                    </View>
                  </View>
                  <View style={styles.featuredContent}>
                    <Text style={styles.featuredTitle}>{item.title}</Text>
                    <View style={styles.featuredMeta}>
                      <View style={styles.featuredMetaItem}>
                        <Clock size={14} color="#6B7280" />
                        <Text style={styles.featuredMetaText}>{item.duration}</Text>
                      </View>
                      <View style={styles.featuredMetaItem}>
                        <Star size={14} color="#F59E0B" fill="#F59E0B" />
                        <Text style={styles.featuredMetaText}>{item.rating}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Main Categories */}
          <View style={styles.categoriesSection}>
            <Text style={styles.sectionTitle}>Explora por Categoría</Text>
            
            <TouchableOpacity 
              style={styles.categoryCard}
              onPress={() => router.push('/learn/videos')}
            >
              <View style={styles.categoryImageContainer}>
                <Image 
                  source={{ uri: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400' }} 
                  style={styles.categoryImage}
                />
                <View style={styles.categoryOverlay}>
                  <View style={styles.categoryIcon}>
                    <Play size={32} color="#FFFFFF" fill="#FFFFFF" />
                  </View>
                </View>
              </View>
              <View style={styles.categoryContent}>
                <View style={styles.categoryHeader}>
                  <Text style={styles.categoryTitle}>Videos Formativos</Text>
                  <ChevronRight size={20} color="#6B7280" />
                </View>
                <Text style={styles.categoryDescription}>
                  Aprende técnicas correctas con demostraciones visuales paso a paso
                </Text>
                <View style={styles.categoryStats}>
                  <View style={styles.categoryStatItem}>
                    <Users size={16} color="#6366F1" />
                    <Text style={styles.categoryStatText}>Por Raúl Ocaña</Text>
                  </View>
                  <View style={styles.categoryStatItem}>
                    <Play size={16} color="#6366F1" />
                    <Text style={styles.categoryStatText}>50+ videos</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.categoryCard}
              onPress={() => router.push('/learn/manuals')}
            >
              <View style={styles.categoryImageContainer}>
                <Image 
                  source={{ uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' }} 
                  style={styles.categoryImage}
                />
                <View style={styles.categoryOverlay}>
                  <View style={styles.categoryIcon}>
                    <BookOpen size={32} color="#FFFFFF" />
                  </View>
                </View>
              </View>
              <View style={styles.categoryContent}>
                <View style={styles.categoryHeader}>
                  <Text style={styles.categoryTitle}>Manuales y Guías</Text>
                  <ChevronRight size={20} color="#6B7280" />
                </View>
                <Text style={styles.categoryDescription}>
                  Guías detalladas sobre entrenamiento, nutrición y recuperación
                </Text>
                <View style={styles.categoryStats}>
                  <View style={styles.categoryStatItem}>
                    <BookOpen size={16} color="#10B981" />
                    <Text style={styles.categoryStatText}>15+ guías</Text>
                  </View>
                  <View style={styles.categoryStatItem}>
                    <Clock size={16} color="#10B981" />
                    <Text style={styles.categoryStatText}>Lectura rápida</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Learning Path */}
          <View style={styles.learningPathSection}>
            <Text style={styles.sectionTitle}>Tu Ruta de Aprendizaje</Text>
            <View style={styles.learningPathCard}>
              <View style={styles.learningPathHeader}>
                <Text style={styles.learningPathTitle}>Fundamentos del Entrenamiento</Text>
                <Text style={styles.learningPathProgress}>3 de 8 completados</Text>
              </View>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '37.5%' }]} />
              </View>
              <Text style={styles.learningPathDescription}>
                Domina los conceptos básicos antes de avanzar a técnicas más complejas
              </Text>
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continuar Aprendiendo</Text>
                <ChevronRight size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  headerStats: {
    alignItems: 'flex-end',
  },
  statItem: {
    alignItems: 'center',
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6366F1',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  featuredSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  featuredScroll: {
    paddingLeft: 20,
    gap: 16,
  },
  featuredCard: {
    width: 280,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  featuredImage: {
    width: '100%',
    height: 160,
  },
  featuredOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'space-between',
    padding: 16,
    height: 160,
  },
  featuredBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backdropFilter: 'blur(10px)',
  },
  featuredBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  playButton: {
    alignSelf: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(99, 102, 241, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  featuredMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  featuredMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  featuredMetaText: {
    fontSize: 14,
    color: '#6B7280',
  },
  categoriesSection: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  categoryImageContainer: {
    height: 120,
    position: 'relative',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
  },
  categoryContent: {
    padding: 20,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  categoryDescription: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    marginBottom: 16,
  },
  categoryStats: {
    flexDirection: 'row',
    gap: 20,
  },
  categoryStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  categoryStatText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  learningPathSection: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  learningPathCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  learningPathHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  learningPathTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  learningPathProgress: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '500',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#F1F5F9',
    borderRadius: 4,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6366F1',
    borderRadius: 4,
  },
  learningPathDescription: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    marginBottom: 20,
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});