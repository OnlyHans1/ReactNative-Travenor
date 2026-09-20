import { ImageSourcePropType, ViewStyle, TextStyle } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

export interface HighlightCurveData {
  path: string;
  width: number;
  height: number;
}

export interface OnboardingSlideItem {
  id: string;
  image: ImageSourcePropType;
  titlePrefix: string;
  highlightWord: string;
  titleSuffix?: string;
  description: string;
  buttonText: string;
  curve: HighlightCurveData;
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
  curve: HighlightCurveData;
  color?: string;
  style?: ViewStyle;
}
