import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/colors';
import { spacing, fontSize, borderRadius, fonts } from '@/constants/design';

const EXPLORE_CATEGORIES = [
  { emoji: '🏖️', label: 'Beach', color: '#E3F2FD' },
  { emoji: '🏔️', label: 'Mountain', color: '#E8F5E9' },
  { emoji: '🏙️', label: 'City', color: '#FFF3E0' },
  { emoji: '🌲', label: 'Forest', color: '#F1F8E9' },
  { emoji: '🏜️', label: 'Desert', color: '#FBE9E7' },
  { emoji: '❄️', label: 'Snow', color: '#E0F7FA' },
];

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top + spacing.lg }]}
      contentContainerStyle={styles.content}
    >
      <StatusBar style="dark" />
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.subtitle}>Find your perfect destination</Text>

      <View style={styles.grid}>
        {EXPLORE_CATEGORIES.map((cat) => (
          <View
            key={cat.label}
            style={[styles.card, { backgroundColor: cat.color }]}
          >
            <Text style={styles.cardEmoji}>{cat.emoji}</Text>
            <Text style={styles.cardLabel}>{cat.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
  },
  content: {
    paddingBottom: spacing.xxl,
  },
  title: {
    fontFamily: fonts.headingBlack,
    fontSize: fontSize.xxl,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontFamily: fonts.bodyMedium,
    fontSize: fontSize.md,
    color: colors.textSub,
    fontWeight: '500',
    marginBottom: spacing.xl,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  card: {
    width: '47%',
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    gap: spacing.sm,
  },
  cardEmoji: {
    fontSize: 36,
  },
  cardLabel: {
    fontFamily: fonts.buttonSemiBold,
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.primary,
  },
});
