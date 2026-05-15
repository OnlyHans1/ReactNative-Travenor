import { OnboardingSlide } from '@/types/onboarding';

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: '1',
    image: require('@/assets/splash/splash-1.png'),
    title: "Life is short and the world is ",
    highlightWord: 'wide',
    description:
      'At Friends tours and travel, we customize reliable and trustworthy educational tours to destinations all over the world',
    buttonText: 'Get Started',
  },
  {
    id: '2',
    image: require('@/assets/splash/splash-3.png'),
    title: "It's a big world out there go ",
    highlightWord: 'explore',
    description:
      'To get the best of your adventure you just need to leave and go where you like. We are waiting for you',
    buttonText: 'Next',
  },
  {
    id: '3',
    image: require('@/assets/splash/splash-2.png'),
    title: "People don't take trips, trips take ",
    highlightWord: 'people',
    description:
      'Start a new adventure and discover the most beautiful places in the world with your loved ones',
    buttonText: 'Next',
  },
];

export const ONBOARDING_STORAGE_KEY = '@travenor_onboarding_complete';
