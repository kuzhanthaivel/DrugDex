import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Bookmarks() {
  const navigation = useNavigation();
  
  const [bookmarks, setBookmarks] = useState([
    { id: 1, name: "Dolo 650" },
    { id: 2, name: "Crocin 650" },
    { id: 3, name: "Calpol 650" },
    { id: 4, name: "Metacin 650" },
    { id: 5, name: "Pyrigesic 650" }
  ]);

  return (
    <View className="flex-1 bg-gray-100 pt-14">
      {/* Header */}
      <View className="flex-row items-center justify-center py-4">
        <Image source={require('../assets/icon.png')} className="" />
        <Text className="ml-2 text-2xl font-bold text-black">DrugDex</Text>
      </View>

      {/* Illustration */}
      <View className="items-center justify-center pt-14">
        <Image source={require('../assets/coverImage4.png')} className="h-56 w-72" resizeMode="contain" />
      </View>

      {/* Bookmarked Drugs List */}
      <ScrollView showsVerticalScrollIndicator={false} className="gap-2 mx-6">
        {bookmarks.map((bookmark) => (
          <TouchableOpacity key={bookmark.id} onPress={() => navigation.navigate('Result')} className="flex-row items-center justify-between h-16 px-6 bg-white rounded-full shadow-md">
            <View className="flex-1">
              <Text className="text-xl font-bold text-black">{bookmark.name}</Text>
            </View>
            {/* Like and Share Buttons */}
            <View className="flex-row items-center">
              <TouchableOpacity className="pl-4">
                <Image source={require('../assets/likeRed.png')} className="h-6 w-7" />
              </TouchableOpacity>
              <TouchableOpacity className="pl-4">
                <Image source={require('../assets/share.png')} className="" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer Navigation */}
      <View className="absolute bottom-0 flex-row items-center justify-around w-full h-24 py-2 bg-gray-100">
        <TouchableOpacity className="items-center gap-2">
          <Image source={require('../assets/bookmarkBlue.png')} className="w-6 h-6" />
          <Text className="text-sm text-center text-[#2196F3]">Bookmarks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} className="items-center gap-2">
          <Image source={require('../assets/homeBlack.png')} className="w-6 h-6" />
          <Text className="text-sm text-center text-gray-600">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} className="items-center gap-2">
          <Image source={require('../assets/profileBlack.png')} className="w-6 h-6" />
          <Text className="text-sm text-center text-gray-600">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
