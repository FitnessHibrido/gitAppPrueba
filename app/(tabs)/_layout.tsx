import { useState, useEffect, useRef } from 'react';
import { Tabs } from 'expo-router';
import { Dumbbell, GraduationCap, User } from 'lucide-react-native';
import { View, Text, StyleSheet, Animated, Dimensions, Platform, TouchableOpacity } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabLayout() {
  const pathname = usePathname();
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [activeTab, setActiveTab] = useState<string>('profile');
  const tabIndicatorAnim = useRef(new Animated.Value(0)).current;

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
      setActiveTab('profile');
      animateTabIndicator(0);
    } else if (pathname.includes('train')) {
      setActiveTab('train');
      animateTabIndicator(1);
    } else if (pathname.includes('learn')) {
      setActiveTab('learn');
      animateTabIndicator(2);
    }
  }, [pathname]);

  const animateTabIndicator = (index: number) => {
    Animated.spring(tabIndicatorAnim, {
      toValue: index,
      useNativeDriver: true,
      friction: 8,
      tension: 50
    }).start();
  };

  const indicatorTranslate = tabIndicatorAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, Dimensions.get('window').width / 3, (Dimensions.get('window').width / 3) * 2]
  });

  const navigateToTab = (tab: string, index: number) => {
    setActiveTab(tab);
    animateTabIndicator(index);
    router.replace(`/(tabs)/${tab}`);
  };

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            display: 'none', // Hide the default tab bar
          },
        }}
      >
        <Tabs.Screen name="profile" />
        <Tabs.Screen name="train" />
        <Tabs.Screen name="learn" />
      </Tabs>
      
      {/* Custom tab bar */}
      <View style={styles.customTabBar}>
        <Animated.View 
          style={[
            styles.tabIndicator, 
            { 
              transform: [{ translateX: indicatorTranslate }],
              width: Dimensions.get('window').width / 3
            }
          ]}
        >
          <LinearGradient
            colors={['#D0DF00', '#B0BD00']}
            style={styles.indicatorGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </Animated.View>
        
        <View style={styles.tabBarContent}>
          {/* Profile Tab */}
          <TouchableOpacity 
            style={styles.tabItem}
            onPress={() => navigateToTab('profile', 0)}
            activeOpacity={0.7}
          >
            <View style={[
              styles.tabButton,
              activeTab === 'profile' && styles.activeTabButton
            ]}>
              <View style={styles.tabContent}>
                <User size={24} color={activeTab === 'profile' ? '#111827' : '#9CA3AF'} />
                <Text 
                  style={[
                    styles.tabLabel,
                    activeTab === 'profile' && styles.activeTabLabel
                  ]}
                >
                  Perfil
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          
          {/* Train Tab */}
          <TouchableOpacity 
            style={styles.tabItem}
            onPress={() => navigateToTab('train', 1)}
            activeOpacity={0.7}
          >
            <View style={[
              styles.tabButton,
              activeTab === 'train' && styles.activeTabButton
            ]}>
              <View style={styles.tabContent}>
                <Dumbbell size={24} color={activeTab === 'train' ? '#111827' : '#9CA3AF'} />
                <Text 
                  style={[
                    styles.tabLabel,
                    activeTab === 'train' && styles.activeTabLabel
                  ]}
                >
                  Entrena
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          
          {/* Learn Tab */}
          <TouchableOpacity 
            style={styles.tabItem}
            onPress={() => navigateToTab('learn', 2)}
            activeOpacity={0.7}
          >
            <View style={[
              styles.tabButton,
              activeTab === 'learn' && styles.activeTabButton
            ]}>
              <View style={styles.tabContent}>
                <GraduationCap size={24} color={activeTab === 'learn' ? '#111827' : '#9CA3AF'} />
                <Text 
                  style={[
                    styles.tabLabel,
                    activeTab === 'learn' && styles.activeTabLabel
                  ]}
                >
                  Aprende
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  customTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    height: Platform.OS === 'ios' ? 90 : 70,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
    zIndex: 1000,
  },
  tabBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  tabIndicator: {
    position: 'absolute',
    top: 0,
    height: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    zIndex: 10,
  },
  indicatorGradient: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  tabItem: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    width: '80%',
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: 'rgba(208, 223, 0, 0.1)',
    transform: [{ translateY: -2 }],
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
    color: '#9CA3AF',
  },
  activeTabLabel: {
    color: '#111827',
    fontWeight: '700',
  },
});