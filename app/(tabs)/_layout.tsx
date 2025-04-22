import { useState, useEffect, useRef } from 'react';
import { Tabs } from 'expo-router';
import { Dumbbell, GraduationCap, User, X, Info } from 'lucide-react-native';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Modal } from 'react-native';
import { usePathname } from 'expo-router'; // Usar usePathname para escuchar cambios de ruta
import { supabase } from '@/lib/supabase';

export default function TabLayout() {
  const pathname = usePathname(); // Obtenemos la ruta activa
  const [showWelcomePopup, setShowWelcomePopup] = useState(true); // Para el popup de bienvenida
  const [showOnboarding, setShowOnboarding] = useState(false); // no mostrar al inicio
  const [highlightTab, setHighlightTab] = useState<string | null>('profile');
  const [userName, setUserName] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');
  const tabBarWidth = width;
  const tabWidth = tabBarWidth / 3;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setShowOnboarding(false));
  };

  useEffect(() => {
    const fetchUserName = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Supongamos que el nombre está en user.user_metadata.nombre
        setUserName(user.user_metadata?.nombre || 'usuario');
      }
    };

    fetchUserName();
  }, []);

  // Detectar cambio de ruta
  useEffect(() => {
    if (pathname.includes('profile')) {
      setHighlightTab('profile');
      setShowOnboarding(false); //poner true para mostrar el onboarding
    } else if (pathname.includes('train')) {
      setHighlightTab('train');
      setShowOnboarding(false);//poner true para mostrar el onboarding
    } else if (pathname.includes('learn')) {
      setHighlightTab('learn');
      setShowOnboarding(false);//poner true para mostrar el onboarding
    }
  }, [pathname]); // Cambiar cuando la ruta cambie



  useEffect(() => {
    if (showOnboarding) {
      fadeIn();
    }
  }, [showOnboarding]);

  const handleWelcomeClose = () => {
    setShowWelcomePopup(false); // Cerrar el popup de bienvenida
    setTimeout(() => {
      setShowOnboarding(true); // Mostrar el popup de perfil después de 1 segundo
    }, 1000);
  };


  return (
    <>
      {/* Tabs */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#3B82F6',
          tabBarStyle: showOnboarding ? { marginBottom: -100 } : {}, // Oculta temporalmente el tab bar real
        }}
        initialRouteName="profile"
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <User
                size={size}
                color={highlightTab === 'profile' ? '#6B7280' : color} // Resaltar el "Perfil"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="train"
          options={{
            title: 'Entrena',
            tabBarIcon: ({ color, size }) => (
              <Dumbbell
                size={size}
                color={highlightTab === 'train' ? '#6B7280' : color} // Resaltar el "Entrena"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="learn"
          options={{
            title: 'Aprende',
            tabBarIcon: ({ color, size }) => (
              <GraduationCap
                size={size}
                color={highlightTab === 'learn' ? '#6B7280' : color} // Resaltar el "Aprende"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro
  },
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    height: 160, // Espacio extra para el popup
  },
  fakeTabBar: {
    paddingTop: 5,
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  fakeTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: -40,
  },
  highlightedTab: {
    height: 90,
    top: 30,
    paddingBottom: 40,
    backgroundColor: 'rgba(37, 25, 16, 0.1)', // Resaltar con fondo
  },
  fakeTabText: {
    fontSize: 9,
    color: '#6B7280',
  },
  popup: {
    position: 'absolute',
    bottom: 90,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    width: 250,
    marginLeft: '-15%', // Centrar el popup
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  popupEntrena: {
    position: 'absolute',
    bottom: 90,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    width: 250,
    marginLeft: '-32%', // Centrar el popup
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  popupAprende: {
    position: 'absolute',
    bottom: 90,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    width: 250,
    marginLeft: '-50%', // Centrar el popup
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  popupBienvenida: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    width: '85%',
    alignSelf: 'center',
    bottom: '40%',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
    paddingBottom: 50,
  },
  popupTitleBienvenida: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937', // Gris oscuro elegante
    marginTop: 8,
    marginBottom: 12,
    fontFamily: 'System',
  },
  popupHeaderBienvenida: {
    textAlign: 'center',
    marginBottom: -8,
  },
  popupTextBienvenida: {
    textAlign: 'center',
    fontSize: 15,
    color: '#4B5563', // Gris elegante y suave
    lineHeight: 20,
    marginTop: 0,
  },
  popupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  popupTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    flex: 1,
    color: '#1F2937',
  },
  closeButton: {
    padding: 4,
  },
  popupText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },

});
