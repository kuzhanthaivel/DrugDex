import React, { useState, useEffect } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './screens/home';
import Login from './screens/login';
import Register from './screens/register';
import Result from './screens/result';
import Profile from './screens/profile';
import Bookmarks from './screens/bookmarks';
import EditUsername from './screens/editUsername';
import EditPassword from './screens/editPassword';

const Stack = createStackNavigator();

// Fullscreen splash screen component
const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // Show splash screen for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <StatusBar hidden={true} /> {/* Hide the status bar for the splash screen */}
      <Image 
        source={require('./assets/splash.png')} 
        style={styles.splashImage} 
        resizeMode="cover" // Cover the full screen
      />
    </View>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  const checkLoginStatus = async () => {
    try {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      const storedUsername = await AsyncStorage.getItem('username');
      if (loggedIn === 'true' && storedUsername) {
        setIsLoggedIn(true);
        setUsername(storedUsername);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Failed to fetch login status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Show splash screen first
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  // Show activity indicator while checking login status
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <StatusBar 
        hidden={false} 
        barStyle="dark-content" 
        backgroundColor="#f2f2f2" 
      />

      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName={isLoggedIn ? 'Home' : 'Login'} 
          screenOptions={{ headerShown: false }}>
          {isLoggedIn && (
            <Stack.Screen
              name="Home"
              component={Home}
              initialParams={{ username }} // Pass username as a parameter
            />
          )}

          {!isLoggedIn && (
            <Stack.Screen name="Home" component={Home} />
          )}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Result" component={Result} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Bookmarks" component={Bookmarks} />
          <Stack.Screen name="EditUsername" component={EditUsername} />
          <Stack.Screen name="EditPassword" component={EditPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

// Styles for the splash screen and app
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  splashImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

// Register the main component using the name from app.json
AppRegistry.registerComponent('DrugDex', () => App);

export default App;
