import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants/colors';
import { HighlightCurveProps } from '../../types/onboarding';

export default function HighlightCurve({
  curve,
  color = colors.accent,
  style,
}: HighlightCurveProps) {
  return (
    <View style={[styles.container, style]}>
      <Svg
        width={curve.width}
        height={curve.height}
        viewBox={`0 0 ${curve.width} ${curve.height}`}
        fill="none"
      >
        <Path d={curve.path} fill={color} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
