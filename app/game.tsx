import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  Alert,
  Animated,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { getQuestionsByCategory, shuffleQuestions, Question } from '../data/questions';

const { width, height } = Dimensions.get('window');

interface Player {
  id: string;
  name: string;
  score: number;
}

interface GameState {
  currentPlayerIndex: number;
  currentQuestionIndex: number;
  questions: Question[];
  players: Player[];
  gameEnded: boolean;
}

export default function GameScreen() {
  const router = useRouter();
  const { level, players: playersParam } = useLocalSearchParams<{ level: string; players: string }>();
  
  const [gameState, setGameState] = useState<GameState>({
    currentPlayerIndex: 0,
    currentQuestionIndex: 0,
    questions: [],
    players: [],
    gameEnded: false,
  });

  const [fadeAnim] = useState(new Animated.Value(1));
  const [scaleAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    if (level && playersParam) {
      const questions = shuffleQuestions(getQuestionsByCategory(level));
      const players = JSON.parse(playersParam) as Player[];
      
      setGameState({
        currentPlayerIndex: 0,
        currentQuestionIndex: 0,
        questions,
        players,
        gameEnded: false,
      });
    }
  }, [level, playersParam]);

  const animateQuestionChange = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  const nextTurn = () => {
    const { currentPlayerIndex, currentQuestionIndex, questions, players } = gameState;
    
    const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
    const nextQuestionIndex = currentQuestionIndex + 1;
    
    if (nextQuestionIndex >= questions.length) {
      // Game ended
      setGameState(prev => ({ ...prev, gameEnded: true }));
      return;
    }

    animateQuestionChange();
    
    setGameState(prev => ({
      ...prev,
      currentPlayerIndex: nextPlayerIndex,
      currentQuestionIndex: nextQuestionIndex,
    }));
  };

  const addPoint = () => {
    const { currentPlayerIndex, players } = gameState;
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].score += 1;
    
    setGameState(prev => ({
      ...prev,
      players: updatedPlayers,
    }));
    
    nextTurn();
  };

  const skipQuestion = () => {
    nextTurn();
  };

  const endGame = () => {
    Alert.alert(
      'End Game',
      'Are you sure you want to end the game early?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'End Game', style: 'destructive', onPress: () => setGameState(prev => ({ ...prev, gameEnded: true })) },
      ]
    );
  };

  const restartGame = () => {
    router.push('/level-selection');
  };

  const getLevelInfo = () => {
    switch (level) {
      case 'icebreakers':
        return { title: '🥶 Icebreakers', color: '#74b9ff' };
      case 'mildly-intrusive':
        return { title: '😏 Mildly Intrusive', color: '#fd79a8' };
      case 'hr-alert':
        return { title: '🔥 HR Alert', color: '#ff7675' };
      default:
        return { title: 'Unknown Level', color: '#667eea' };
    }
  };

  const levelInfo = getLevelInfo();
  const { currentPlayerIndex, currentQuestionIndex, questions, players, gameEnded } = gameState;
  const currentPlayer = players[currentPlayerIndex];
  const currentQuestion = questions[currentQuestionIndex];

  if (gameEnded) {
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    const winner = sortedPlayers[0];
    const isTie = sortedPlayers.length > 1 && sortedPlayers[0].score === sortedPlayers[1].score;

    return (
      <LinearGradient colors={['#667eea', '#764ba2']} style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.gameOverTitle}>Game Over!</Text>
          
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsTitle}>
              {isTie ? "It's a Tie!" : `${winner.name} Wins!`}
            </Text>
            
            <View style={styles.scoresList}>
              {sortedPlayers.map((player, index) => (
                <View key={player.id} style={styles.scoreItem}>
                  <Text style={styles.playerRank}>#{index + 1}</Text>
                  <Text style={styles.playerName}>{player.name}</Text>
                  <Text style={styles.playerScore}>{player.score} pts</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.gameOverButtons}>
            <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
              <Text style={styles.restartButtonText}>Play Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/')}>
              <Text style={styles.homeButtonText}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.endGameButton} onPress={endGame}>
          <Text style={styles.endGameButtonText}>End Game</Text>
        </TouchableOpacity>
        <View style={[styles.levelBadge, { backgroundColor: levelInfo.color }]}>
          <Text style={styles.levelBadgeText}>{levelInfo.title}</Text>
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.playerInfo}>
          <Text style={styles.currentPlayerText}>Current Player:</Text>
          <Text style={styles.currentPlayerName}>{currentPlayer?.name}</Text>
        </View>

        <Animated.View 
          style={[
            styles.questionContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            }
          ]}
        >
          <Text style={styles.questionText}>{currentQuestion?.text}</Text>
        </Animated.View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.skipButton} onPress={skipQuestion}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerButton} onPress={addPoint}>
            <Text style={styles.answerButtonText}>Answered!</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.scoreboard}>
        <Text style={styles.scoreboardTitle}>Scores</Text>
        <View style={styles.scoresContainer}>
          {players.map((player) => (
            <View key={player.id} style={styles.scoreItem}>
              <Text style={styles.scorePlayerName}>{player.name}</Text>
              <Text style={styles.scoreValue}>{player.score}</Text>
            </View>
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
  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'web' ? 60 : 40,
    paddingBottom: 20,
  },
  endGameButton: {
    position: 'absolute',
    top: Platform.OS === 'web' ? 60 : 40,
    right: 20,
    zIndex: 1,
  },
  endGameButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  levelBadge: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 10,
  },
  levelBadgeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressText: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  playerInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  currentPlayerText: {
    color: '#ffffff',
    fontSize: 18,
    opacity: 0.8,
  },
  currentPlayerName: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5,
  },
  questionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 30,
    borderRadius: 20,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  questionText: {
    fontSize: width > 768 ? 24 : 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    lineHeight: 32,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20,
  },
  skipButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  skipButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  answerButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
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
  answerButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreboard: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  scoreboardTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  scoresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 10,
  },
  scoreItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    alignItems: 'center',
    minWidth: 80,
  },
  scorePlayerName: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
  },
  scoreValue: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameOverTitle: {
    fontSize: width > 768 ? 48 : 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 40,
  },
  resultsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 30,
    borderRadius: 20,
    marginBottom: 40,
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  scoresList: {
    gap: 15,
  },
  playerRank: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  playerScore: {
    color: '#ffffff',
    fontSize: 16,
    opacity: 0.8,
  },
  gameOverButtons: {
    flexDirection: 'row',
    gap: 20,
  },
  restartButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    flex: 1,
  },
  restartButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    flex: 1,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  homeButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 