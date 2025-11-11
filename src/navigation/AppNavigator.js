import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/DashboardScreen";
import HistoryScreen from "../screens/HistoryScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{ title: "Panel principal" }} 
      />
      <Stack.Screen 
        name="History" 
        component={HistoryScreen} 
        options={{ title: "Historial de datos" }} 
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ title: "Configuración" }} 
      />
    </Stack.Navigator>
  );
}
