import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  SharedValue,
  Extrapolation,
  interpolateColor,
} from 'react-native-reanimated';
import { COLORS } from '@/constants/design';

interface PaginationDotsProps {
  total: number;
  scrollX: SharedValue<number>;
  pageWidth: number;
}

export default function PaginationDots({ total, scrollX, pageWidth }: PaginationDotsProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <Dot
          key={index}
          index={index}
          scrollX={scrollX}
          pageWidth={pageWidth}
        />
      ))}
    </View>
  );
}

interface DotProps {
  index: number;
  scrollX: SharedValue<number>;
  pageWidth: number;
}

function Dot({ index, scrollX, pageWidth }: DotProps) {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * pageWidth,
      index * pageWidth,
      (index + 1) * pageWidth,
    ];

    const width = interpolate(
      scrollX.value,
      inputRange,
      [6, 24, 6],
      Extrapolation.CLAMP
    );

    const backgroundColor = interpolateColor(
      scrollX.value,
      inputRange,
      [COLORS.gray200, COLORS.primary, COLORS.gray200]
    );

    return {
      width,
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.dot, animatedStyle]} />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 24,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
});
