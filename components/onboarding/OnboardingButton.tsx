import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { COLORS, SPACING, FONT_SIZE, BORDER_RADIUS } from '@/constants/design';
import { SPRING_CONFIG } from '@/animations/transitions';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface OnboardingButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'text';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function OnboardingButton({
  label,
  onPress,
  variant = 'primary',
  style,
  textStyle,
}: OnboardingButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95, SPRING_CONFIG.snappy);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, SPRING_CONFIG.bouncy);
  };

  if (variant === 'text') {
    return (
      <AnimatedTouchable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[animatedStyle, style]}
        activeOpacity={0.7}
      >
        <Text style={[styles.textButtonLabel, textStyle]}>{label}</Text>
      </AnimatedTouchable>
    );
  }

  return (
    <AnimatedTouchable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[animatedStyle, styles.primaryButtonWrapper, style]}
      activeOpacity={0.9}
    >
      <View style={styles.primaryButton}>
        <Text style={[styles.primaryButtonLabel, textStyle]}>{label}</Text>
      </View>
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  primaryButtonWrapper: {
    width: '100%',
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xxl,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonLabel: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
    fontWeight: '700',
  },
  textButtonLabel: {
    color: COLORS.white,
    fontSize: FONT_SIZE.sm,
    fontWeight: '500',
  },
});
