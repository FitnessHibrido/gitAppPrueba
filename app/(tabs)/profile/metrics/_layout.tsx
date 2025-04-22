import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MetricsLayout() {
  const router = useRouter();

  return (
    <Stack screenOptions={{
      headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
      ),
    }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: 'Métricas Corporales', // Título personalizado para la pantalla index
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="add"
        options={{
          presentation: 'modal',
          headerShown: true,
          title: 'Añadir Métricas',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="add-measurement"
        options={{
          presentation: 'modal',
          headerShown: true,
          title: 'Añadir Medidas',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          presentation: 'card',
          headerShown: true,
          title: 'Detalles de Métricas',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="measurement-details"
        options={{
          presentation: 'card',
          headerShown: true,
          title: 'Detalles de Medidas',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="photo-compare"
        options={{
          presentation: 'card',
          headerShown: true,
          title: 'Comparación de Fotos',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
