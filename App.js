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
import EditUsername from './screens/editUsername';
import EditPassword from './screens/editPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';


const Stack = createStackNavigator();

const App = () => {


  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [username, setUsername] = useState('');

  const checkLoginStatus = async () => {
    try {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      const storedUsername = await AsyncStorage.getItem('username');
      if (loggedIn === 'true' && storedUsername) {
        setIsLoggedIn(true);
        setUsername(storedUsername); // Save username in state
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Failed to fetch login status:', error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);




  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Bookmarks" component={Bookmarks} />
      <Stack.Screen name="EditUsername" component={EditUsername} />
      <Stack.Screen name="EditPassword" component={EditPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Register the main component using the name from app.json
AppRegistry.registerComponent('DrugDex', () => App);
export default App;
