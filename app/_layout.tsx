import { useEffect } from 'react';
import '../global.css';
import * as NavigationBar from 'expo-navigation-bar';

import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function Layout() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      const setupNavigationBar = async () => {
        await NavigationBar.setVisibilityAsync('hidden'); // Hide navigation bar
        await NavigationBar.setBehaviorAsync('overlay-swipe'); // Allow swipe to show
      };
      setupNavigationBar();
    }
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="welcome"
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
    </Stack>
  );
}
