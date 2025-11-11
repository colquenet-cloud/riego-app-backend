import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌱 Sistema de Riego Automático</Text>
      <Text>Bienvenido a tu panel de control</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaf8f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2a7b4f',
    marginBottom: 10,
  },
});
