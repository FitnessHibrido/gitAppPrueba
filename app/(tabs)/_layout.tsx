import { useState, useEffect, useRef } from 'react';
import { Tabs } from 'expo-router';
import { Dumbbell, GraduationCap, User } from 'lucide-react-native';
import { View, Text, StyleSheet, Animated, Dimensions, Platform } from 'react-native';
import { usePathname } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabLayout() {
  const pathname = usePathname();
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

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            height: Platform.OS === 'ios' ? 90 : 70,
            paddingTop: 10,
            paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          },
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#111827',
          tabBarInactiveTintColor: '#9CA3AF',
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
        tabBar={(props) => (
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
              {props.state.routes.map((route, index) => {
                const { options } = props.descriptors[route.key];
                const label = options.title || route.name;
                const isFocused = props.state.index === index;
                
                const onPress = () => {
                  const event = props.navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });
                  
                  if (!isFocused && !event.defaultPrevented) {
                    props.navigation.navigate(route.name);
                  }
                  
                  animateTabIndicator(index);
                };
                
                let icon;
                if (route.name === 'profile') {
                  icon = <User size={24} color={isFocused ? '#111827' : '#9CA3AF'} />;
                } else if (route.name === 'train') {
                  icon = <Dumbbell size={24} color={isFocused ? '#111827' : '#9CA3AF'} />;
                } else if (route.name === 'learn') {
                  icon = <GraduationCap size={24} color={isFocused ? '#111827' : '#9CA3AF'} />;
                }
                
                return (
                  <View key={index} style={styles.tabItem}>
                    <Animated.View 
                      style={[
                        styles.tabButton,
                        isFocused && styles.activeTabButton
                      ]}
                    >
                      <View style={styles.tabContent}>
                        {icon}
                        <Text 
                          style={[
                            styles.tabLabel,
                            isFocused && styles.activeTabLabel
                          ]}
                        >
                          {label}
                        </Text>
                      </View>
                      <View style={[
                        styles.tabButtonBackground,
                        isFocused && styles.activeTabButtonBackground
                      ]} />
                    </Animated.View>
                    <View style={styles.touchableArea} onTouchEnd={onPress} />
                  </View>
                );
              })}
            </View>
          </View>
        )}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
          }}
        />
        <Tabs.Screen
          name="train"
          options={{
            title: 'Entrena',
          }}
        />
        <Tabs.Screen
          name="learn"
          options={{
            title: 'Aprende',
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  customTabBar: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    height: Platform.OS === 'ios' ? 90 : 70,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
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
    position: 'relative',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeTabButton: {
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
  tabButtonBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  activeTabButtonBackground: {
    backgroundColor: 'rgba(208, 223, 0, 0.1)',
  },
  touchableArea: {
    ...StyleSheet.absoluteFillObject,
  },
});