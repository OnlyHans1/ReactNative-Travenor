export const springConfig = {
  gentle: {
    damping: 20,
    stiffness: 90,
    mass: 1,
  },
  bouncy: {
    damping: 12,
    stiffness: 120,
    mass: 0.8,
  },
  snappy: {
    damping: 18,
    stiffness: 150,
    mass: 0.6,
  },
} as const;

export const animationConfig = {
  splash: {
    logoDelay: 300,
    textDelay: 700,
    fadeOutDuration: 400,
    autoNavigateDelay: 2200,
  },
  onboarding: {
    fadeInDuration: 400,
    slideTransitionDuration: 300,
  },
} as const;
