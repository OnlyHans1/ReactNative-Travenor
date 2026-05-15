import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { COLORS, SPACING, FONT_SIZE, BORDER_RADIUS } from '@/constants/design';

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
      style={[styles.container, { paddingTop: insets.top + SPACING.lg }]}
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
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.lg,
  },
  content: {
    paddingBottom: SPACING.xxl,
  },
  title: {
    fontSize: FONT_SIZE.xxl,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray400,
    fontWeight: '500',
    marginBottom: SPACING.xl,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  card: {
    width: '47%',
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    gap: SPACING.sm,
  },
  cardEmoji: {
    fontSize: 36,
  },
  cardLabel: {
    fontSize: FONT_SIZE.md,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
