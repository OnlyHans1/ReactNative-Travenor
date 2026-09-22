import { OnboardingSlideItem } from '../types/onboarding';

export const onboardingSlides: OnboardingSlideItem[] = [
  {
    id: '1',
    image: require('../../assets/splash/splash-1.webp'),
    titlePrefix: 'Life is short and the world is ',
    highlightWord: 'wide',
    titleSuffix: '',
    description:
      'At Friends tours and travel, we customize reliable and trutworthy educational tours to destinations all over the world',
    buttonText: 'Get Started',
    curveImage: require('../../assets/onboarding/curve-wide.svg'),
    curveWidth: 63,
    curveHeight: 11,
  },
  {
    id: '2',
    image: require('../../assets/splash/splash-3.webp'),
    titlePrefix: 'It’s a big world out there go ',
    highlightWord: 'explore',
    titleSuffix: '',
    description:
      'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
    buttonText: 'Next',
    curveImage: require('../../assets/onboarding/curve-explore.svg'),
    curveWidth: 102,
    curveHeight: 11,
  },
  {
    id: '3',
    image: require('../../assets/splash/splash-2.webp'),
    titlePrefix: 'People don’t take trips, trips take ',
    highlightWord: 'people',
    titleSuffix: '',
    description:
      'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
    buttonText: 'Next',
    curveImage: require('../../assets/onboarding/curve-people.svg'),
    curveWidth: 89,
    curveHeight: 11,
  },
];

export const onboardingStorageKey = '@travenor_onboarding_completed';
