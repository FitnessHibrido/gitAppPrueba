import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Mail, ArrowLeft, CircleCheck as CheckCircle } from 'lucide-react-native';
import { useAuth } from '@/context/AuthContext';

// Disable SSR for this route
export const unstable_settings = {
  ssr: false,
};

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState<'email'|null>(null); // Estado para manejar el enfoque
  const router = useRouter();
  const { resetPassword } = useAuth();

  const handleResetPassword = async () => {
    try {
      setError(null);
      await resetPassword(email);
      setSuccess(true);
    } catch (err) {
      setError('No se pudo enviar el email de recuperación. Verifica tu dirección de correo.');
    }
  };

  if (success) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.successContainer}>
          <CheckCircle size={64} color="#22C55E" />
          <Text style={styles.successTitle}>Email Enviado</Text>
          <Text style={styles.successText}>
            Hemos enviado un enlace de recuperación a tu correo electrónico. Sigue las instrucciones para restablecer tu contraseña.
          </Text>
          <TouchableOpacity 
            style={styles.backToLoginButton}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.backToLoginText}>Volver al Inicio de Sesión</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
     <View style={styles.fullScreen}>
      <ImageBackground 
        source={require('@/assets/images/logoFondoNegro.png')} 
        style={styles.backgroundImage}
        resizeMode="cover" // Asegura que la imagen cubra toda la pantalla
      >
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeAreaContent} edges={['top', 'bottom']}>

        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
          style={styles.keyboardView}
        >
        <ScrollView 
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            >
            <View style={styles.logoContainer}>
              <Image 
                source={require('@/assets/images/logotipo-principal-1-negativopantallas-retinas.png')} 
                style={styles.logo}
                />
            </View>

          <View style={styles.headerContent}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <ArrowLeft size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.title}>Recuperar Contraseña</Text>
            <Text style={styles.subtitle}>
              Introduce tu email para recibir instrucciones de recuperación
            </Text>
          </View>

          <View style={styles.form}>
            {error && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View 
                style={[styles.inputContainer, isEmailFocused === 'email' &&
                          styles.inputContainerFocused]}
              >
                <Mail size={20} color="#6B7280" />
                <TextInput
                  style={styles.input}
                  placeholder="tu@email.com"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onFocus={() => setIsEmailFocused('email')}
                  onBlur={() => setIsEmailFocused(null)}
                  placeholderTextColor={'gray'}
                />
              </View>
        
            </View>

            <TouchableOpacity 
              style={styles.resetButton}
              onPress={handleResetPassword}
            >
              <Text style={styles.resetButtonText}>Enviar Instrucciones →</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => router.back()}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 20,  // 40px abajo en iPhone (notch), 20px en Android
    right: 20,
  },
  logo: {
    top:-20,
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  backgroundImage: {
    flex: 1, // Esto hace que la imagen ocupe todo el espacio
    width: '100%', // Asegura que la imagen se estire al máximo
    height: '100%', // Asegura que la imagen ocupe toda la altura
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Llenar todo el espacio
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Sombra sutil
  },
  headerContent: {
    position: 'absolute',
    top: '15%',
    left: 20,
    right: 20,
    alignItems: 'center',
    zIndex: 1, // Asegura que el contenido del header esté sobre la imagen
  },
  backButton: {
    position: 'absolute',
    top: -80,
    left: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#F3F4F6',
    textAlign: 'center',
  },
  form: {
    top: '10%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    opacity: 0.9,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginBottom: 8,
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    width: '100%',
    alignSelf: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  inputContainerFocused: {
    borderColor: '#d0df00',
    shadowColor: '#d0df00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: '#111827',
    marginLeft: 8,
  },
  resetButton: {
    backgroundColor: '#111827',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    
    
  },
  resetButtonText: {
    color: '#D0DF00',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 24,
    marginBottom: 12,
  },
  successText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  backToLoginButton: {
    backgroundColor: '#22C55E',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backToLoginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  errorContainer: {
    backgroundColor: '#FEE2E2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  errorText: {
    color: '#DC2626',  // Rojo oscuro para el texto del error
    fontSize: 14,
    
  },
  fullScreen: {
    flex: 1,           // Ocupa todo el espacio disponible
    width: '100%',     // Ancho completo
    height: '100%',    // Alto completo (antes no estaba)
    backgroundColor: '#000', // Fondo de respaldo (negro)
  },
  safeAreaContent: {
    flex: 1,           // Ocupa todo el espacio del padre
    width: '100%',     // Ancho completo (evita márgenes)
    // edges: ['top', 'bottom'] (se define en el componente)
  },
});