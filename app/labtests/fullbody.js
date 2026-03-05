import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FullBody() {
  return (
    <View style={styles.container}>
      <Ionicons name="body" size={80} color="#9B59B6" />
      <Text style={styles.title}>Full Body Checkup</Text>
      <Text style={styles.subtitle}>Comprehensive health screening</Text>
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
