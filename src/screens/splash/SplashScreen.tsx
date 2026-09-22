import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
  withSpring,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import { animationConfig, springConfig } from '../../animations/transitions';
import TravenorLogo from '../../components/common/TravenorLogo';

export default function SplashScreen() {
  const insets = useSafeAreaInsets();

  const logoScale = useSharedValue(0.4);
  const logoOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const textTranslateY = useSharedValue(24);
  const containerOpacity = useSharedValue(1);

  const navigateToOnboarding = useCallback(() => {
    router.replace('/onboarding');
  }, []);

  useEffect(() => {
    // 1. Logo appears with spring entrance
    logoOpacity.value = withDelay(
      animationConfig.splash.logoDelay,
      withTiming(1, { duration: 500, easing: Easing.out(Easing.cubic) })
    );
    logoScale.value = withDelay(
      animationConfig.splash.logoDelay,
      withSpring(1, springConfig.bouncy)
    );

    // 2. Brand title fades in from below
    textOpacity.value = withDelay(
      animationConfig.splash.textDelay,
      withTiming(1, { duration: 400, easing: Easing.out(Easing.cubic) })
    );
    textTranslateY.value = withDelay(
      animationConfig.splash.textDelay,
      withSpring(0, springConfig.snappy)
    );

    // 3. Smooth transition to onboarding
    const navigationTimer = setTimeout(() => {
      containerOpacity.value = withTiming(
        0,
        { duration: animationConfig.splash.fadeOutDuration },
        () => {
          runOnJS(navigateToOnboarding)();
        }
      );
    }, animationConfig.splash.autoNavigateDelay);

    return () => clearTimeout(navigationTimer);
  }, [
    containerOpacity,
    logoOpacity,
    logoScale,
    navigateToOnboarding,
    textOpacity,
    textTranslateY,
  ]);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: logoScale.value }],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{ translateY: textTranslateY.value }],
  }));

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle]}>
      <StatusBar style="light" />

      {/* Centered Travenor Globe & Planes Logo */}
      <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
        <TravenorLogo size={190} color={colors.white} />
      </Animated.View>

      {/* Bottom Travenor Brand Text */}
      <Animated.View
        style={[
          styles.brandContainer,
          textAnimatedStyle,
          { bottom: Math.max(insets.bottom + 24, 52) },
        ]}
      >
        <Text style={styles.brandTitle}>Travenor</Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  brandContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  brandTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: 0.5,
  },
});
