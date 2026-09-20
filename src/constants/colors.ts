/**
 * Travenor Design System Colors
 * Extracted directly from Figma design tokens
 */

export const colors = {
  // Primary brand palette
  primary: '#24BAEC',
  primaryDark: '#0A7EA4',

  // Action & Accent
  accent: '#FF7029',
  accentLight: '#FF8A4C',

  // Neutral & Backgrounds
  backgroundLight: '#CAEAFF',
  white: '#FFFFFF',
  offWhite: '#F7F7F9',
  gray100: '#F5F5F5',
  gray200: '#E8E8E8',
  gray300: '#CAD0D6',

  // Typography
  textDark: '#1B1E28',
  textSub: '#7D848D',

  // Dark palette
  dark: '#0D0E12',
  darkCard: '#1A1C22',
  darkSurface: '#22242C',
  darkBorder: '#2E3038',

  // State
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',

  // Overlays
  overlayDark: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.2)',
} as const;

export type AppColors = typeof colors;
