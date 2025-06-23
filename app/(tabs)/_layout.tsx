import { useState, useEffect } from 'react';
import { Tabs } from 'expo-router';
import { Dumbbell, GraduationCap, User } from 'lucide-react-native';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { usePathname } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabLayout() {
  const pathname = usePathname();
  const [highlightTab, setHighlightTab] = useState<string | null>('profile');
  const [userName, setUserName] = useState('');
  const { width } = Dimensions.get('window');

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
    } else if (pathname.includes('train')) {
      setHighlightTab('train');
    } else if (pathname.includes('learn')) {
      setHighlightTab('learn');
    }
  }, [pathname]);

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
            paddingBottom: Platform.OS === 'ios' ? 24 : 8,
            height: Platform.OS === 'ios' ? 88 : 64,
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
                {focused && (
                  <LinearGradient
                    colors={['#6366F1', '#8B5CF6']}
                    style={styles.activeIndicator}
                  />
                )}
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
                {focused && (
                  <LinearGradient
                    colors={['#6366F1', '#8B5CF6']}
                    style={styles.activeIndicator}
                  />
                )}
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
                {focused && (
                  <LinearGradient
                    colors={['#6366F1', '#8B5CF6']}
                    style={styles.activeIndicator}
                  />
                )}
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
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  tabIconFocused: {
    backgroundColor: '#EEF2FF',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -8,
    height: 3,
    width: 20,
    borderRadius: 1.5,
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
});