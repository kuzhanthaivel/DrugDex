import React, { useState, useEffect } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry, StyleSheet, Dimensions } from 'react-native';
import Home from './screens/home';

const Stack = createStackNavigator();


const App = () => {
  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};


AppRegistry.registerComponent('MyMoneyMate', () => App);

export default App;
