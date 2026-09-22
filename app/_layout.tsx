import { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import {
  useFonts,
  Outfit_400Regular,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  Outfit_900Black,
} from '@expo-google-fonts/outfit';
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
} from '@expo-google-fonts/plus-jakarta-sans';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the native splash screen from auto-hiding
// so our custom animated splash takes over smoothly.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded, fontError] = useFonts({
    Outfit_400Regular,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_900Black,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the native splash screen once fonts are ready
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          animationDuration: 350,
        }}
      >
        {/* Entry: Custom animated splash */}
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />
        {/* Onboarding flow */}
        <Stack.Screen
          name="onboarding"
          options={{
            headerShown: false,
            animation: 'fade',
            gestureEnabled: false,
          }}
        />
        {/* Main app tabs */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            animation: 'fade',
            gestureEnabled: false,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
