import React from 'react';
import { StyleProp, ImageStyle } from 'react-native';
import { Image } from 'expo-image';

interface TravenorLogoProps {
  size?: number;
  color?: string;
  style?: StyleProp<ImageStyle>;
}

export default function TravenorLogo({
  size = 190,
  style,
}: TravenorLogoProps) {
  return (
    <Image
      source={require('../../../assets/icons/logo.svg')}
      style={[{ width: size, height: size }, style]}
      contentFit="contain"
    />
  );
}
