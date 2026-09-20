import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { colors } from '../../constants/colors';
import { springConfig } from '../../animations/transitions';
import { OnboardingButtonProps } from '../../types/onboarding';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

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
    scale.value = withSpring(0.96, springConfig.snappy);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, springConfig.bouncy);
  };

  if (variant === 'skip') {
    return (
      <AnimatedTouchable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[animatedStyle, style]}
        activeOpacity={0.7}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
      >
        <Text style={[styles.skipButtonText, textStyle]}>{label}</Text>
      </AnimatedTouchable>
    );
  }

  return (
    <AnimatedTouchable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.primaryWrapper, animatedStyle, style]}
      activeOpacity={0.9}
    >
      <View style={styles.primaryButton}>
        <Text style={[styles.primaryButtonText, textStyle]}>{label}</Text>
      </View>
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  primaryWrapper: {
    width: '100%',
  },
  primaryButton: {
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  skipButtonText: {
    color: colors.backgroundLight,
    fontSize: 18,
    fontWeight: '400',
  },
});
