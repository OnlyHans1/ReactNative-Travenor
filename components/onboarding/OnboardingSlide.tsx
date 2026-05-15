import React from 'react';
import { Text, StyleSheet, View, useWindowDimensions, Image } from 'react-native';
import Animated, {
  FadeInDown,
} from 'react-native-reanimated';
import { COLORS, SPACING, FONT_SIZE } from '@/constants/design';
import { OnboardingSlide } from '@/types/onboarding';

interface OnboardingSlideComponentProps {
  slide: OnboardingSlide;
  index: number;
}

export default function OnboardingSlideComponent({ slide, index }: OnboardingSlideComponentProps) {
  const { width, height } = useWindowDimensions();
  // Image takes about 55% of the screen height
  const imageHeight = height * 0.55;

  const parts = slide.title.split(slide.highlightWord);

  return (
    <View style={[styles.container, { width }]}>
      {/* Illustration */}
      <View style={[styles.imageContainer, { height: imageHeight, width }]}>
        <Image
          source={slide.image}
          style={[styles.image, { height: imageHeight, width }]}
          resizeMode="cover"
        />
      </View>

      {/* Content */}
      <Animated.View
        entering={FadeInDown.delay(200).duration(600).springify()}
        style={styles.contentContainer}
      >
        {/* Title with highlighted word */}
        <Text style={styles.title}>
          {parts[0]}
          <Text style={styles.highlightText}>{slide.highlightWord}</Text>
          {parts[1]}
        </Text>

        {/* Description */}
        <Text style={styles.description}>{slide.description}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    marginBottom: SPACING.xl,
  },
  image: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  contentContainer: {
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
    flex: 1,
    paddingTop: SPACING.md,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.textDark,
    textAlign: 'center',
    lineHeight: 38,
    marginBottom: SPACING.lg,
  },
  highlightText: {
    color: COLORS.accent,
    fontWeight: '800',
  },
  description: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.textLight,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: SPACING.sm,
  },
});
