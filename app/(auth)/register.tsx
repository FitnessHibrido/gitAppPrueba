import { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView, Platform, ActivityIndicator, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Mail, Lock, Eye, EyeOff, User, ArrowLeft, CheckCircle } from 'lucide-react-native';
import { useAuth } from '@/context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

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
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const formAnim = useRef(new Animated.Value(0)).current;
  const successAnim = useRef(new Animated.Value(0)).current;
  
  const router = useRouter();
  const { signUp } = useAuth();

  useEffect(() => {
    // Initial animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(formAnim, {
        toValue: 1,
        duration: 1000,
        delay: 300,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  useEffect(() => {
    // Success animation
    if (success) {
      Animated.timing(successAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }).start();
    }
  }, [success]);

  const validateInputs = () => {
    let isValid = true;
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    setError(null);

    if (!name.trim()) {
      setNameError(true);
      setError('Por favor, introduce tu nombre');
      isValid = false;
      return isValid;
    }
    
    if (!email.trim()) {
      setEmailError(true);
      setError('Por favor, introduce tu email');
      isValid = false;
      return isValid;
    }

    if (!email.includes('@')) {
      setEmailError(true);
      setError('Por favor, introduce un email válido');
      isValid = false;
      return isValid;
    }

    if (!password) {
      setPasswordError(true);
      setError('Por favor, introduce una contraseña');
      isValid = false;
      return isValid;
    }

    if (password.length < 6) {
      setPasswordError(true);
      setError('La contraseña debe tener al menos 6 caracteres');
      isValid = false;
      return isValid;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      setError('Las contraseñas no coinciden');
      isValid = false;
      return isValid;
    }

    return isValid;
  };

  const handleRegister = async () => {
    try {
      if (!validateInputs()) return;

      setLoading(true);
      await signUp(email, password, name);
      setSuccess(true);
    } catch (err) {
      console.error('Error al registrar:', err);
      if (err instanceof Error) {
        if (err.message.includes('already exists')) {
          setEmailError(true);
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
        <LinearGradient
          colors={['#111827', '#1F2937']}
          style={styles.successGradient}
        >
          <Animated.View 
            style={[
              styles.successContent,
              {
                opacity: successAnim,
                transform: [
                  { scale: successAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1]
                    })
                  }
                ]
              }
            ]}
          >
            <Image source={require('@/assets/images/logotipo-principal-1-negativopantallas-retinas.png')} style={styles.successLogo} />
            <CheckCircle size={80} color="#D0DF00" />
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
          </Animated.View>
        </LinearGradient>
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
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)']}
          style={styles.overlay}
        />
        <SafeAreaView style={styles.safeAreaContent} edges={['top', 'bottom']}>
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardView}
          >
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
            >
              <Animated.View 
                style={[
                  styles.logoContainer,
                  {
                    opacity: fadeAnim,
                    transform: [{ translateY: slideAnim }]
                  }
                ]}
              >
                <Image 
                  source={require('@/assets/images/logotipo-principal-1-negativopantallas-retinas.png')} 
                  style={styles.logo}
                />
              </Animated.View>

              <TouchableOpacity 
                style={styles.backButton}
                onPress={() => router.back()}
                disabled={loading}
              >
                <ArrowLeft size={24} color="#FFFFFF" />
              </TouchableOpacity>

              <Animated.View 
                style={[
                  styles.headerContent,
                  {
                    opacity: fadeAnim,
                    transform: [{ translateY: slideAnim }]
                  }
                ]}
              >
                <Text style={styles.title}>Crear Cuenta</Text>
                <Text style={styles.subtitle}>Únete a nuestra comunidad</Text>
              </Animated.View>

              <Animated.View 
                style={[
                  styles.form,
                  {
                    opacity: formAnim,
                    transform: [
                      { translateY: formAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [20, 0]
                        })
                      }
                    ]
                  }
                ]}
              >
                {error && (
                  <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                  </View>
                )}

                {/* Nombre */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Nombre</Text>
                  <View style={[
                    styles.inputContainer, 
                    nameError && styles.inputContainerError, 
                    isNameFocused && styles.inputContainerFocused
                  ]}>
                    <User size={20} color={nameError ? "#DC2626" : isNameFocused ? "#D0DF00" : "#6B7280"} />
                    <TextInput
                      style={styles.input}
                      placeholder="Tu nombre"
                      value={name}
                      onChangeText={(text) => {
                        setName(text);
                        setNameError(false);
                        setError(null);
                      }}
                      autoCapitalize="words"
                      editable={!loading}
                      onFocus={() => setIsNameFocused(true)}
                      onBlur={() => setIsNameFocused(false)}
                      placeholderTextColor={'#9CA3AF'}
                    />
                  </View>
                </View>

                {/* Email */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Email</Text>
                  <View style={[
                    styles.inputContainer, 
                    emailError && styles.inputContainerError, 
                    isEmailFocused && styles.inputContainerFocused
                  ]}>
                    <Mail size={20} color={emailError ? "#DC2626" : isEmailFocused ? "#D0DF00" : "#6B7280"} />
                    <TextInput
                      style={styles.input}
                      placeholder="tu@email.com"
                      value={email}
                      onChangeText={(text) => {
                        setEmail(text);
                        setEmailError(false);
                        setError(null);
                      }}
                      autoCapitalize="none"
                      keyboardType="email-address"
                      editable={!loading}
                      onFocus={() => setIsEmailFocused(true)}
                      onBlur={() => setIsEmailFocused(false)}
                      placeholderTextColor={'#9CA3AF'}
                    />
                  </View>
                </View>

                {/* Contraseña */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Contraseña</Text>
                  <View style={[
                    styles.inputContainer, 
                    passwordError && styles.inputContainerError, 
                    isPasswordFocused && styles.inputContainerFocused
                  ]}>
                    <Lock size={20} color={passwordError ? "#DC2626" : isPasswordFocused ? "#D0DF00" : "#6B7280"} />
                    <TextInput
                      style={styles.input}
                      placeholder="Tu contraseña"
                      value={password}
                      onChangeText={(text) => {
                        setPassword(text);
                        setPasswordError(false);
                        setError(null);
                      }}
                      secureTextEntry={!showPassword}
                      editable={!loading}
                      onFocus={() => setIsPasswordFocused(true)}
                      onBlur={() => setIsPasswordFocused(false)}
                      placeholderTextColor={'#9CA3AF'}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
                      {showPassword ? <EyeOff size={20} color="#6B7280" /> : <Eye size={20} color="#6B7280" />}
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Confirmar contraseña */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Confirmar Contraseña</Text>
                  <View style={[
                    styles.inputContainer, 
                    confirmPasswordError && styles.inputContainerError, 
                    isConfirmPasswordFocused && styles.inputContainerFocused
                  ]}>
                    <Lock size={20} color={confirmPasswordError ? "#DC2626" : isConfirmPasswordFocused ? "#D0DF00" : "#6B7280"} />
                    <TextInput
                      style={styles.input}
                      placeholder="Confirma tu contraseña"
                      value={confirmPassword}
                      onChangeText={(text) => {
                        setConfirmPassword(text);
                        setConfirmPasswordError(false);
                        setError(null);
                      }}
                      secureTextEntry={!showPassword}
                      editable={!loading}
                      onFocus={() => setIsConfirmPasswordFocused(true)}
                      onBlur={() => setIsConfirmPasswordFocused(false)}
                      placeholderTextColor={'#9CA3AF'}
                    />
                  </View>
                </View>

                {/* Botón crear cuenta */}
                <TouchableOpacity 
                  style={[styles.registerButton, loading && styles.registerButtonDisabled]}
                  onPress={handleRegister}
                  disabled={loading}
                >
                  {loading ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <Text style={styles.registerButtonText}>Crear Cuenta</Text>
                  )}
                </TouchableOpacity>

                {/* Ir al login */}
                <View style={styles.loginContainer}>
                  <Text style={styles.loginText}>¿Ya tienes una cuenta?</Text>
                  <TouchableOpacity onPress={() => router.push('/login')} disabled={loading}>
                    <Text style={styles.loginLink}>Inicia Sesión</Text>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </ScrollView>
          </KeyboardAvoidingView>
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
  },
  safeAreaContent: {
    flex: 1,
    width: '100%',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  logoContainer: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  headerContent: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#F3F4F6',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  errorContainer: {
    backgroundColor: '#FEE2E2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  errorText: {
    color: '#DC2626',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  inputContainerError: {
    borderColor: '#DC2626',
    backgroundColor: '#FEF2F2',
  },
  inputContainerFocused: {
    borderColor: '#D0DF00',
    backgroundColor: '#FFFFFF',
    shadowColor: '#D0DF00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    marginLeft: 12,
    height: '100%',
  },
  eyeButton: {
    padding: 10,
  },
  registerButton: {
    backgroundColor: '#111827',
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  registerButtonDisabled: {
    opacity: 0.7,
  },
  registerButtonText: {
    color: '#D0DF00',
    fontSize: 18,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  loginText: {
    color: '#6B7280',
    fontSize: 16,
  },
  loginLink: {
    color: '#D0DF00',
    fontSize: 16,
    fontWeight: '600',
  },
  successContainer: {
    flex: 1,
    backgroundColor: '#111827',
  },
  successGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successContent: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 24,
    padding: 30,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  successLogo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  successText: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  backToLoginButton: {
    backgroundColor: '#111827',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  backToLoginText: {
    color: '#D0DF00',
    fontSize: 18,
    fontWeight: '600',
  },
});