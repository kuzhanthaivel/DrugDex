import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import Home from './screens/home';
import Login from './screens/login';
import Register from './screens/register';
import Result from './screens/result';
import Profile from './screens/profile';
import Bookmarks from './screens/bookmarks';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bookmarks" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Bookmarks" component={Bookmarks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Register the main component using the name from app.json
AppRegistry.registerComponent('DrugDex', () => App);
export default App;
