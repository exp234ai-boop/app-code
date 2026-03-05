import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DoctorAssistant() {
  return (
    <View style={styles.container}>
      <Ionicons name="chatbubbles" size={80} color="#FF6B6B" />
      <Text style={styles.title}>Doctor Assistant</Text>
      <Text style={styles.subtitle}>AI-powered health assistant</Text>
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
