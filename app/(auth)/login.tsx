import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Campos vacíos', 'Por favor ingresa tu correo y contraseña');
      return;
    }

    setLoading(true);
    try {
      // Aquí luego conectaremos con tu API (MongoDB en Vercel)
      const response = await fetch('https://riego-automatizado.vercel.app/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Bienvenido', `Inicio de sesión exitoso: ${data.email}`);
        router.push('/(app)/'); // Redirige a la pantalla principal
      } else {
        Alert.alert('Error', data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      Alert.alert('Error de conexión', 'No se pudo conectar al servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Ingresando...' : 'Ingresar'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#eafaf1',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#43a047',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
