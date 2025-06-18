import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, ImageBackground, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Play, X, Clock, Eye, Star } from 'lucide-react-native';
import { Video, ResizeMode } from 'expo-av';
import categoryVideos from '@/constants/videos-category';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

export default function VideoCategoryScreen() {
  const { id, title } = useLocalSearchParams();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const exercises = categoryVideos[id as string] || [];

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSubtitle}>{exercises.length} videos disponibles</Text>
        </View>

        <ScrollView 
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.videoGrid}>
            {exercises.map((exercise, index) => (
              <TouchableOpacity 
                key={exercise.id}
                style={[styles.videoCard, { marginBottom: 20 }]}
                onPress={() => setSelectedVideo(exercise.video_url)}
                activeOpacity={0.9}
              >
                <View style={styles.thumbnailContainer}>
                  <ImageBackground 
                    style={styles.thumbnail}
                    source={{ uri: exercise.thumbnail_url || 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400' }} 
                    resizeMode="cover"
                  >
                    {/* Gradient overlay */}
                    <LinearGradient
                      colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
                      style={styles.gradientOverlay}
                    />
                    
                    {/* Video duration badge */}
                    <View style={styles.durationBadge}>
                      <Clock size={12} color="#FFFFFF" />
                      <Text style={styles.durationText}>2:30</Text>
                    </View>

                    {/* Play button with animation effect */}
                    <View style={styles.playButtonContainer}>
                      <View style={styles.playButtonOuter}>
                        <View style={styles.playButton}>
                          <Play size={24} color="#FFFFFF" fill="#FFFFFF" />
                        </View>
                      </View>
                    </View>

                    {/* Quality indicator */}
                    <View style={styles.qualityBadge}>
                      <Text style={styles.qualityText}>HD</Text>
                    </View>
                  </ImageBackground>
                </View>

                <View style={styles.videoInfo}>
                  <Text style={styles.videoTitle} numberOfLines={2}>
                    {exercise.name}
                  </Text>
                  
                  <View style={styles.videoMeta}>
                    <View style={styles.metaItem}>
                      <Eye size={14} color="#6B7280" />
                      <Text style={styles.metaText}>1.2k vistas</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Star size={14} color="#F59E0B" fill="#F59E0B" />
                      <Text style={styles.metaText}>4.8</Text>
                    </View>
                  </View>

                  {/* Progress bar */}
                  <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progressFill, { width: `${Math.random() * 100}%` }]} />
                    </View>
                    <Text style={styles.progressText}>
                      {Math.floor(Math.random() * 100)}% completado
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Enhanced Video Modal */}
        <Modal
          visible={!!selectedVideo}
          animationType="fade"
          transparent={false}
          onRequestClose={() => setSelectedVideo(null)}
          statusBarTranslucent
        >
          <View style={styles.fullscreenContainer}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            
            {/* Close button with better positioning */}
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setSelectedVideo(null)}
            >
              <View style={styles.closeButtonBackground}>
                <X size={24} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
            
            {selectedVideo && (
              <Video
                source={{ uri: selectedVideo }}
                style={styles.fullscreenVideo}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay={true}
                isLooping={false}
              />
            )}
          </View>
        </Modal>
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
    paddingVertical: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#D1D5DB',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  videoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  videoCard: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
  thumbnailContainer: {
    width: '100%',
    height: 120,
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  durationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 12,
    gap: 3,
  },
  durationText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  qualityBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#6366F1',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  qualityText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
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
  playButtonOuter: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(99, 102, 241, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  videoInfo: {
    padding: 16,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
    lineHeight: 22,
  },
  videoMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6366F1',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  fullscreenVideo: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },
  closeButtonBackground: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
});