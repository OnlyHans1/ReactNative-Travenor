import { colors } from './colors';

export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  title: 30,
  splashBrand: 34,
  display: 40,
} as const;

export const borderRadius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  button: 16,
  lg: 20,
  xl: 24,
  banner: 30,
  pill: 999,
} as const;

export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  button: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
} as const;

export const fonts = {
  headingBlack: 'Outfit_900Black',
  headingExtraBold: 'Outfit_800ExtraBold',
  headingBold: 'Outfit_700Bold',
  headingSemiBold: 'Outfit_600SemiBold',
  headingRegular: 'Outfit_400Regular',
  bodyRegular: 'PlusJakartaSans_400Regular',
  bodyMedium: 'PlusJakartaSans_500Medium',
  buttonSemiBold: 'PlusJakartaSans_600SemiBold',
  buttonBold: 'PlusJakartaSans_700Bold',
} as const;

export { colors, COLORS } from './colors';
export const SPACING = spacing;
export const FONT_SIZE = fontSize;
export const BORDER_RADIUS = borderRadius;
export const SHADOWS = shadows;
export const FONTS = fonts;
