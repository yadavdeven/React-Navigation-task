import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from './navigation/BottomTab'

const Stack = createNativeStackNavigator()

function App() {
  return (
     <NavigationContainer>
     <BottomTab/>
      </NavigationContainer>
  );
}

export default App;
