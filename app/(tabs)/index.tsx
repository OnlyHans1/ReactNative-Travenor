import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { COLORS, SPACING, FONT_SIZE } from '@/constants/design';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + SPACING.lg }]}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Explorer! 👋</Text>
        <Text style={styles.subtitle}>Where do you want to go?</Text>
      </View>

      <View style={styles.placeholder}>
        <Text style={styles.emoji}>🌍</Text>
        <Text style={styles.placeholderTitle}>Travenor</Text>
        <Text style={styles.placeholderText}>
          Your travel dashboard is coming soon.{'\n'}
          Start exploring the world!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.lg,
  },
  header: {
    marginBottom: SPACING.xl,
  },
  greeting: {
    fontSize: FONT_SIZE.xxl,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray400,
    fontWeight: '500',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  emoji: {
    fontSize: 64,
    marginBottom: SPACING.lg,
  },
  placeholderTitle: {
    fontSize: FONT_SIZE.xl,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },
  placeholderText: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray400,
    textAlign: 'center',
    lineHeight: 22,
  },
});
