import { Stack } from 'expo-router';

export default function BuilderLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen 
        name="exercise-selection" 
        options={{
          presentation: 'modal',
          headerShown: true,
          title: 'Seleccionar Ejercicio',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}