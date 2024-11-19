import { View, Text, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function login() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 px-10 pt-10 bg-gray-100">
      {/* Header */}
      <View className="flex-row items-center justify-center mt-10 mb-8">
        <Image
          source={require('../assets/icon.png')} 
          className=""
        />
        <Text className="ml-2 text-2xl font-bold ">DrugDex</Text>
      </View>

      {/* Illustration */}
      <View className="flex items-center mb-6">
        <Image
          source={require('../assets/coverImage1.png')}
          className=""
          resizeMode="contain"
        />
      </View>

      {/* Login Header */}
      <Text className="mb-6 text-xl font-semibold text-gray-800">Log In</Text>

      {/* Username Input */}
      <View className="mb-4">
        <TextInput
          className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg"
          placeholder="USER NAME"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      {/* Password Input */}
      <View className="relative mb-4">
        <TextInput
          className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg"
          placeholder="PASSWORD"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          className="absolute right-3 top-3"
        >
          <Image
            source={
              passwordVisible
                ? require('../assets/Eye.png') 
                : require('../assets/Eye off.png') 
            }
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity className="mb-6">
        <Text className="font-semibold text-right text-blue-600">Forget Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        className={`w-full h-12 rounded-lg items-center justify-center ${
          username && password ? 'bg-blue-600' : 'bg-gray-400'
        }`}
        disabled={!username || !password}
        onPress={() => {
          alert('Logged in!');
          navigation.navigate('Home');
        }}
      >
        <Text className="text-lg font-bold text-white">Login</Text>
      </TouchableOpacity>

      {/* Separator */}
      <Text className="my-6 text-center text-gray-500">Or</Text>

      {/* Sign Up */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text className="text-base text-center">
          Don't have an account?{' '}
          <Text className="font-semibold text-blue-600">Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}