import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

interface Player {
  id: string;
  name: string;
  score: number;
}

export default function PlayerSetupScreen() {
  const router = useRouter();
  const { level } = useLocalSearchParams<{ level: string }>();
  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: '', score: 0 },
    { id: '2', name: '', score: 0 },
  ]);
  const [newPlayerName, setNewPlayerName] = useState('');

  const addPlayer = () => {
    if (newPlayerName.trim()) {
      const newPlayer: Player = {
        id: Date.now().toString(),
        name: newPlayerName.trim(),
        score: 0,
      };
      setPlayers([...players, newPlayer]);
      setNewPlayerName('');
    }
  };

  const removePlayer = (id: string) => {
    if (players.length > 2) {
      setPlayers(players.filter(player => player.id !== id));
    } else {
      Alert.alert('Minimum Players', 'You need at least 2 players to play the game.');
    }
  };

  const updatePlayerName = (id: string, name: string) => {
    setPlayers(players.map(player => 
      player.id === id ? { ...player, name } : player
    ));
  };

  const startGame = () => {
    const validPlayers = players.filter(player => player.name.trim());
    if (validPlayers.length < 2) {
      Alert.alert('Not Enough Players', 'Please add at least 2 players to start the game.');
      return;
    }

    if (validPlayers.length !== players.length) {
      Alert.alert('Empty Names', 'Please fill in all player names.');
      return;
    }

    router.push({
      pathname: '/game',
      params: { 
        level,
        players: JSON.stringify(validPlayers),
      },
    });
  };

  const handleBack = () => {
    router.back();
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

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Player Setup</Text>
          <View style={[styles.levelBadge, { backgroundColor: levelInfo.color }]}>
            <Text style={styles.levelBadgeText}>{levelInfo.title}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Add Players</Text>
          <Text style={styles.sectionSubtitle}>Enter player names to get started</Text>

          <View style={styles.addPlayerSection}>
            <TextInput
              style={styles.nameInput}
              placeholder="Enter player name..."
              placeholderTextColor="#999"
              value={newPlayerName}
              onChangeText={setNewPlayerName}
              onSubmitEditing={addPlayer}
            />
            <TouchableOpacity style={styles.addButton} onPress={addPlayer}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.playersList}>
            {players.map((player, index) => (
              <View key={player.id} style={styles.playerItem}>
                <TextInput
                  style={styles.playerNameInput}
                  placeholder={`Player ${index + 1}`}
                  placeholderTextColor="#999"
                  value={player.name}
                  onChangeText={(name) => updatePlayerName(player.id, name)}
                />
                {players.length > 2 && (
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removePlayer(player.id)}
                  >
                    <Text style={styles.removeButtonText}>×</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>

          <View style={styles.gameInfo}>
            <Text style={styles.gameInfoTitle}>Game Rules:</Text>
            <Text style={styles.gameInfoText}>• Players take turns answering questions</Text>
            <Text style={styles.gameInfoText}>• Each player gets points for honest answers</Text>
            <Text style={styles.gameInfoText}>• The player with the most points wins!</Text>
          </View>

          <TouchableOpacity
            style={styles.startButton}
            onPress={startGame}
            activeOpacity={0.8}
          >
            <Text style={styles.startButtonText}>Start Game</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'web' ? 60 : 40,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
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
    marginBottom: 15,
  },
  levelBadge: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  levelBadgeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.8,
    marginBottom: 25,
  },
  addPlayerSection: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },
  nameInput: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playersList: {
    gap: 10,
    marginBottom: 30,
  },
  playerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  playerNameInput: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    backgroundColor: '#f44336',
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gameInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  gameInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  gameInfoText: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
    marginBottom: 5,
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
    textAlign: 'center',
  },
}); 