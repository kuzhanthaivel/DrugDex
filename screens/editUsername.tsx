import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function EditUsername({ route}) {
  const navigation = useNavigation();
  const { username } = route.params;
  const [newUsername, setNewUsername] = useState('');

  const handleUsernameChange = async () => {
    try {
      const response = await axios.put('https://drug-dex-server.vercel.app/edit-username', {
        currentUsername: username,
        newUsername: newUsername,
      });
      if (response.status === 200) {
        console.log(response.data.message);
        navigation.navigate('Profile', { username: newUsername });
      } else {
        alert(response.data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error updating username:', error);
      alert('Failed to update username. Please try again.');
    }
  };

  return (
    <View className="flex-1 bg-gray-100 pt-14 ">
      {/* Logo and Title */}
      <View className="flex-row items-center justify-center py-4">
        <Image
          source={require('../assets/icon.png')} 
          className=""
        />
        <Text className="ml-2 text-2xl font-bold text-black">DrugDex</Text>
      </View>
      
      <View className="p-4 mx-6 mt-24 bg-white rounded-lg shadow-md">

      <Text className="mb-4 text-lg text-center text-gray-700 pb-14">
        Username: <Text className="font-semibold">{ username }</Text>
      </Text>

      {/* New Username Input */}
      <TextInput
        className="h-12 px-4 mb-4 text-lg bg-white border border-gray-300 rounded-md w-80 "
        placeholder="New Username"
        value={newUsername}
        onChangeText={(text) => setNewUsername(text)}
      />

      {/* Change Username Button */}
      <TouchableOpacity
        className="items-center justify-center h-12 mt-5 bg-blue-600 rounded-md w-80"
        onPress={handleUsernameChange}
      >
        <Text className="text-lg font-semibold text-white">Change Username</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
