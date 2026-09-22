import { ImageSourcePropType, ViewStyle, TextStyle } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

export interface OnboardingSlideItem {
  id: string;
  image: ImageSourcePropType;
  titlePrefix: string;
  highlightWord: string;
  titleSuffix?: string;
  description: string;
  buttonText: string;
  curveImage: ImageSourcePropType;
  curveWidth: number;
  curveHeight: number;
}

export interface PaginationDotsProps {
  total: number;
  scrollX: SharedValue<number>;
  pageWidth: number;
}

export interface DotProps {
  index: number;
  scrollX: SharedValue<number>;
  pageWidth: number;
  total: number;
}

export interface OnboardingButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'skip';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export interface HighlightCurveProps {
  source: ImageSourcePropType;
  width: number;
  height: number;
  style?: ViewStyle;
}
