import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌱 Sistema de Riego Automático</Text>
      <Text style={styles.subtitle}>Panel de control móvil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ee',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#4a4a4a',
  },
});
