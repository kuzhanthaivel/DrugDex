import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import "../global.css"

export default function Bookmarks({ route }) {
  const navigation = useNavigation();
  const { username } = route.params;

  return (
    <View className="flex-1 pt-4 bg-gray-800">
      <Text className="text-xl text-center text-white">Hello World</Text>
    </View>
  );
}
