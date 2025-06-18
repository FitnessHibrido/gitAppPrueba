import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { categories } from '../../../constants/videos';
import { LinearGradient } from 'expo-linear-gradient';
import { Play, Users, Clock, Star } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

export default function VideosScreen() {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Biblioteca de Videos</Text>
          <Text style={styles.subtitle}>Aprende técnicas correctas con demostraciones profesionales</Text>
          
          {/* Stats section */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Play size={16} color="#60A5FA" />
              <Text style={styles.statNumber}>150+</Text>
              <Text style={styles.statLabel}>Videos</Text>
            </View>
            <View style={styles.statItem}>
              <Users size={16} color="#34D399" />
              <Text style={styles.statNumber}>5K+</Text>
              <Text style={styles.statLabel}>Estudiantes</Text>
            </View>
            <View style={styles.statItem}>
              <Star size={16} color="#FBBF24" />
              <Text style={styles.statNumber}>4.9</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>
        </View>

        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent}
          style={styles.content}
        >
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  { marginBottom: 20 }
                ]}
                onPress={() => router.push({
                  pathname: '/learn/video-category',
                  params: { id: category.id, title: category.title }
                })}
                activeOpacity={0.9}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={typeof category.image === 'string' ? { uri: category.image } : category.image}
                    style={styles.categoryImage}
                  />
                  
                  {/* Enhanced gradient overlay */}
                  <LinearGradient
                    colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.8)']}
                    style={styles.overlay}
                  />

                  {/* Video count badge */}
                  <View style={styles.videoBadge}>
                    <Play size={12} color="#FFFFFF" />
                    <Text style={styles.videoBadgeText}>{category.videoCount}</Text>
                  </View>

                  {/* Category icon with background */}
                  <View style={styles.iconContainer}>
                    <View style={[styles.iconBackground, { backgroundColor: category.color }]}>
                      <category.icon size={20} color="#FFFFFF" />
                    </View>
                  </View>

                  {/* Category info overlay */}
                  <View style={styles.categoryInfo}>
                    <Text style={styles.categoryTitle}>{category.title}</Text>
                    <Text style={styles.categoryDescription} numberOfLines={2}>
                      {category.description}
                    </Text>
                    
                    {/* Progress and stats */}
                    <View style={styles.categoryStats}>
                      <View style={styles.progressContainer}>
                        <View style={styles.progressBar}>
                          <View style={[styles.progressFill, { width: '60%' }]} />
                        </View>
                        <Text style={styles.progressText}>60% completado</Text>
                      </View>
                      
                      <View style={styles.statsRow}>
                        <View style={styles.statBadge}>
                          <Clock size={12} color="#D1D5DB" />
                          <Text style={styles.statBadgeText}>2h 30m</Text>
                        </View>
                        <View style={styles.statBadge}>
                          <Star size={12} color="#FBBF24" fill="#FBBF24" />
                          <Text style={styles.statBadgeText}>4.8</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
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
  header: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 32,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#D1D5DB',
    lineHeight: 24,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 16,
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#D1D5DB',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: CARD_WIDTH,
    height: 280,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 12,
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  videoBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  videoBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  iconContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  categoryInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  categoryDescription: {
    fontSize: 13,
    color: '#E5E7EB',
    marginBottom: 12,
    lineHeight: 18,
  },
  categoryStats: {
    gap: 8,
  },
  progressContainer: {
    marginBottom: 8,
  },
  progressBar: {
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#60A5FA',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 11,
    color: '#D1D5DB',
    fontWeight: '500',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  statBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  statBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '500',
  },
});