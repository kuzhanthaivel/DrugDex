import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
export default function Bookmarks({ route }) {
  const navigation = useNavigation();
  const { username } = route.params;
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await axios.get(`http://192.168.61.82:5001/show-bookmarks/${username}`);
        if (response.status === 200 && response.data.bookmarks) {
          setBookmarks(response.data.bookmarks);  
        } else {
          setError('No bookmarks found.');
        }
      } catch (err) {
        setError('Failed to fetch bookmarks');
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchBookmarks();
  }, [username]);

  if (loading) {
    return (
      
      <View className="flex-1 bg-gray-100 pt-14" >
              {/* Header */}
      <View className="flex-row items-center justify-center py-4">
        <Image source={require('../assets/icon.png')} className="" />
        <Text className="ml-2 text-2xl font-bold text-black">DrugDex</Text>
      </View>

      {/* Illustration */}
      <View className="items-center justify-center pt-14">
        <Image source={require('../assets/coverImage4.png')} className="h-56 w-72" resizeMode="contain" />
      </View>
      <View className="items-center justify-center ">
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
      </View>

    );
  }

  if (error) {
    return (
      <View className="items-center justify-center flex-1">
        <Text className="text-xl text-red-500">{error}</Text>
      </View>
    );
  }

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
        {bookmarks.map((bookmark, index) => (
          <TouchableOpacity
            key={index} // Use index as the key for rendering the list
            onPress={() => navigation.navigate('Result', { username, drugName: bookmark })}
            className="flex-row items-center justify-between h-16 px-6 bg-white rounded-full shadow-md"
          >
            <View className="flex-1">
              <Text className="text-xl font-bold text-black">{bookmark}</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('Home', { username })} className="items-center gap-2">
          <Image source={require('../assets/homeBlack.png')} className="w-6 h-6" />
          <Text className="text-sm text-center text-gray-600">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile', { username })} className="items-center gap-2">
          <Image source={require('../assets/profileBlack.png')} className="w-6 h-6" />
          <Text className="text-sm text-center text-gray-600">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
