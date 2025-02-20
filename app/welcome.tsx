import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, StatusBar, Platform, Pressable, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  SlideInUp,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';
// import { BlurView } from 'expo-blur';

// import * as NavigationBar from 'expo-navigation-bar';

const events = [
  { id: 1, image: require('assets/images/1.jpg') },
  { id: 2, image: require('assets/images/2.jpg') },
  { id: 3, image: require('assets/images/3.jpg') },
  { id: 4, image: require('assets/images/4.jpg') },
  { id: 5, image: require('assets/images/5.jpg') },
  { id: 6, image: require('assets/images/6.jpg') },
  { id: 7, image: require('assets/images/7.jpg') },
  { id: 8, image: require('assets/images/8.jpg') },
  { id: 9, image: require('assets/images/9.jpg') },
];

export default function WelcomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const onButtonPress = () => {
    setActiveIndex(activeIndex >= events.length - 1 ? 0 : activeIndex + 1);
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     StatusBar.setBarStyle('default');
  //     Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
  //     StatusBar.setTranslucent(true);
  //     // NavigationBar.setBackgroundColorAsync('transparent');
  //   }, [])
  // );

  useEffect(() => {
    console.log('Component re-rendered with active index:', activeIndex);
  }, [activeIndex]);

  return (
    <View className="flex-1 items-center bg-yellow-950">
      <View className="absolute bottom-0 left-0 right-0 top-0 -z-10">
        {/* <View className="absolute bg-gray-500/30" /> */}
        <Animated.Image
          key={events[activeIndex].image} // use a unique key here
          source={events[activeIndex].image}
          className="h-full w-full"
          resizeMode="cover"
          entering={FadeIn.duration(1000)}
          exiting={FadeOut.duration(1000)}
        />
      </View>
      {/* <View className="absolute left-0 top-0 bg-gray-500/30" /> */}

      <BlurView
        blurAmount={12}
        blurType="dark"
        reducedTransparencyFallbackColor="transparent"
        className="absolute h-full w-full">
        {/* <BlurView
        intensity={100}
        tint="dark"
        className="flex-1"
      > */}
        {/* 1:10:15 */}
        <SafeAreaView className="flex-1">
          {/* This is the top part of the screen */}
          <Animated.View className="h-3/5 w-full" entering={SlideInUp.damping(12).duration(1200)}>
            <ScrollView horizontal>
              {events.map((event) => (
                <View key={event.id} className="h-full w-96 p-5 shadow-md">
                  <Image source={event.image} className="h-full w-full rounded-3xl" />
                </View>
              ))}
            </ScrollView>
          </Animated.View>
          <View className="w-full flex-1 justify-center gap-4 p-4">
            <Animated.Text
              className="text-center text-2xl font-bold text-white/60"
              entering={FadeInUp.damping(12).duration(500).delay(800)}>
              Welcome to
            </Animated.Text>
            <Animated.Text
              className="text-center text-5xl font-bold text-white"
              entering={FadeInUp.damping(12).duration(500).delay(800)}>
              Ekam Temple
            </Animated.Text>
            <Animated.Text
              className="mb-5 text-center text-lg text-white/60"
              entering={FadeInUp.damping(12).duration(500).delay(800)}>
              May Bhagwan's blessing guide us all ---- your feedback helps every experience even
              more meaningful. Share your thoughts with us.
            </Animated.Text>
            <AnimatedPressable
              onPress={onButtonPress}
              className="items-center self-center rounded-full bg-white px-10 py-4"
              entering={FadeInUp.damping(12).duration(500).delay(800)}>
              <Text className="text-lg">Fill a Form</Text>
            </AnimatedPressable>
          </View>
        </SafeAreaView>
      </BlurView>
    </View>
  );
}
