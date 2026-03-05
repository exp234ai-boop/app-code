import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Ontime() {
  return (
    <View style={styles.container}>
      <Ionicons name="time" size={80} color="#FF6B6B" />
      <Text style={styles.title}>On-Time Appointments</Text>
      <Text style={styles.subtitle}>Schedule timely visits</Text>
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
