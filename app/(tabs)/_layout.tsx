import { useState, useEffect, useRef } from 'react';
import { Tabs } from 'expo-router';
import { Dumbbell, GraduationCap, User } from 'lucide-react-native';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { usePathname } from 'expo-router';
import { supabase } from '@/lib/supabase';

export default function TabLayout() {
  const pathname = usePathname();
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [highlightTab, setHighlightTab] = useState<string | null>('profile');
  const [userName, setUserName] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');

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
        setUserName(user.user_metadata?.nombre || 'usuario');
      }
    };

    fetchUserName();
  }, []);

  useEffect(() => {
    if (pathname.includes('profile')) {
      setHighlightTab('profile');
      setShowOnboarding(false);
    } else if (pathname.includes('train')) {
      setHighlightTab('train');
      setShowOnboarding(false);
    } else if (pathname.includes('learn')) {
      setHighlightTab('learn');
      setShowOnboarding(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (showOnboarding) {
      fadeIn();
    }
  }, [showOnboarding]);

  const handleWelcomeClose = () => {
    setShowWelcomePopup(false);
    setTimeout(() => {
      setShowOnboarding(true);
    }, 1000);
  };

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#6366F1',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#F1F5F9',
            paddingTop: 8,
            paddingBottom: 8,
            height: 80,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginTop: 4,
          },
          tabBarIconStyle: {
            marginTop: 4,
          },
        }}
        initialRouteName="profile"
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size, focused }) => (
              <View style={[styles.tabIconContainer, focused && styles.tabIconFocused]}>
                <User
                  size={size}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="train"
          options={{
            title: 'Entrena',
            tabBarIcon: ({ color, size, focused }) => (
              <View style={[styles.tabIconContainer, focused && styles.tabIconFocused]}>
                <Dumbbell
                  size={size}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="learn"
          options={{
            title: 'Aprende',
            tabBarIcon: ({ color, size, focused }) => (
              <View style={[styles.tabIconContainer, focused && styles.tabIconFocused]}>
                <GraduationCap
                  size={size}
                  color={color}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  tabIconFocused: {
    backgroundColor: '#EEF2FF',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    height: 160,
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
    backgroundColor: 'rgba(37, 25, 16, 0.1)',
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
    marginLeft: '-15%',
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
    marginLeft: '-32%',
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
    marginLeft: '-50%',
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
    color: '#1F2937',
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
    color: '#4B5563',
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