import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OnlineConsultation() {
  return (
    <View style={styles.container}>
      <Ionicons name="videocam" size={80} color="#FF6B6B" />
      <Text style={styles.title}>Online Consultation</Text>
      <Text style={styles.subtitle}>Video consultations with doctors</Text>
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
