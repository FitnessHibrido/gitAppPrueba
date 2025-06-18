import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Mail, Lock, Eye, EyeOff, User, ArrowLeft } from 'lucide-react-native';
import { useAuth } from '@/context/AuthContext';

// Disable SSR for this route
export const unstable_settings = {
  ssr: false,
};

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  
  const router = useRouter();
  const { signUp } = useAuth();

  const validateInputs = () => {
    let isValid = true;
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    if (!name.trim()) {
      setNameError(true);
      setError('Por favor, introduce tu nombre');
      isValid = false;
    }
    
    if (!email.trim()) {
      setEmailError(true);
      setError('Por favor, introduce tu email');
      isValid = false;
    }

    if (!email.includes('@')) {
      setEmailError(true);
      setError('Por favor, introduce un email válido');
      isValid = false;
    }

    if (!password) {
      setPasswordError(true);
      setError('Por favor, introduce una contraseña');
      isValid = false;
    }

    if (password.length < 6) {
      setPasswordError(true);
      setError('La contraseña debe tener al menos 6 caracteres');
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      setError('Las contraseñas no coinciden');
      isValid = false;
    }

    return isValid;
  };

  const handleRegister = async () => {
    try {
      setError(null);
      if (!validateInputs()) return;

      setLoading(true);
      await signUp(email, password, name);
      setSuccess(true);
    } catch (err) {
      console.error('Error al registrar:', err);
      if (err instanceof Error) {
        if (err.message.includes('already exists')) {
          setError('Este email ya está registrado. Por favor, inicia sesión.');
        } else {
          setError(err.message);
        }
      } else {
        setError('Error al crear la cuenta. Por favor, inténtalo de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <View style={styles.successContainer}>
        <Image source={require('@/assets/images/logotipo-principal-1-negativopantallas-retinas.png')} style={styles.logo} />
        <Text style={styles.successTitle}>¡Revisa tu correo!</Text>
        <Text style={styles.successText}>
          Te hemos enviado un enlace de confirmación a tu email. Pulsa en el botón para ir al inicio de sesión.
        </Text>
        <TouchableOpacity 
          style={styles.backToLoginButton}
          onPress={() => router.replace('/(auth)/login')}
        >
          <Text style={styles.backToLoginText}>Ir al Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.fullScreen}>
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80' }}
        style={styles.backgroundImage}
        resizeMode="cover"
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

              <TouchableOpacity 
                style={styles.backButton}
                onPress={() => router.back()}
                disabled={loading}
              >
                <ArrowLeft size={24} color="#FFFFFF" />
              </TouchableOpacity>

              <View style={styles.headerContent}>
                <Text style={styles.title}>Crear Cuenta</Text>
                <Text style={styles.subtitle}>Únete a nuestra comunidad</Text>
              </View>

              <View style={styles.form}>
                {error && (
                  <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                  </View>
                )}

                {/* Nombre */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Nombre</Text>
                  <View style={[styles.inputContainer, nameError && styles.inputContainerError, isNameFocused && styles.inputContainerFocused]}>
                    <User size={20} color="#6B7280" />
                    <TextInput
                      style={styles.input}
                      placeholder="Tu nombre"
                      value={name}
                      onChangeText={setName}
                      autoCapitalize="words"
                      editable={!loading}
                      onFocus={() => setIsNameFocused(true)}
                      onBlur={() => setIsNameFocused(false)}
                      placeholderTextColor={'gray'}
                    />
                  </View>
                </View>

                {/* Email */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Email</Text>
                  <View style={[styles.inputContainer, emailError && styles.inputContainerError, isEmailFocused && styles.inputContainerFocused]}>
                    <Mail size={20} color="#6B7280" />
                    <TextInput
                      style={styles.input}
                      placeholder="tu@email.com"
                      value={email}
                      onChangeText={setEmail}
                      autoCapitalize="none"
                      keyboardType="email-address"
                      editable={!loading}
                      onFocus={() => setIsEmailFocused(true)}
                      onBlur={() => setIsEmailFocused(false)}
                      placeholderTextColor={'gray'}
                    />
                  </View>
                </View>

                {/* Contraseña */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Contraseña</Text>
                  <View style={[styles.inputContainer, passwordError && styles.inputContainerError, isPasswordFocused && styles.inputContainerFocused]}>
                    <Lock size={20} color="#6B7280" />
                    <TextInput
                      style={styles.input}
                      placeholder="Tu contraseña"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                      editable={!loading}
                      onFocus={() => setIsPasswordFocused(true)}
                      onBlur={() => setIsPasswordFocused(false)}
                      placeholderTextColor={'gray'}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
                      {showPassword ? <EyeOff size={20} color="#6B7280" /> : <Eye size={20} color="#6B7280" />}
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Confirmar contraseña */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Confirmar Contraseña</Text>
                  <View style={[styles.inputContainer, confirmPasswordError && styles.inputContainerError, isConfirmPasswordFocused && styles.inputContainerFocused]}>
                    <Lock size={20} color="#6B7280" />
                    <TextInput
                      style={styles.input}
                      placeholder="Confirma tu contraseña"
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      secureTextEntry={!showPassword}
                      editable={!loading}
                      onFocus={() => setIsConfirmPasswordFocused(true)}
                      onBlur={() => setIsConfirmPasswordFocused(false)}
                      placeholderTextColor={'gray'}
                    />
                  </View>
                </View>

                {/* Botón crear cuenta */}
                <TouchableOpacity 
                  style={[styles.registerButton, loading && styles.registerButtonDisabled]}
                  onPress={handleRegister}
                  disabled={loading}
                >
                  <Text style={styles.registerButtonText}>
                    {loading ? 'Creando cuenta...' : 'Crear Cuenta →'}
                  </Text>
                </TouchableOpacity>

                {/* Ir al login */}
                <View style={styles.loginContainer}>
                  <Text style={styles.loginText}>¿Ya tienes una cuenta?</Text>
                  <TouchableOpacity onPress={() => router.push('/login')} disabled={loading}>
                    <Text style={styles.loginLink}>Inicia Sesión</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({

  fullScreen: {
    flex: 1,           // Ocupa todo el espacio disponible
    width: '100%',     // Ancho completo
    height: '100%',    // Alto completo (antes no estaba)
    backgroundColor: '#000', // Fondo de respaldo (negro)
  },
  container: {
    flex: 1,
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
    flex: 1,
    justifyContent: 'center', // centra los elementos dentro de la imagen
    resizeMode: 'contain', // cubre todo el fondo
    width:'100%',
    height:'100%'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  safeAreaContent: {
    flex: 1,           // Ocupa todo el espacio del padre
    width: '100%',     // Ancho completo (evita márgenes)
    // edges: ['top', 'bottom'] (se define en el componente)
  },
  content: {
    flex: 1,
  },
  header: {
    height: 150,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  headerContent: {
    alignItems:'center',
    marginBottom:40,
  },
  title: {
    top: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign:'center'
  },
  subtitle: {
    top: 20,
    fontSize: 16,
    color: '#F3F4F6',
  },
  form: {
    top: 20,
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
  errorContainer: {
    backgroundColor: '#FEE2E2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    
  },
  errorText: {
    color: '#DC2626',
    fontSize: 14,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    
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
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  inputContainerError: {
    borderColor: '#DC2626',
    shadowColor: '#DC2626',
    backgroundColor: '#FEE2E2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,



  },
  inputContainerFocused: {
    borderWidth: 2,
    borderColor: '#D0DF00',
    backgroundColor: 'white',
    shadowColor: '#D0DF00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 6,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: 'black',
    borderWidth: 0,
    outlineColor: 'transparent',
    marginLeft: 10,
  },
  eyeButton: {
    padding: 8,
  },
  registerButton: {
    backgroundColor: '#111827',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  registerButtonDisabled: {
    opacity: 0.7,
  },
  registerButtonText: {
    color: '#D0DF00',
    fontSize: 16,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  loginText: {
    color: '#6B7280',
    fontSize: 14,
  },
  loginLink: {
    color: '#D0DF00',
    textDecorationLine:'underline',
    fontSize: 14,
    fontWeight: '500',
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  successText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  backToLoginButton: {
    backgroundColor: '#D0DF00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backToLoginText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
  },
  
});