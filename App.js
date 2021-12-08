import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-rn'
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main';
import Create from './screens/Create';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <View style={tw('h-full')}>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
        <Stack.Screen name="Create Task" component={Create} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>

  );
}
