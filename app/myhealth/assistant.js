import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HealthAssistant() {
  return (
    <View style={styles.container}>
      <Ionicons name="chatbubbles" size={80} color="#E74C3C" />
      <Text style={styles.title}>Health Assistant</Text>
      <Text style={styles.subtitle}>AI health companion</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
});
