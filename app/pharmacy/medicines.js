import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Medicines() {
  return (
    <View style={styles.container}>
      <Ionicons name="medkit" size={80} color="#4ECDC4" />
      <Text style={styles.title}>Medicines</Text>
      <Text style={styles.subtitle}>Browse all medicines</Text>
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
