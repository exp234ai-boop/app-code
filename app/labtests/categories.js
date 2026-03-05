import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LabCategories() {
  return (
    <View style={styles.container}>
      <Ionicons name="grid" size={80} color="#9B59B6" />
      <Text style={styles.title}>Test Categories</Text>
      <Text style={styles.subtitle}>Browse by test type</Text>
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
