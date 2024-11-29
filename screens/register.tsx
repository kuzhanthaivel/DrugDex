import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/; // At least one letter, one number, and one symbol
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address containing @.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Weak Password',
        'Password must contain at least one letter, one number, and one special character.'
      );
      return;
    }

    if (password !== retypePassword) {
      Alert.alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('https://drug-dex-server.vercel.app/register-user', {
        username: name,
        email,
        password
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Account created successfully');
        navigation.navigate('Login');
      }
    } catch (error) {
      if (error.response) {
        Alert.alert('Error', error.response.data.message);
      } else {
        Alert.alert('Error', 'An error occurred, please try again later.');
      }
    }
  };

  return (
    <ScrollView className="flex-1 px-10 pt-10 bg-gray-100">
      {/* Header */}
      <View className="flex-row items-center justify-center mt-10 mb-8">
        <Image source={require('../assets/icon.png')} className="" />
        <Text className="ml-2 text-2xl font-bold">DrugDex</Text>
      </View>

      {/* Illustration */}
      <View className="flex items-center mb-6">
        <Image source={require('../assets/coverImage2.png')} className="" resizeMode="contain" />
      </View>

      {/* Sign-Up Header */}
      <Text className="mb-6 text-xl font-semibold text-gray-800">Sign Up</Text>

      {/* Name Input */}
      <View className="mb-4">
        <TextInput
          className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg"
          placeholder="NAME"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      {/* Email Input */}
      <View className="mb-4">
        <TextInput
          className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg"
          placeholder="EMAIL ID"
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      {/* Password Input */}
      <View className="mb-4">
        <TextInput
          className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg"
          placeholder="PASSWORD"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      {/* Retype Password Input */}
      <View className="mb-6">
        <TextInput
          className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg"
          placeholder="RETYPE PASSWORD"
          secureTextEntry
          value={retypePassword}
          onChangeText={(text) => setRetypePassword(text)}
        />
      </View>

      {/* Create Account Button */}
      <TouchableOpacity
        className={`w-full h-12 rounded-lg items-center justify-center ${
          name &&
          email &&
          password &&
          retypePassword &&
          validateEmail(email) &&
          validatePassword(password) &&
          password === retypePassword
            ? 'bg-blue-600'
            : 'bg-gray-400'
        }`}
        disabled={
          !name ||
          !email ||
          !password ||
          !retypePassword ||
          !validateEmail(email) ||
          !validatePassword(password) ||
          password !== retypePassword
        }
        onPress={handleRegister}
      >
        <Text className="text-lg font-bold text-white">Create Account</Text>
      </TouchableOpacity>

      {/* Separator */}
      <Text className="my-6 text-center text-gray-500">Or</Text>

      {/* Sign-In Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')} className="">
        <Text className="text-base text-center">
          Already have an account? <Text className="font-semibold text-blue-600">Sign In</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
