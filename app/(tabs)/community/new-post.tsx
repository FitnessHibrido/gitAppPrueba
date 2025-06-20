import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { X, Image as ImageIcon, Camera, Send } from 'lucide-react-native';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import { decode } from 'base64-arraybuffer';

export default function NewPostScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    // Request permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Necesitamos permisos para acceder a tu galería');
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
        base64: true,
      });

      if (!result.canceled && result.assets && result.assets[0]) {
        const asset = result.assets[0];
        if (asset.base64) {
          setImages([...images, asset.uri]);
        }
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'No se pudo seleccionar la imagen');
    }
  };

  const takePhoto = async () => {
    // Request permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Necesitamos permisos para acceder a tu cámara');
      return;
    }

    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
        base64: true,
      });

      if (!result.canceled && result.assets && result.assets[0]) {
        const asset = result.assets[0];
        if (asset.base64) {
          setImages([...images, asset.uri]);
        }
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      Alert.alert('Error', 'No se pudo tomar la foto');
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const uploadImage = async (uri: string) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const reader = new FileReader();
      
      return new Promise<string>((resolve, reject) => {
        reader.onload = async () => {
          try {
            const base64 = reader.result?.toString().split(',')[1];
            if (!base64) throw new Error('Failed to convert image to base64');
            
            const fileName = `${Date.now()}.jpg`;
            const contentType = 'image/jpeg';
            
            const { data, error } = await supabase.storage
              .from('community')
              .upload(fileName, decode(base64), {
                contentType,
                upsert: false,
              });
            
            if (error) throw error;
            
            const { data: urlData } = supabase.storage
              .from('community')
              .getPublicUrl(fileName);
              
            resolve(urlData.publicUrl);
          } catch (error) {
            reject(error);
          }
        };
        reader.onerror = () => {
          reject(new Error('Failed to read file'));
        };
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (!user) {
      Alert.alert('Error', 'Debes iniciar sesión para publicar');
      return;
    }

    if (!title.trim() && !caption.trim() && images.length === 0) {
      Alert.alert('Error', 'Tu publicación debe tener texto o imágenes');
      return;
    }

    try {
      setLoading(true);

      let imageUrls: string[] = [];
      
      // Upload images if any
      if (images.length > 0) {
        const uploadPromises = images.map(uri => uploadImage(uri));
        imageUrls = await Promise.all(uploadPromises);
      }

      // Create post
      const { data, error } = await supabase
        .from('community_posts')
        .insert({
          user_id: user.id,
          title: title.trim() || null,
          caption: caption.trim() || null,
          image_url: imageUrls[0] || null,
          images_url: imageUrls.length > 0 ? imageUrls : null
        })
        .select()
        .single();

      if (error) throw error;

      // Navigate back to feed
      router.replace('/community/feed');
    } catch (error) {
      console.error('Error creating post:', error);
      Alert.alert('Error', 'No se pudo crear la publicación. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={() => router.back()}
          disabled={loading}
        >
          <X size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nueva Publicación</Text>
        <TouchableOpacity 
          style={[styles.postButton, (!title.trim() && !caption.trim() && images.length === 0) && styles.postButtonDisabled]}
          onPress={handleSubmit}
          disabled={loading || (!title.trim() && !caption.trim() && images.length === 0)}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <>
              <Send size={20} color="#FFFFFF" />
              <Text style={styles.postButtonText}>Publicar</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          style={styles.titleInput}
          placeholder="Título (opcional)"
          value={title}
          onChangeText={setTitle}
          maxLength={100}
          editable={!loading}
        />
        
        <TextInput
          style={styles.captionInput}
          placeholder="¿Qué quieres compartir con la comunidad?"
          value={caption}
          onChangeText={setCaption}
          multiline
          maxLength={2000}
          editable={!loading}
        />

        {images.length > 0 && (
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.imagesContainer}
          >
            {images.map((uri, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image} />
                <TouchableOpacity 
                  style={styles.removeImageButton}
                  onPress={() => removeImage(index)}
                  disabled={loading}
                >
                  <X size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        )}

        <View style={styles.mediaButtons}>
          <TouchableOpacity 
            style={styles.mediaButton}
            onPress={pickImage}
            disabled={loading}
          >
            <ImageIcon size={20} color="#6366F1" />
            <Text style={styles.mediaButtonText}>Galería</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.mediaButton}
            onPress={takePhoto}
            disabled={loading}
          >
            <Camera size={20} color="#6366F1" />
            <Text style={styles.mediaButtonText}>Cámara</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  closeButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  postButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6366F1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  postButtonDisabled: {
    backgroundColor: '#E5E7EB',
  },
  postButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
    padding: 8,
  },
  captionInput: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 24,
    minHeight: 100,
    textAlignVertical: 'top',
    padding: 8,
  },
  imagesContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
  },
  removeImageButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  mediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  mediaButtonText: {
    color: '#6366F1',
    fontWeight: '600',
    fontSize: 14,
  },
});