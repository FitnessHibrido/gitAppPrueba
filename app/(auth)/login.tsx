import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react-native';
import { useAuth } from '@/context/AuthContext';
import { Animated, Easing, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';

// Disable SSR for this route
export const unstable_settings = {
  ssr: false,
};

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<'email' | 'password' | null>(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(-30));

  const router = useRouter();
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      setError(null);
      setLoading(true);
      setEmailError(false);
      setPasswordError(false);

      if (!email || !password) {
        setError('Por favor, rellene ambos campos');
        return;
      }

      const isEmailValid = email.includes('@');
      const isPasswordValid = password.length >= 6;

      if (!isEmailValid) setEmailError(true);
      if (!isPasswordValid) setPasswordError(true);

      if (!isEmailValid || !isPasswordValid) return;

      await signIn(email, password);
      router.replace('/(tabs)/profile');
    } catch (err) {
      setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.fullScreen}>
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800' }}
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

              <View style={styles.headerContent}>
                <Animated.Text style={[styles.title, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
                  ¡Bienvenido de nuevo!
                </Animated.Text>
                <Animated.Text style={[styles.subtitle, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
                  Inicia sesión para continuar tu progreso
                </Animated.Text>
              </View>

              <View style={styles.formContainer}>
                {error && (
                  <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                  </View>
                )}

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Email</Text>
                  <View style={[
                    styles.inputContainer,
                    focusedInput === 'email' && styles.inputContainerFocused,
                    emailError && styles.inputContainerError
                  ]}>
                    <Mail size={20} color="#6B7280" />
                    <TextInput
                      style={styles.input}
                      placeholder="tu@email.com"
                      value={email}
                      onChangeText={setEmail}
                      autoCapitalize="none"
                      keyboardType="email-address"
                      editable={!loading}
                      onFocus={() => setFocusedInput('email')}
                      onBlur={() => setFocusedInput(null)}
                      placeholderTextColor={'#9CA3AF'}
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Contraseña</Text>
                  <View style={[
                    styles.inputContainer,
                    focusedInput === 'password' && styles.inputContainerFocused,
                    passwordError && styles.inputContainerError
                  ]}>
                    <Lock size={20} color="#6B7280" />
                    <TextInput
                      style={styles.input}
                      placeholder="Tu contraseña"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                      editable={!loading}
                      onFocus={() => setFocusedInput('password')}
                      onBlur={() => setFocusedInput(null)}
                      placeholderTextColor={'#9CA3AF'}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
                      {showPassword ? <EyeOff size={20} color="#6B7280" /> : <Eye size={20} color="#6B7280" />}
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.forgotPassword}
                  onPress={() => router.push('/forgot-password')}
                  disabled={loading}
                >
                  <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.loginButton, loading && styles.loginButtonDisabled]}
                  onPress={handleLogin}
                  disabled={loading}
                >
                  <Text style={styles.loginButtonText}>
                    {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                  </Text>
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                  <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
                  <TouchableOpacity onPress={() => router.push('/register')} disabled={loading}>
                    <Text style={styles.registerLink}>Regístrate</Text>
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
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  },
  logoContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 20,
    right: 20,
  },
  logo: {
    top: -20,
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  headerContent: {
    alignItems: 'center',
    marginBottom: 40,
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
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
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
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
  },
  inputContainerFocused: {
    borderColor: '#6366F1',
    backgroundColor: '#FFFFFF',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  inputContainerError: {
    borderColor: '#DC2626',
    backgroundColor: '#FEF2F2',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    marginLeft: 12,
  },
  eyeButton: {
    padding: 8,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#6366F1',
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonDisabled: {
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  registerText: {
    color: '#6B7280',
    fontSize: 14,
  },
  registerLink: {
    color: '#6366F1',
    fontSize: 14,
    fontWeight: '600',
  },
  errorContainer: {
    backgroundColor: '#FEF2F2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  errorText: {
    color: '#DC2626',
    fontSize: 14,
    textAlign: 'center',
  },
});