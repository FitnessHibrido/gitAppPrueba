import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: string;
  subscription_features: {
    feature: string;
  }[];
}

interface Subscription {
  id: string;
  plan_id: string;
  status: string;
  current_period_start: string;
  current_period_end: string;
  platform: 'ios' | 'android' | 'web';
  auto_renewing: boolean;
}

export function useSubscription() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [currentSubscription, setCurrentSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    fetchSubscriptionData();
  }, [user]);

  const fetchSubscriptionData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Obtener planes
      const { data: plansData, error: plansError } = await supabase
        .from('subscription_plans')
        .select(`
          *,
          subscription_features (
            feature
          )
        `);

      if (plansError) throw plansError;
      setPlans(plansData);

      // Obtener suscripción actual si hay usuario
      if (user) {
        const { data: subscription, error: subError } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('profile_id', user.id)
          .eq('status', 'active')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (subError && subError.code !== 'PGRST116') throw subError;
        setCurrentSubscription(subscription);
      }
    } catch (err) {
      console.error('Error fetching subscription data:', err);
      setError(err instanceof Error ? err.message : 'Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  };

  const subscribe = async (planId: string) => {
    try {
      if (!user) throw new Error('Usuario no autenticado');

      // Crear suscripción
      const { data, error } = await supabase
        .from('subscriptions')
        .insert({
          profile_id: user.id,
          plan_id: planId,
          status: 'active',
          current_period_start: new Date().toISOString(),
          current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          platform: Platform.OS,
          auto_renewing: true
        })
        .select()
        .single();

      if (error) throw error;
      setCurrentSubscription(data);

      // Actualizar perfil
      await supabase
        .from('profiles')
        .update({ subscription_type: planId })
        .eq('id', user.id);

      return data;
    } catch (err) {
      console.error('Error subscribing:', err);
      throw err;
    }
  };

  return {
    loading,
    error,
    plans,
    currentSubscription,
    subscribe,
  };
}