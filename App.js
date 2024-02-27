import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './pages/Main'; 
import GarotoScreen from './pages/GarotoScreen';
import MilkaScreen from './pages/MilkaScreen';
import HersheysScreen from './pages/HersheysScreen';
import NestleScreen from './pages/NestleScreen';
import FerreroRocherScreen from './pages/FerreroRocherScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Garoto" component={GarotoScreen} />
        <Stack.Screen name="Milka" component={MilkaScreen} />
        <Stack.Screen name="Hersheys" component={HersheysScreen} />
        <Stack.Screen name="Nestle" component={NestleScreen} />
        <Stack.Screen name="FerreroRocher" component={FerreroRocherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
