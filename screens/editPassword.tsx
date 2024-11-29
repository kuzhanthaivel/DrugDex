import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function EditPassword({ route }) {
  const navigation = useNavigation();
  const { username } = route.params;
  const [newPassword, setNewPassword] = useState('');


  const validateNewPassword = (password) => {

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
    return password.length >= 8 && passwordRegex.test(password);
  };

  const handlePasswordChange = async () => {
    if (!newPassword) {
      Alert.alert('Validation Error', 'Please enter a new password.');
      return;
    }

    // Password validation (e.g., minimum length)
    if (newPassword.length < 8) {
      Alert.alert('Validation Error', 'Password must be at least 8 characters long.');
      return;
    }

    try {
      const response = await axios.put('https://drug-dex-server.vercel.app/edit-password', {
        username,
        newPassword,
      });
      Alert.alert('Success', response.data.message);
      navigation.navigate('Profile', { username });
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Failed to update password.');
      console.error(error);
    }
  };

  return (
    <View className="flex-1 bg-gray-100 pt-14">
      {/* Logo and Title */}
      <View className="flex-row items-center justify-center py-4">
        <Image source={require('../assets/icon.png')} className="w-10 h-10" />
        <Text className="ml-2 text-2xl font-bold text-black">DrugDex</Text>
      </View>

      <View className="p-4 mx-6 mt-24 bg-white rounded-lg shadow-md">
        <Text className="mb-4 text-lg text-center text-gray-700">
          Username: <Text className="font-semibold">{username}</Text>
        </Text>

        {/* New Password Input */}
        <TextInput
          className="h-12 px-4 mb-4 text-lg bg-white border border-gray-300 rounded-md w-80"
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />

        {/* Password Validation Feedback */}
        <Text
          className={`mt-2 text-sm ${
            validateNewPassword(newPassword) ? 'text-green-500' : newPassword.length > 0 ? 'text-red-500' : ''
          }`}
        >
          {newPassword.length === 0
            ? ''
            : validateNewPassword(newPassword)
            ? 'Strong password!'
            : 'Password must be at least 8 characters long and contain a letter, number, and special character.'}
        </Text>

        {/* Change Password Button */}
        <TouchableOpacity
          className="items-center justify-center h-12 mt-5 bg-blue-600 rounded-md w-80"
          onPress={handlePasswordChange}
        >
          <Text className="text-lg font-semibold text-white">Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
