import React from "react";
import { View, Text, Button } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>🌿 Panel Principal</Text>
      <Button title="Ver historial" onPress={() => navigation.navigate("History")} />
      <Button title="Configuración" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
}
