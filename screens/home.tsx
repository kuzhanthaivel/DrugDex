import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
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

      {/* Illustration */}
      <View className="items-center justify-center pt-14">
        <Image
          source={require('../assets/coverImage3.png')} 
          className="h-56 w-72"
          resizeMode="contain"
        />
      </View>

      {/* Subtitle */}
      <Text className="mb-4 text-xl font-semibold text-center text-gray-700 pb-14">
        Search to learn about your drug!!
      </Text>

      {/* Search Bar */}
      <View className="flex-row items-center justify-center h-16 mx-6 bg-white rounded-full shadow-md">
        <TouchableOpacity className="px-4">
          <Image
            source={require('../assets/camera.png')} 
            className=""
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search for .."
          className="flex-1 px-4 py-2 text-gray-700"
        />
        <TouchableOpacity onPress={() => navigation.navigate('Result')} className="px-4">
          <Image
            source={require('../assets/send.png')} 
          />
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View className="absolute bottom-0 flex-row items-center justify-around w-full h-24 py-2 bg-gray-100">

        <TouchableOpacity onPress={() => navigation.navigate('Bookmarks')} className="items-center gap-2">
          <Image
            source={require('../assets/bookmarkBlack.png')} 
            className="w-6 h-6"
          />
          <Text className="text-sm text-center text-gray-600">Bookmarks</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center gap-2">
          <Image
            source={require('../assets/homeBlue.png')} 
            className="w-6 h-6"
          />
          <Text className="text-sm text-center text-blue-500">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')} className="items-center gap-2">
          <Image
            source={require('../assets/profileBlack.png')} 
            className="w-6 h-6"
          />
          <Text className="text-sm text-center text-gray-600">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
