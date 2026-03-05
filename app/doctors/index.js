import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DoctorsIndex() {
  return (
    <View style={styles.container}>
      <Ionicons name="person" size={80} color="#FF6B6B" />
      <Text style={styles.title}>Doctors</Text>
      <Text style={styles.subtitle}>Find the best doctors near you</Text>
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
