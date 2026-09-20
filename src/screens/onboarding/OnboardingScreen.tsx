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

import { onboardingSlides } from '../../constants/onboarding';
import { colors } from '../../constants/colors';
import {
  OnboardingSlide,
  PaginationDots,
  OnboardingButton,
} from '../../components/onboarding';
import { useOnboarding } from '../../hooks/useOnboarding';
import { OnboardingSlideItem } from '../../types/onboarding';

const AnimatedFlatList = Animated.createAnimatedComponent(
  FlatList as new () => FlatList<OnboardingSlideItem>
);

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { completeOnboarding } = useOnboarding();

  const scrollX = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList<OnboardingSlideItem>>(null);

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
    if (nextIndex < onboardingSlides.length) {
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

  const renderSlideItem = useCallback(
    ({ item, index }: { item: OnboardingSlideItem; index: number }) => (
      <OnboardingSlide slide={item} index={index} />
    ),
    []
  );

  const keyExtractor = useCallback(
    (item: OnboardingSlideItem) => item.id,
    []
  );

  const isLastSlide = activeIndex === onboardingSlides.length - 1;
  const currentButtonLabel = onboardingSlides[activeIndex]?.buttonText || 'Next';

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Floating Skip Button (Top Right over banner) */}
      <Animated.View
        entering={FadeIn.delay(300).duration(400)}
        style={[
          styles.skipButtonContainer,
          { top: Math.max(insets.top + 10, 24) },
        ]}
      >
        <OnboardingButton
          label="Skip"
          onPress={handleSkip}
          variant="skip"
        />
      </Animated.View>

      {/* Horizontal Carousel Slides */}
      <AnimatedFlatList
        ref={flatListRef as any}
        data={onboardingSlides}
        renderItem={renderSlideItem}
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

      {/* Bottom Controls (Pagination Dots + Action Button) */}
      <View
        style={[
          styles.bottomControlsContainer,
          { paddingBottom: Math.max(insets.bottom + 16, 28) },
        ]}
      >
        <PaginationDots
          total={onboardingSlides.length}
          scrollX={scrollX}
          pageWidth={width}
        />

        <View style={styles.actionButtonContainer}>
          <OnboardingButton
            label={currentButtonLabel}
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
    backgroundColor: colors.white,
  },
  skipButtonContainer: {
    position: 'absolute',
    right: 24,
    zIndex: 20,
  },
  bottomControlsContainer: {
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  actionButtonContainer: {
    width: '100%',
  },
});
