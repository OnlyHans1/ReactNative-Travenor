/**
 * Reusable animation configurations for the Travenor app
 */
import { Easing } from 'react-native-reanimated';

export const ANIMATION_CONFIG = {
  splash: {
    logoDuration: 1200,
    logoDelay: 300,
    fadeOutDuration: 600,
    autoNavigateDelay: 2500,
  },
  onboarding: {
    contentFadeIn: 500,
    contentSlideUp: 600,
    dotTransition: 300,
    buttonScale: 150,
    pageTransition: 400,
  },
} as const;

export const SPRING_CONFIG = {
  gentle: {
    damping: 20,
    stiffness: 120,
    mass: 1,
  },
  bouncy: {
    damping: 12,
    stiffness: 150,
    mass: 0.8,
  },
  snappy: {
    damping: 22,
    stiffness: 200,
    mass: 0.6,
  },
} as const;

export const TIMING_CONFIG = {
  smooth: {
    duration: 400,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  },
  decelerate: {
    duration: 350,
    easing: Easing.out(Easing.cubic),
  },
  accelerate: {
    duration: 300,
    easing: Easing.in(Easing.cubic),
  },
} as const;
