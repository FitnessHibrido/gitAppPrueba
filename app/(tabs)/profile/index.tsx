import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Settings, Crown, ChevronRight, Scale, Clock, Weight, Trophy, Edit3, Camera, TrendingUp } from 'lucide-react-native';
import { useProfile } from '@/context/ProfileContext';
import { useAuth } from '@/context/AuthContext';
import { usePerformance } from '@/hooks/usePerformance';
import { useSubscription } from '@/hooks/useSubscription';
import React, { useState, useEffect } from 'react';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  const router = useRouter();
  const { profile, loading: profileLoading } = useProfile();
  const { metrics, loading: performanceLoading } = usePerformance();
  const { currentSubscription, plans, loading: subscriptionLoading } = useSubscription();
  const { user, signOut } = useAuth();

  const loading = profileLoading || performanceLoading || subscriptionLoading;

  useEffect(() => {
    if (!user) {
      router.replace('/(auth)/login');
    }
  }, [user]);

  if (!user) return null;
  if (loading || !profile) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Cargando perfil...</Text>
      </View>
    );
  }

  const currentPlan = plans.find(p => p.id === profile.subscription_type) || plans.find(p => p.id === 'free');

  const nextBillingDate = currentSubscription?.current_period_end
    ? new Date(currentSubscription.current_period_end).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : null;

  const performanceMetrics = [
    {
      id: 1,
      title: 'Tiempo Total',
      value: `${metrics.totalTime}min`,
      change: '+2h esta semana',
      icon: Clock,
      color: '#6366F1',
      bgColor: '#EEF2FF',
    },
    {
      id: 2,
      title: 'Volumen Total',
      value: `${metrics.totalVolume.toLocaleString()}kg`,
      change: '+150kg vs anterior',
      icon: Weight,
      color: '#10B981',
      bgColor: '#ECFDF5',
    },
    {
      id: 3,
      title: 'PRs',
      value: `${metrics.personalRecords} PRs`,
      change: '3 esta semana',
      icon: Trophy,
      color: '#F59E0B',
      bgColor: '#FFFBEB',
    },
  ];

  const handleSignOut = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Cerrar Sesión', style: 'destructive', onPress: signOut },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.headerTitle}>Mi Perfil</Text>
            <TouchableOpacity 
              style={styles.settingsButton}
              onPress={() => router.push('/profile/edit')}
            >
              <Settings size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileImageSection}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{ uri: profile?.avatar_url || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' }}
                style={styles.profileImage}
              />
              <TouchableOpacity 
                style={styles.cameraButton}
                onPress={() => router.push('/profile/camera')}
              >
                <Camera size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{profile?.name || 'Sin nombre'}</Text>
              <Text style={styles.profileEmail}>{profile?.email || user.email}</Text>
              <TouchableOpacity 
                style={styles.editProfileButton}
                onPress={() => router.push('/profile/edit')}
              >
                <Edit3 size={16} color="#6366F1" />
                <Text style={styles.editProfileText}>Editar perfil</Text>
              </TouchableOpacity>
            </View>
          </View>

          {profile?.bio && (
            <View style={styles.bioSection}>
              <Text style={styles.bioText}>{profile.bio}</Text>
            </View>
          )}
        </View>

        {/* Subscription Card */}
        <TouchableOpacity
          style={styles.subscriptionCard}
          onPress={() => router.push('/profile/payment')}
        >
          <View style={styles.subscriptionContent}>
            <View style={styles.subscriptionIcon}>
              <Crown size={24} color="#F59E0B" />
            </View>
            <View style={styles.subscriptionInfo}>
              <Text style={styles.subscriptionTitle}>{currentPlan?.name || 'Plan Gratuito'}</Text>
              {nextBillingDate ? (
                <Text style={styles.subscriptionDate}>Próximo cobro: {nextBillingDate}</Text>
              ) : (
                <Text style={styles.subscriptionDate}>Actualiza para acceder a más funciones</Text>
              )}
            </View>
          </View>
          <ChevronRight size={20} color="#6B7280" />
        </TouchableOpacity>

        {/* Quick Actions */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity
              style={styles.quickActionCard}
              onPress={() => router.push('/profile/metrics')}
            >
              <View style={[styles.quickActionIcon, { backgroundColor: '#EEF2FF' }]}>
                <Scale size={24} color="#6366F1" />
              </View>
              <Text style={styles.quickActionTitle}>Métricas</Text>
              <Text style={styles.quickActionSubtitle}>Seguimiento corporal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickActionCard}
              onPress={() => router.push('/train/performance')}
            >
              <View style={[styles.quickActionIcon, { backgroundColor: '#ECFDF5' }]}>
                <TrendingUp size={24} color="#10B981" />
              </View>
              <Text style={styles.quickActionTitle}>Rendimiento</Text>
              <Text style={styles.quickActionSubtitle}>Estadísticas</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Performance Overview */}
        <View style={styles.performanceSection}>
          <View style={styles.performanceHeader}>
            <Text style={styles.sectionTitle}>Resumen de Rendimiento</Text>
            <TouchableOpacity onPress={() => router.push('/train/performance')}>
              <Text style={styles.sectionAction}>Ver todo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.metricsContainer}>
            {performanceMetrics.map((metric) => (
              <View
                key={metric.id}
                style={[styles.metricCard, { backgroundColor: metric.bgColor }]}>
                <View style={[styles.metricIconContainer, { backgroundColor: metric.color }]}>
                  <metric.icon size={20} color="#FFFFFF" />
                </View>
                <Text style={[styles.metricValue, { color: metric.color }]}>{metric.value}</Text>
                <Text style={styles.metricTitle}>{metric.title}</Text>
                <Text style={styles.metricChange}>{metric.change}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Sign Out */}
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={handleSignOut}
        >
          <Text style={styles.signOutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  settingsButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  profileImageSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 12,
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 6,
  },
  editProfileText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6366F1',
  },
  bioSection: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  bioText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  subscriptionCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  subscriptionContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscriptionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFBEB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  subscriptionInfo: {
    flex: 1,
  },
  subscriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  subscriptionDate: {
    fontSize: 14,
    color: '#6B7280',
  },
  quickActionsSection: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  quickActionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickActionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  quickActionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  performanceSection: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  performanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionAction: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366F1',
  },
  metricsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  metricCard: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  metricIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  metricTitle: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
    textAlign: 'center',
  },
  metricChange: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  signOutButton: {
    marginHorizontal: 20,
    marginTop: 32,
    backgroundColor: '#FEF2F2',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  signOutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#DC2626',
  },
});