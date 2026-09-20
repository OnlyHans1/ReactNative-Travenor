import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  interpolateColor,
} from 'react-native-reanimated';
import { colors } from '../../constants/colors';
import { DotProps, PaginationDotsProps } from '../../types/onboarding';

export default function PaginationDots({
  total,
  scrollX,
  pageWidth,
}: PaginationDotsProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <Dot
          key={index}
          index={index}
          scrollX={scrollX}
          pageWidth={pageWidth}
          total={total}
        />
      ))}
    </View>
  );
}

function Dot({ index, scrollX, pageWidth }: DotProps) {
  const animatedStyle = useAnimatedStyle(() => {
    // Determine expected width at each slide index [0, 1, 2]
    // Slide 0: [35, 13, 6]
    // Slide 1: [13, 35, 6] (or [13, 35, 6] / [6, 35, 13])
    // Slide 2: [6, 13, 35]
    let widthRange: number[];
    if (index === 0) {
      widthRange = [35, 13, 6];
    } else if (index === 1) {
      widthRange = [13, 35, 13];
    } else {
      widthRange = [6, 13, 35];
    }

    const inputRange = [0, pageWidth, pageWidth * 2];

    const dotWidth = interpolate(
      scrollX.value,
      inputRange,
      widthRange,
      Extrapolation.CLAMP
    );

    const activeRange = [
      index === 0 ? colors.primary : colors.backgroundLight,
      index === 1 ? colors.primary : colors.backgroundLight,
      index === 2 ? colors.primary : colors.backgroundLight,
    ];

    const dotBackgroundColor = interpolateColor(
      scrollX.value,
      inputRange,
      activeRange
    );

    return {
      width: dotWidth,
      backgroundColor: dotBackgroundColor,
    };
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    height: 7,
    marginBottom: 32,
  },
  dot: {
    height: 7,
    borderRadius: 16,
  },
});
