import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { categories } from '../../../constants/videos';

const { width } = Dimensions.get('window');

export default function VideosScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Categorías de Videos</Text>
          <Text style={styles.subtitle}>Aprende técnicas correctas con demostraciones profesionales</Text>
        </View>

        <View style={styles.grid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => router.push({
                pathname: '/learn/video-category',
                params: { id: category.id, title: category.title }
              })}
            >
              <Image
                source={typeof category.image === 'string' ? { uri: category.image } : category.image}
                style={styles.categoryImage}
              />
              <View style={styles.overlay} />

              <View style={styles.iconContainer}>
                <View style={[styles.iconBackground, { backgroundColor: category.color }]}>
                  <category.icon size={24} color="#FFFFFF" />
                </View>
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.videoCount}>{category.videoCount} videos</Text>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: '60%' }]} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
    lineHeight: 24,
  },
  grid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  categoryCard: {
    width: (width - 48) / 2,
    height: 220,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  categoryImage: {
    width: '100%',
    height: 140,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 140,
  },
  iconContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
  },
  iconBackground: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  cardContent: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  videoCount: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#F1F5F9',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6366F1',
    borderRadius: 2,
  },
});