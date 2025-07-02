import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6366f1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Who Are You Again?' }} />
        <Stack.Screen name="level-selection" options={{ title: 'Choose Level' }} />
        <Stack.Screen name="player-setup" options={{ title: 'Player Setup' }} />
        <Stack.Screen name="game" options={{ title: 'Game' }} />
      </Stack>
    </>
  );
} 