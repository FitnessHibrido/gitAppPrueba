import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Play, X } from 'lucide-react-native';
import { Video, ResizeMode } from 'expo-av';
import categoryVideos from '@/constants/videos-category';


export default function VideoCategoryScreen() {
  const { id, title } = useLocalSearchParams();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const exercises = categoryVideos[id as string] || [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
      {exercises.map((exercise) => (
  <TouchableOpacity 
    key={exercise.id}
    style={styles.videoCard}
    onPress={() => setSelectedVideo(exercise.video_url)}
  >
    <Text style={styles.videoTitle}>{exercise.name}</Text>
    <View style={styles.thumbnailContainer}>
      <ImageBackground 
        style={styles.thumbnail}
        source={{ uri: exercise.thumbnail_url || 'https://via.placeholder.com/800x450' }} 
        resizeMode="cover"
      >
        <View style={styles.playButtonContainer}>
          <View style={styles.playButton}>
            <Play size={32} color="#FFFFFF" fill="#FFFFFF" />
          </View>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
))}
      </ScrollView>

      <Modal
        visible={!!selectedVideo}
        animationType="fade"
        transparent={false}
        onRequestClose={() => setSelectedVideo(null)}
      >
        <View style={styles.fullscreenContainer}>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => setSelectedVideo(null)}
          >
            <X size={24} color="#FFFFFF" />
          </TouchableOpacity>
          
          {selectedVideo && (
            <Video
              source={{ uri: selectedVideo }}
              style={styles.fullscreenVideo}
              useNativeControls
              resizeMode={ResizeMode.COVER}
              shouldPlay={true}
              isLooping={false}
            />
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:-30,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
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
  content: {
    flex: 1,
    padding: 20,
  },
  videoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 20,
    // Para iOS:
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,  // Aumenté un poco la opacidad para mejor visibilidad
    shadowRadius: 7,
    // Para Android:
    elevation: 7,  // Reduje la elevación para que coincida mejor con iOS
    // Importante para iOS:
    overflow: 'visible', // Cambiado de 'hidden' a 'visible' para que se vea la sombra
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  thumbnailContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  
  playButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(59, 130, 246, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  fullscreenVideo: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});