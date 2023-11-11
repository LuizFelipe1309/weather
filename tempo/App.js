import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './src/login/Login'
import Principal from './src/principal/Principal'

const Stack = createNativeStackNavigator()
export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="logar"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Principal'
          component={Principal}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
