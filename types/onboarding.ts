import { ImageSourcePropType } from 'react-native';

export interface OnboardingSlide {
  id: string;
  image: ImageSourcePropType;
  title: string;
  highlightWord: string;
  description: string;
  buttonText: string;
}

export interface PaginationDotProps {
  index: number;
  currentIndex: number;
}
