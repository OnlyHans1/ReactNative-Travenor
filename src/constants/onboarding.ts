import { OnboardingSlideItem } from '../types/onboarding';

export const onboardingSlides: OnboardingSlideItem[] = [
  {
    id: '1',
    image: require('../../assets/splash/splash-1.png'),
    titlePrefix: 'Life is short and the world is ',
    highlightWord: 'wide',
    titleSuffix: '',
    description:
      'At Friends tours and travel, we customize reliable and trutworthy educational tours to destinations all over the world',
    buttonText: 'Get Started',
    curve: {
      path: 'M0 10.2985C6.75545 2.35061 37.2543 -7.78943 62.9154 9.39381C48.7379 4.02878 19.7877 0.272161 0 10.2985Z',
      width: 63,
      height: 11,
    },
  },
  {
    id: '2',
    image: require('../../assets/splash/splash-3.png'),
    titlePrefix: 'It’s a big world out there go ',
    highlightWord: 'explore',
    titleSuffix: '',
    description:
      'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
    buttonText: 'Next',
    curve: {
      path: 'M0 10.3517C10.9568 2.36275 60.4234 -7.82966 102.044 9.44233C79.049 4.04958 32.094 0.273567 0 10.3517Z',
      width: 102,
      height: 11,
    },
  },
  {
    id: '3',
    image: require('../../assets/splash/splash-2.png'),
    titlePrefix: 'People don’t take trips, trips take ',
    highlightWord: 'people',
    titleSuffix: '',
    description:
      'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
    buttonText: 'Next',
    curve: {
      path: 'M0 10.293C9.52577 2.34935 52.5318 -7.78525 88.7162 9.38877C68.7247 4.02662 27.9023 0.272015 0 10.293Z',
      width: 89,
      height: 11,
    },
  },
];

export const onboardingStorageKey = '@travenor_onboarding_completed';
