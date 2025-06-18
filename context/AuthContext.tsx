import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { supabase, checkSupabaseConnection } from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';
import { router } from 'expo-router';
import { Alert } from 'react-native';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    // Check Supabase connection on mount
    checkConnection();

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (isMounted.current) {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });


    

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted.current) {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
      isMounted.current = false;
    };
  }, []);

  const checkConnection = async () => {
    const isConnected = await checkSupabaseConnection();
    if (!isConnected) {
      console.error('Unable to connect to Supabase. Please check your configuration.');
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) throw error;
    } catch (error) {
      console.error('Error signing in:', error);
      throw new Error('Credenciales inválidas. Por favor, inténtalo de nuevo.');
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            name: name.trim(),
            email: email.trim().toLowerCase(),
          },
        },
      });

      if (error) throw error;
      if (!data.user) throw new Error('No se pudo crear el usuario');
      if (!data.session) {
        Alert.alert('Sesión finalizada', 'Ya has cerrado sesión.');
        return;
      }

      // Wait for the trigger to create the profile
      let retries = 0;
      const maxRetries = 10;
      
      while (retries < maxRetries) {
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('id')
          .eq('id', data.user.id)
          .single();

        if (profile) break;
        if (profileError && profileError.code !== 'PGRST116') throw profileError;
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        retries++;
      }

      if (retries === maxRetries) {
        throw new Error('Error al crear el perfil. Por favor, inténtalo de nuevo.');
      }

    } catch (error) {
      console.error('Error signing up:', error);
      if (error instanceof Error) {
        if (error.message.includes('already registered')) {
          throw new Error('Este email ya está registrado. Por favor, inicia sesión.');
        }
        throw error;
      }
      throw new Error('Error al crear la cuenta. Por favor, inténtalo de nuevo.');
    }
  };

  const signOut = async () => {
    try {
      const { data, error: sessionError } = await supabase.auth.getSession();
  
      // Si hay error o no hay sesión, lo limpiamos a la fuerza
      if (!data.session || sessionError) {
        await supabase.auth.signOut(); // forzamos igual
        setUser(null);
        setSession(null);
        router.replace('/(auth)/login');
        return;
      }
  
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
  
      setUser(null);
      setSession(null);
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Error signing out:', error);
      Alert.alert('Error', 'No se pudo cerrar sesión correctamente.');
    }
  };
  
  
  

  const resetPassword = async (email: string) => {
    try {
      const redirectTo = typeof window !== 'undefined' 
        ? `${window.location.origin}/reset-password`
        : 'https://your-app.com/reset-password'; // fallback URL

      const { error } = await supabase.auth.resetPasswordForEmail(
        email.trim().toLowerCase(),
        {
          redirectTo,
        }
      );

      if (error) throw error;
    } catch (error) {
      console.error('Error resetting password:', error);
      throw new Error('Error al enviar el email de recuperación. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user,
        session,
        loading,
        signIn,
        signUp,
        signOut,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}