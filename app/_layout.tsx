import { useEffect } from 'react';
import '../global.css';
import * as NavigationBar from 'expo-navigation-bar';

import { Stack } from 'expo-router';
import { Platform, StatusBar } from 'react-native';

export default function Layout() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      const setupNavigationBar = async () => {
        await NavigationBar.setVisibilityAsync('hidden'); // Hide navigation bar
        await NavigationBar.setBehaviorAsync('overlay-swipe'); // Allow swipe to show

        // StatusBar.setBarStyle('default');
        // Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
        // StatusBar.setTranslucent(true);
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
