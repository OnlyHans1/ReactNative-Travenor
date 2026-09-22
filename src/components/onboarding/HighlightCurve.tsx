import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { HighlightCurveProps } from '../../types/onboarding';

export default function HighlightCurve({
  source,
  width,
  height,
  style,
}: HighlightCurveProps) {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={source}
        style={{ width, height }}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
