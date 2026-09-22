import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Image } from 'expo-image';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/design';
import { OnboardingSlideItem } from '../../types/onboarding';
import HighlightCurve from './HighlightCurve';

interface OnboardingSlideProps {
  slide: OnboardingSlideItem;
  index: number;
}

export default function OnboardingSlide({ slide, index }: OnboardingSlideProps) {
  const { width, height } = useWindowDimensions();
  // Banner height is proportionally 54% of screen height, capped around 450px
  const bannerHeight = Math.min(height * 0.54, 450);

  return (
    <View style={[styles.container, { width }]}>
      {/* Top Banner WebP Image with rounded bottom corners */}
      <View style={[styles.bannerContainer, { width, height: bannerHeight }]}>
        <Image
          source={slide.image}
          style={[styles.bannerImage, { width, height: bannerHeight }]}
          contentFit="cover"
          transition={250}
        />
      </View>

      {/* Slide Text Content */}
      <Animated.View
        key={`slide-content-${slide.id}`}
        entering={FadeInDown.delay(150).duration(450)}
        style={styles.contentContainer}
      >
        {/* Title with Highlight Word & Curve */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {slide.titlePrefix}
            <Text style={styles.highlightText}>{slide.highlightWord}</Text>
            {slide.titleSuffix}
          </Text>

          {/* Decorative curve SVG asset underneath highlight word */}
          <View style={styles.curveContainer}>
            <HighlightCurve
              source={slide.curveImage}
              width={slide.curveWidth}
              height={slide.curveHeight}
            />
          </View>
        </View>

        {/* Subtitle / Description */}
        <Text style={styles.descriptionText}>{slide.description}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  bannerContainer: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    backgroundColor: colors.backgroundLight,
  },
  bannerImage: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 36,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  titleText: {
    fontFamily: fonts.headingBlack,
    fontSize: 30,
    fontWeight: '800',
    color: colors.textDark,
    textAlign: 'center',
    lineHeight: 38,
    maxWidth: 330,
  },
  highlightText: {
    fontFamily: fonts.headingBlack,
    color: colors.accent,
    fontWeight: '800',
  },
  curveContainer: {
    alignSelf: 'center',
    marginTop: -2,
  },
  descriptionText: {
    fontFamily: fonts.bodyRegular,
    fontSize: 16,
    color: colors.textSub,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
});
