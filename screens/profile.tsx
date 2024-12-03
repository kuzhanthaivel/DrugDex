import { View, Text, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Profile({ route}) {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const dummyPassword = '••••••';
  const [email, setEmail] = useState('');
  const { username } = route.params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://drug-dex-server.vercel.app/get-user', {
          params: { username },
        });
        const user = response.data.data;

        setEmail(user.email);
        setPassword(user.password);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to load user details.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return (
      <View className="flex-1 pt-4 bg-gray-100">
              <View className="flex-row items-center justify-center py-4">
        <Image
          source={require('../assets/icon.png')} 
          className=""
        />
        <Text className="ml-2 text-2xl font-bold text-black">DrugDex</Text>
      </View>

  {/* Profile Section */}
  <View className="items-center mt-8">
        <Text className="mb-4 text-3xl font-medium text-black">My Profile</Text>
        <View className="items-center justify-center rounded-full h-28 w-28">
          <Image
            source={require('../assets/profile.png')} // Replace with a user icon
            className="h-28 w-28"
            resizeMode="contain"
          />
        </View>
      </View>
      <View className="items-center justify-center flex-1 bg-gray-100">
        <Text className="text-lg text-gray-700">Loading...</Text>
      </View>
      </View>

    );
  }

  if (error) {
    return (
      <View className="flex-1 pt-4 bg-gray-100" >
              <View className="flex-row items-center justify-center py-4">
        <Image
          source={require('../assets/icon.png')} 
          className=""
        />
        <Text className="ml-2 text-2xl font-bold text-black">DrugDex</Text>
      </View>

  {/* Profile Section */}
  <View className="items-center mt-8">
        <Text className="mb-4 text-3xl font-medium text-black">My Profile</Text>
        <View className="items-center justify-center rounded-full h-28 w-28">
          <Image
            source={require('../assets/profile.png')} // Replace with a user icon
            className="h-28 w-28"
            resizeMode="contain"
          />
        </View>
      </View>
        
      <View className="items-center justify-center flex-1 bg-gray-100">
        <Text className="text-lg text-red-600">{error}</Text>
      </View>
      </View>

    );
  }

  const handleLogout = async () => {
    await AsyncStorage.clear();
    await AsyncStorage.setItem('isLoggedIn', 'false');
    navigation.navigate('Login')
  };
  
  
  return (
    <View className="flex-1 pt-4 bg-gray-100">

      <View className="flex-row items-center justify-center py-4">
        <Image
          source={require('../assets/icon.png')} 
          className=""
        />
        <Text className="ml-2 text-2xl font-bold text-black">DrugDex</Text>
      </View>

  {/* Profile Section */}
  <View className="items-center mt-8">
        <Text className="mb-4 text-3xl font-medium text-black">My Profile</Text>
        <View className="items-center justify-center rounded-full h-28 w-28">
          <Image
            source={require('../assets/profile.png')} // Replace with a user icon
            className="h-28 w-28"
            resizeMode="contain"
          />
        </View>
      </View>


        {/* Profile Details */}
        <View className="p-4 mx-6 mt-8 bg-white rounded-lg shadow-md">
        {/* Name Field */}
        <View className="flex-row items-center justify-between mb-4">
          <View className="gap-1">
            <Text className="text-gray-600">Your Name</Text>
            <Text className="font-medium text-black">{username}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditUsername', { username })}>
            <Text className="text-[#2196F3]">Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Email Field */}
        <View className="flex-row items-center justify-between mb-4">
          <View className="gap-1">
            <Text className="text-gray-600">Email</Text>
            <Text className="font-medium text-black">
              {email}
            </Text>
          </View>

        </View>

        {/* Password Field */}
        <View className="flex-row items-center justify-between">
          <View className="gap-1">
            <Text className="text-gray-600">Password</Text>
            <Text className="font-medium text-black">{dummyPassword}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditPassword', { username, password })}>
            <Text className="text-[#2196F3]">Edit</Text>
          </TouchableOpacity>
        </View>
      </View>


 {/* Logout Button */}
 <View className="items-center mx-6 mt-6">
        <TouchableOpacity onPress={handleLogout}
          className="items-center w-24 py-3 bg-red-500 rounded-lg "
        >
          <Text className="text-lg font-bold text-white">Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View className="absolute bottom-0 flex-row items-center justify-around w-full h-24 pr-6 mb-2 scale-90 bg-gray-200 rounded-3xl">

        <TouchableOpacity
        onPress={() => navigation.navigate('Bookmarks', { username })}
         className="items-center gap-2">
          <Image
            source={require('../assets/bookmarkBlack.png')} 
            className="w-6 h-6"
          />
          <Text className="text-sm text-center text-gray-600">Bookmarks</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={() => navigation.navigate('Home', { username })}
        className="items-center gap-2">
          <Image
            source={require('../assets/homeBlack.png')} 
            className="w-6 h-6"
          />
          <Text className="text-sm text-center text-gray-600">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center gap-2">
          <Image
            source={require('../assets/profileBlue.png')} 
            className="w-6 h-6"
          />
          <Text className="text-sm text-center text-[#2196F3]">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}