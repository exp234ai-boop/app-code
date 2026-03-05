import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Topup() {
  return (
    <View style={styles.container}>
      <Ionicons name="add-circle" size={80} color="#3498DB" />
      <Text style={styles.title}>Top-up Plans</Text>
      <Text style={styles.subtitle}>Increase your coverage</Text>
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
