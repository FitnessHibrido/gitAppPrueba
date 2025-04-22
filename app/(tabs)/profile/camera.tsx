import { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { Camera as CameraIcon, RefreshCw } from 'lucide-react-native';
import * as FileSystem from 'expo-file-system';
import { supabase } from '../../../lib/supabase';
import { decode } from 'base64-arraybuffer';

export default function CameraScreen() {
  const [type, setType] = useState<'back' | 'front'>('back');
  const [photoType, setPhotoType] = useState<'front' | 'side' | 'back'>('front');
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraActive, setIsCameraActive] = useState(true);
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);
  const cameraRef = useRef<CameraView | null>(null);
  const router = useRouter();

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cargando permisos de cámara...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Necesitamos tu permiso para usar la cámara</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Permitir acceso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleCameraType = () => {
    setType(current => (current === 'back' ? 'front' : 'back'));
  };

  const uploadImageToSupabase = async (uri: string) => {
    const fileName = `${Date.now()}.jpg`;
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const fileBuffer = decode(base64);

    const { data, error } = await supabase.storage
      .from('photos')
      .upload(fileName, fileBuffer, {
        contentType: 'image/jpeg',
        upsert: false,
      });

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage.from('photos').getPublicUrl(fileName);
    return publicUrlData.publicUrl;
  };

  const saveImageUrlInDB = async ({
    url,
    profile_id,
    type,
    date,
    created_at,
  }: {
    url: string;
    profile_id: string;
    type: string;
    date: Date;
    created_at: Date;
  }) => {
    const { error } = await supabase.from('progress_photos').insert([
      { url, profile_id, type, date, created_at: new Date() },
    ]);
    if (error) throw error;
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        if (photo?.uri) {
          setPreviewPhoto(photo.uri);
        }
      } catch (error) {
        console.error('Error al tomar foto:', error);
      }
    }
  };

  const confirmPhoto = async () => {
    try {
      if (!previewPhoto) return;

      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) throw userError || new Error('Usuario no autenticado');

      const imageUrl = await uploadImageToSupabase(previewPhoto);

      await saveImageUrlInDB({
        url: imageUrl,
        profile_id: user.id,
        type: photoType,
        date: new Date(),
        created_at: new Date(),
      });

      setIsCameraActive(false);
      setTimeout(() => {
        router.replace('/profile/metrics');
      }, 200);
    } catch (error) {
      console.error('Error al confirmar foto:', error);
    }
  };

  const retakePhoto = () => {
    setPreviewPhoto(null);
  };

  return (
    <View style={styles.container}>
      {previewPhoto ? (
        <View style={styles.previewContainer}>
          <View style={styles.previewImageWrapper}>
            <Image source={{ uri: previewPhoto }} style={styles.previewImage} />
          </View>
          <View style={styles.previewButtons}>
            <TouchableOpacity style={styles.confirmButton} onPress={confirmPhoto}>
              <Text style={styles.buttonText}>Usar foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.retryButton} onPress={retakePhoto}>
              <Text style={styles.buttonText}>Repetir</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        isCameraActive && (
          <CameraView ref={cameraRef} style={styles.camera} facing={type}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setIsCameraActive(false);
                setTimeout(() => {
                  router.back();
                }, 200);
              }}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>

            <View style={styles.typeSelector}>
              {['front', 'side', 'back'].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[styles.typeButton, photoType === type && styles.typeButtonSelected]}
                  onPress={() => setPhotoType(type as 'front' | 'side' | 'back')}
                >
                  <Text style={styles.typeButtonText}>{type.toUpperCase()}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.flipButton} onPress={toggleCameraType}>
                <RefreshCw size={24} color="#FFFFFF" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                <CameraIcon size={32} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </CameraView>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  camera: {
    flex: 1,
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  flipButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  typeSelector: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 12,
    padding: 8,
    zIndex: 10,
  },
  typeButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  typeButtonSelected: {
    backgroundColor: '#3B82F6',
  },
  typeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  previewContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImageWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  previewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#000',
  },
  confirmButton: {
    padding: 12,
    backgroundColor: '#22c55e',
    borderRadius: 10,
  },
  retryButton: {
    padding: 12,
    backgroundColor: '#ef4444',
    borderRadius: 10,
  },
});