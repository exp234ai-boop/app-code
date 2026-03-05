import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Ionicons name="compass" size={80} color="#3498DB" />
      <Text style={styles.title}>Explore Plans</Text>
      <Text style={styles.subtitle}>Discover insurance options</Text>
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
