import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LearnLayout() {
  const router = useRouter();
  return (
    <Stack screenOptions={{ 
      headerBackTitle: " ",
      headerTitleAlign: 'center', // Esto centrará el título
      headerShown: true, // Cambia a true para mostrar el encabezado
      headerShadowVisible: false, // Cambia a false para ocultar la sombra
      headerStyle: {
        backgroundColor: '#FFFFFF', // Cambia el color de fondo del encabezado
      }, 
      headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
      ),

       }}>
      <Stack.Screen name="index"     
              options={{
                headerShown: false, // Cambia a true si deseas mostrar el encabezado
                presentation: 'card',
                title: 'Aprende', 
              }}  
                       
      />
      <Stack.Screen 
        name="videos" 
        options={{
          presentation: 'card',
          title: 'Videos Formativos', 
        }}
      />
      <Stack.Screen 
         name="video-category" 
         options={({ route }: any) => ({
           presentation: 'card',
           title: route.params?.title || 'Categoría', // Título dinámico
         })}
      />
      <Stack.Screen 
         name="manuals" 
         options={{
           presentation: 'card',
           title: 'Manuales y Guías',
         }}
      />
      <Stack.Screen 
        name="pdf" 
        options={({ route }: any) => ({
          presentation: 'card',
          headerShown: true,
          title: route.params?.title || 'Manual', // Título dinámico
        })}
      />
    </Stack>
  );
}