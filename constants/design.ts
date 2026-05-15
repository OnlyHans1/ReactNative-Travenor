/**
 * Travenor Design System
 * Premium travel app design tokens
 */

export const COLORS = {
  // Primary palette
  primary: '#1FB5EB', // Light Blue
  primaryDark: '#0A7EA4',

  // Accent
  accent: '#FF7029', // Orange
  accentLight: '#FF8A4C',

  // Text Colors
  textDark: '#1B1E28',
  textLight: '#7C838D',
  
  // Neutral
  white: '#FFFFFF',
  offWhite: '#F7F7F9',
  gray100: '#F5F5F5',
  gray200: '#E8E8E8',
  gray300: '#CAD0D6',
  gray400: '#7C838D',
  gray500: '#5A5E67',
  gray600: '#3A3D46',

  // Dark mode
  dark: '#0D0E12',
  darkCard: '#1A1C22',
  darkSurface: '#22242C',
  darkBorder: '#2E3038',

  // Status
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.2)',
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

export const FONT_SIZE = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 30,
  xxxl: 36,
  display: 42,
} as const;

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  full: 999,
} as const;

export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 8,
  },
  accent: {
    shadowColor: '#1FB5EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
} as const;
