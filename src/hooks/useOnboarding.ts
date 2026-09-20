import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onboardingStorageKey } from '../constants/onboarding';

export function useOnboarding() {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkOnboardingStatus = useCallback(async () => {
    try {
      const storedValue = await AsyncStorage.getItem(onboardingStorageKey);
      setHasSeenOnboarding(storedValue === 'true');
    } catch (error) {
      console.warn('Failed to retrieve onboarding status from storage:', error);
      setHasSeenOnboarding(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkOnboardingStatus();
  }, [checkOnboardingStatus]);

  const completeOnboarding = useCallback(async () => {
    try {
      await AsyncStorage.setItem(onboardingStorageKey, 'true');
      setHasSeenOnboarding(true);
    } catch (error) {
      console.warn('Failed to save onboarding completion to storage:', error);
    }
  }, []);

  const resetOnboarding = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(onboardingStorageKey);
      setHasSeenOnboarding(false);
    } catch (error) {
      console.warn('Failed to clear onboarding status from storage:', error);
    }
  }, []);

  return {
    hasSeenOnboarding,
    isLoading,
    completeOnboarding,
    resetOnboarding,
  };
}
