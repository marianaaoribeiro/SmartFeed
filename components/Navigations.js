import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './MainScreen';


const Stack = createNativeStackNavigator();

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FEB664', 
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen 
          name="Principal"
          component={MainScreen}
          options={{title: "Smart Feed"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}