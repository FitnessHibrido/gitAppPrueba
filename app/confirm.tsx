import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, ImageBackground, Platform, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ConfirmScreen() {
  const router = useRouter();
  const nativeParams = useLocalSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [isResendLinkVisible, setIsResendLinkVisible] = useState(false);

  const sendWelcomeEmail = async () => {
    try {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;

      if (user) {
        const { error } = await supabase.rpc('send_welcome_email', {
          email: user.email,
          name: user.user_metadata?.name || 'Usuario',
        });

        if (error) {
          console.error('Error al enviar el correo de bienvenida:', error);
        } else {
          console.log('Correo de bienvenida enviado exitosamente');
        }
      }
    } catch (err) {
      console.error('Error al obtener el usuario o al enviar el correo:', err);
    }
  };

  useEffect(() => {
    const confirmUser = async () => {
      let access_token: string | null = null;
      let refresh_token: string | null = null;

      if (Platform.OS === 'web') {
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.slice(1));
        access_token = params.get('access_token');
        refresh_token = params.get('refresh_token');
      } else {
        access_token = nativeParams.access_token as string | null;
        refresh_token = nativeParams.refresh_token as string | null;
      }

      if (!access_token || !refresh_token) {
        setStatus('error');
        return;
      }

      const { error } = await supabase.auth.setSession({ access_token, refresh_token });

      if (error) {
        console.error('Error al establecer sesión:', error);
        setStatus('error');
        setIsResendLinkVisible(true);
      } else {
        await sendWelcomeEmail();
        setStatus('success');
      }
    };

    confirmUser();
  }, []);

  const resendConfirmationEmail = async () => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user?.email) {
        // Reemplaza con tu propia función HTTP si usas edge function pública
        await fetch('https://TU-PROYECTO.supabase.co/functions/v1/send-welcome-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer TU_API_KEY', // Solo si es necesaria
          },
          body: JSON.stringify({
            email: userData.user.email,
            name: userData.user.user_metadata?.name ?? 'Usuario',
          }),
        });
        Alert.alert('Éxito', 'Correo de confirmación reenviado');
      }
    } catch (error) {
      console.error('Error reenviando el correo:', error);
      Alert.alert('Error', 'No se pudo reenviar el correo.');
    }
  };

  return (
    <View style={styles.fullScreen}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeAreaContent}>
          <View style={styles.content}>
            {status === 'loading' && (
              <>
                <ActivityIndicator size="large" color="#D0DF00" />
                <Text style={styles.subtitle}>Confirmando cuenta...</Text>
              </>
            )}

            {status === 'success' && (
              <>
                <Image
                  source={require('@/assets/images/logotipo-principal-1-negativopantallas-retinas.png')}
                  style={styles.logo}
                />
                <Text style={styles.title}>✅ Cuenta confirmada</Text>
                <Text style={styles.subtitle}>Ya puedes iniciar sesión</Text>
                <TouchableOpacity style={styles.registerButton} onPress={() => router.replace('/(auth)/login')}>
                  <Text style={styles.registerButtonText}>Ir al Login</Text>
                </TouchableOpacity>
              </>
            )}

            {status === 'error' && (
              <>
                <Text style={styles.title}>❌ Error al confirmar</Text>
                <Text style={styles.errorText}>El enlace no es válido o ha expirado.</Text>

                {isResendLinkVisible && (
                  <TouchableOpacity style={styles.registerButton} onPress={resendConfirmationEmail}>
                    <Text style={styles.registerButtonText}>Reenviar correo de confirmación</Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity style={styles.registerButton} onPress={() => router.replace('/(auth)/login')}>
                  <Text style={styles.registerButtonText}>Ir al Login</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  safeAreaContent: {
    flex: 1,
    width: '100%',
  },
  content: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#F3F4F6',
    textAlign: 'center',
    marginTop: 8,
  },
  errorText: {
    color: 'red',
    textDecorationLine: 'underline',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#111827',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    width: 300,
  },
  registerButtonText: {
    color: '#D0DF00',
    fontSize: 16,
    fontWeight: '600',
  },
});
