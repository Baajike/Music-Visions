import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home Screen',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTintColor: '#333',
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Details Screen',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTintColor: '#333',
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login Screen',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTintColor: '#333',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings Screen',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTintColor: '#333',
        }}
      />
    </Stack.Navigator>
  );
}