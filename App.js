import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomePage} from "./Screens/HomePage";
import {Details} from "./Screens/Details";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="Home" component={HomePage}/>
      <Stack.Screen   name="DOGS!!!" component={Details} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
