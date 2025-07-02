import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const levels = [
  {
    id: 'icebreakers',
    title: '🥶 Icebreakers',
    subtitle: 'Who Are You Again?',
    description: 'Perfect for strangers and new coworkers. Safe, friendly questions to get to know each other.',
    gradient: ['#74b9ff', '#0984e3'],
    questions: 20,
  },
  {
    id: 'mildly-intrusive',
    title: '😏 Mildly Intrusive',
    subtitle: 'We Work Together Too Much',
    description: 'For friends who work together too much. Slightly more personal but still workplace appropriate.',
    gradient: ['#fd79a8', '#e84393'],
    questions: 25,
  },
  {
    id: 'hr-alert',
    title: '🔥 HR Alert',
    subtitle: 'HR Might Hear About This',
    description: 'Unfiltered, emotionally spicy questions. Play at your own risk!',
    gradient: ['#ff7675', '#d63031'],
    questions: 30,
  },
];

export default function LevelSelectionScreen() {
  const router = useRouter();

  const handleLevelSelect = (levelId: string) => {
    router.push({
      pathname: '/player-setup',
      params: { level: levelId },
    });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Choose Your Level</Text>
          <Text style={styles.subtitle}>How spicy do you want to get?</Text>
        </View>

        <View style={styles.levelsContainer}>
          {levels.map((level) => (
            <TouchableOpacity
              key={level.id}
              style={styles.levelCard}
              onPress={() => handleLevelSelect(level.id)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={level.gradient}
                style={styles.levelGradient}
              >
                <View style={styles.levelContent}>
                  <Text style={styles.levelTitle}>{level.title}</Text>
                  <Text style={styles.levelSubtitle}>{level.subtitle}</Text>
                  <Text style={styles.levelDescription}>{level.description}</Text>
                  <View style={styles.levelMeta}>
                    <Text style={styles.questionCount}>{level.questions} questions</Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'web' ? 60 : 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: 10,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: width > 768 ? 36 : 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
    textAlign: 'center',
  },
  levelsContainer: {
    flex: 1,
    gap: 20,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  levelCard: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  levelGradient: {
    padding: 20,
  },
  levelContent: {
    gap: 8,
  },
  levelTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  levelSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    opacity: 0.9,
  },
  levelDescription: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
    lineHeight: 20,
  },
  levelMeta: {
    marginTop: 10,
  },
  questionCount: {
    fontSize: 12,
    color: '#ffffff',
    opacity: 0.7,
    fontWeight: '500',
  },
}); 