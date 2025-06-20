import { Stack } from 'expo-router';

export default function CommunityLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen 
        name="ranking" 
        options={{
          presentation: 'card',
          headerShown: true,
          title: 'Ranking de la Comunidad',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen 
        name="achievements" 
        options={{
          presentation: 'card',
          headerShown: true,
          title: 'Mis Logros',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen 
        name="user-profile" 
        options={{
          presentation: 'card',
          headerShown: true,
          title: 'Perfil de Usuario',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen 
        name="feed" 
        options={{
          presentation: 'card',
          headerShown: false,
          title: 'Feed de la Comunidad',
        }}
      />
      <Stack.Screen 
        name="new-post" 
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="search-users" 
        options={{
          presentation: 'card',
          headerShown: true,
          title: 'Buscar Usuarios',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}