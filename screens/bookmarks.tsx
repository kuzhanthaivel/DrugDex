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

      {/* Illustration */}
      <View className="items-center justify-center pt-14">
        <Image
          source={require('../assets/coverImage4.png')} 
          className="h-56 w-72"
          resizeMode="contain"
        />
      </View>

     <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} className="gap-2 mx-6">
     <TouchableOpacity onPress={() => navigation.navigate('Result')} className="flex-row items-center justify-between h-16 px-6 bg-white rounded-full shadow-md">
     <View className="flex-1">
        <Text className="text-xl font-bold text-black">Dolo 650</Text>
      </View>

      {/* Like and Share Buttons */}
      <View className="flex-row items-center">

        <TouchableOpacity className="pl-4" >
          <Image source={require('../assets/likeRed.png')}
            className="h-6 w-7"
          />
        </TouchableOpacity>

        <TouchableOpacity className="pl-4">
          <Image
            source={require('../assets/share.png')}
            className=""
          />
        </TouchableOpacity>
      </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('Result')} className="flex-row items-center justify-between h-16 px-6 bg-white rounded-full shadow-md">
     <View className="flex-1">
        <Text className="text-xl font-bold text-black">Crocin 650</Text>
      </View>

      {/* Like and Share Buttons */}
      <View className="flex-row items-center">

        <TouchableOpacity className="pl-4" >
          <Image source={require('../assets/likeRed.png')}
            className="h-6 w-7"
          />
        </TouchableOpacity>

        <TouchableOpacity className="pl-4">
          <Image
            source={require('../assets/share.png')}
            className=""
          />
        </TouchableOpacity>
      </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('Result')} className="flex-row items-center justify-between h-16 px-6 bg-white rounded-full shadow-md">
     <View className="flex-1">
        <Text className="text-xl font-bold text-black">Calpol 650</Text>
      </View>

      {/* Like and Share Buttons */}
      <View className="flex-row items-center">

        <TouchableOpacity className="pl-4" >
          <Image source={require('../assets/likeRed.png')}
            className="h-6 w-7"
          />
        </TouchableOpacity>

        <TouchableOpacity className="pl-4">
          <Image
            source={require('../assets/share.png')}
            className=""
          />
        </TouchableOpacity>
      </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('Result')} className="flex-row items-center justify-between h-16 px-6 bg-white rounded-full shadow-md">
     <View className="flex-1">
        <Text className="text-xl font-bold text-black">Metacin 650</Text>
      </View>

      {/* Like and Share Buttons */}
      <View className="flex-row items-center">

        <TouchableOpacity className="pl-4" >
          <Image source={require('../assets/likeRed.png')}
            className="h-6 w-7"
          />
        </TouchableOpacity>

        <TouchableOpacity className="pl-4">
          <Image
            source={require('../assets/share.png')}
            className=""
          />
        </TouchableOpacity>
      </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('Result')} className="flex-row items-center justify-between h-16 px-6 bg-white rounded-full shadow-md">
     <View className="flex-1">
        <Text className="text-xl font-bold text-black">Pyrigesic 650</Text>
      </View>

      {/* Like and Share Buttons */}
      <View className="flex-row items-center">

        <TouchableOpacity className="pl-4" >
          <Image source={require('../assets/likeRed.png')}
            className="h-6 w-7"
          />
        </TouchableOpacity>

        <TouchableOpacity className="pl-4">
          <Image
            source={require('../assets/share.png')}
            className=""
          />
        </TouchableOpacity>
      </View>
     </TouchableOpacity>
     </ScrollView>
     


      {/* Footer Navigation */}
      <View className="absolute bottom-0 flex-row items-center justify-around w-full h-24 py-2 bg-gray-100">

        <TouchableOpacity className="items-center gap-2">
          <Image
            source={require('../assets/bookmarkBlue.png')} 
            className="w-6 h-6"
          />
          <Text className="text-sm text-center text-blue-500">Bookmarks</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Home')} className="items-center gap-2">
          <Image
            source={require('../assets/homeBlack.png')} 
            className="w-6 h-6"
          />
          <Text className="text-sm text-center text-gray-600">Home</Text>
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
  )
}