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

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  const handleStartGame = () => {
    router.push('/level-selection');
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Who Are You Again?</Text>
          <Text style={styles.subtitle}>The Ultimate Party Game</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Break the ice, share laughs, and discover new things about your friends and colleagues with our three levels of questions:
          </Text>
          
          <View style={styles.levelPreview}>
            <View style={styles.levelItem}>
              <Text style={styles.levelTitle}>🥶 Icebreakers</Text>
              <Text style={styles.levelDesc}>Perfect for strangers and new coworkers</Text>
            </View>
            
            <View style={styles.levelItem}>
              <Text style={styles.levelTitle}>😏 Mildly Intrusive</Text>
              <Text style={styles.levelDesc}>For friends who work together too much</Text>
            </View>
            
            <View style={styles.levelItem}>
              <Text style={styles.levelTitle}>🔥 HR Alert</Text>
              <Text style={styles.levelDesc}>Unfiltered questions that might raise eyebrows</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStartGame}
          activeOpacity={0.8}
        >
          <Text style={styles.startButtonText}>Start Game</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'web' ? 60 : 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: width > 768 ? 48 : 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: width > 768 ? 20 : 18,
    color: '#ffffff',
    opacity: 0.9,
    textAlign: 'center',
  },
  descriptionContainer: {
    maxWidth: 600,
    marginBottom: 40,
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  levelPreview: {
    gap: 15,
  },
  levelItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  levelDesc: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
  },
  startButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#667eea',
  },
}); 