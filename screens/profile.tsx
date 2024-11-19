import { View, Text, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Bookmarks() {
  const navigation = useNavigation();
  
  return (
    <View className="flex-1 bg-gray-100 pt-14">

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
            <Text className="font-medium text-black">Kuzhanthaivelu</Text>
          </View>
          <TouchableOpacity >
            <Text className="text-blue-500">Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Email Field */}
        <View className="flex-row items-center justify-between mb-4">
          <View className="gap-1">
            <Text className="text-gray-600">Email</Text>
            <Text className="font-medium text-black">
              kuzhanthaivel272@gmail.com
            </Text>
          </View>

        </View>

        {/* Password Field */}
        <View className="flex-row items-center justify-between">
          <View className="gap-1">
            <Text className="text-gray-600">Password</Text>
            <Text className="font-medium text-black">••••••</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-blue-500">Edit</Text>
          </TouchableOpacity>
        </View>
      </View>


 {/* Logout Button */}
 <View className="items-center mx-6 mt-6">
        <TouchableOpacity
          className="items-center w-24 py-3 bg-red-500 rounded-lg "
        >
          <Text className="text-lg font-bold text-white">Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View className="absolute bottom-0 flex-row items-center justify-around w-full h-24 py-2 bg-gray-200">

        <TouchableOpacity
        onPress={() => navigation.navigate('Bookmarks')}
         className="items-center gap-2">
          <Image
            source={require('../assets/bookmarkBlack.png')} 
            className="w-6 h-6"
          />
          <Text className="text-sm text-center text-gray-600">Bookmarks</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}
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
          <Text className="text-sm text-center text-blue-500">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}