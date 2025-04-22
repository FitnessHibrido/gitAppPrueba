import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { categories } from '../../../constants/videos'

export default function VideosScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Categorías</Text>
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
    padding: -800,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  grid: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryCard: {
    width: '50%',
    padding: 10,
    position: 'relative',
        // Para iOS:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,  // Aumenté un poco la opacidad para mejor visibilidad
    shadowRadius: 6,
    // Para Android:
    elevation: 8,  // Reduje la elevación para que coincida mejor con iOS
    // Importante para iOS:
    overflow: 'visible', // Cambiado de 'hidden' a 'visible' para que se vea la sombra
  },
  categoryImage: {
    width: '100%',
    height: 180,
    borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    margin: 10,
    borderRadius: 16,
  },
  iconContainer: {
    position: 'absolute',
    top: 25,
    left: 25,
    zIndex: 10,
  },
  iconBackground: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    position: 'absolute',
    bottom: 25,
    left: 25,
    right: 25,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  videoCount: {
    fontSize: 14,
    color: '#F3F4F6',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});