import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PharmacyIndex() {
  return (
    <View style={styles.container}>
      <Ionicons name="medical" size={80} color="#4ECDC4" />
      <Text style={styles.title}>Pharmacy</Text>
      <Text style={styles.subtitle}>Order medicines online</Text>
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
