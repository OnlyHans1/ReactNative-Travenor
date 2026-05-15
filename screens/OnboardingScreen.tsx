import React, { useRef, useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  ViewToken,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  FadeIn,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

import { ONBOARDING_SLIDES } from '@/constants/onboarding';
import { COLORS, SPACING } from '@/constants/design';
import { OnboardingSlide, PaginationDots, OnboardingButton } from '@/components/onboarding';
import { useOnboarding } from '@/hooks/useOnboarding';

const AnimatedFlatList = Animated.createAnimatedComponent(
  FlatList as new () => FlatList<(typeof ONBOARDING_SLIDES)[number]>
);

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { completeOnboarding } = useOnboarding();
  const scrollX = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
    []
  );

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const handleNext = useCallback(() => {
    const nextIndex = activeIndex + 1;
    if (nextIndex < ONBOARDING_SLIDES.length) {
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    } else {
      handleComplete();
    }
  }, [activeIndex]);

  const handleSkip = useCallback(async () => {
    await completeOnboarding();
    router.replace('/(tabs)');
  }, [completeOnboarding]);

  const handleComplete = useCallback(async () => {
    await completeOnboarding();
    router.replace('/(tabs)');
  }, [completeOnboarding]);

  const renderSlide = useCallback(
    ({ item, index }: { item: (typeof ONBOARDING_SLIDES)[number]; index: number }) => (
      <OnboardingSlide slide={item} index={index} />
    ),
    []
  );

  const keyExtractor = useCallback(
    (item: (typeof ONBOARDING_SLIDES)[number]) => item.id,
    []
  );

  const isLastSlide = activeIndex === ONBOARDING_SLIDES.length - 1;
  const buttonLabel = isLastSlide ? 'Get Started' : ONBOARDING_SLIDES[activeIndex].buttonText;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Skip button over the image */}
      <Animated.View
        entering={FadeIn.delay(600).duration(400)}
        style={[styles.skipContainer, { top: insets.top + SPACING.sm }]}
      >
        <OnboardingButton
          label="Skip"
          onPress={handleSkip}
          variant="text"
        />
      </Animated.View>

      {/* Slides */}
      <AnimatedFlatList
        ref={flatListRef as any}
        data={ONBOARDING_SLIDES}
        renderItem={renderSlide}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        decelerationRate="fast"
      />

      {/* Bottom controls */}
      <View
        style={[
          styles.bottomContainer,
          { paddingBottom: insets.bottom > 0 ? insets.bottom : SPACING.lg },
        ]}
      >
        <PaginationDots
          total={ONBOARDING_SLIDES.length}
          scrollX={scrollX}
          pageWidth={width}
        />

        <View style={styles.buttonContainer}>
          <OnboardingButton
            label={buttonLabel}
            onPress={isLastSlide ? handleComplete : handleNext}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  skipContainer: {
    position: 'absolute',
    right: SPACING.lg,
    zIndex: 10,
  },
  bottomContainer: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.md,
  },
  buttonContainer: {
    width: '100%',
  },
});
