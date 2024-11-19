import { View, Text, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function result() {
  
  const navigation = useNavigation();
  const [descriptionIsExpanded, setDescriptionIsExpanded] = useState(false);
  const [usesIsExpanded, setUsesIsExpanded] = useState(false);
  const [indicationsIsExpanded, setIndicationsIsExpanded] = useState(false);
  const [sideEffectsIsExpanded, setSideEffectsIsExpanded] = useState(false);
  const [warningsIsExpanded, setWarningsIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  

  const toggleLike = () => {
    setLiked(!liked);
  };
  
  const toggleExpand = () => {
    setDescriptionIsExpanded(!descriptionIsExpanded);
  };
 
  const toggleUsesExpand = () => {
    setUsesIsExpanded(!usesIsExpanded);
  };
  
  const toggleIndicationsExpand = () => {
    setIndicationsIsExpanded(!indicationsIsExpanded);
  };
  
  const toggleSideEffectsExpand = () => {
    setSideEffectsIsExpanded(!sideEffectsIsExpanded);
  };
  
  const toggleWarningsExpand = () => {
    setWarningsIsExpanded(!warningsIsExpanded);
  };
  
  return (
<View className="flex-1 bg-gray-100 pt-14">
<View className="flex-row items-center px-5 mx-3 my-4 bg-white rounded-lg shadow-md h-14">

      <TouchableOpacity
        onPress={() =>
          navigation.canGoBack()
            ? navigation.goBack()
            : console.log('No screen to go back to')
        }
        className="pr-4"
      >
        <Image
          source={require('../assets/arrow_back.png')}
          className=""
        />
      </TouchableOpacity>

      {/* Title */}
      <View className="flex-1">
        <Text className="text-xl font-bold text-black">Dolo 650</Text>
      </View>

      {/* Like and Share Buttons */}
      <View className="flex-row items-center">
        {/* Like Button */}
        <TouchableOpacity className="pl-4" onPress={toggleLike}>
          <Image
            source={
              liked
                ? require('../assets/likeRed.png')
                : require('../assets/likeBlack.png')
            }
            className="h-6 w-7"
          />
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity className="pl-4">
          <Image
            source={require('../assets/share.png')}
            className=""
          />
        </TouchableOpacity>
      </View>
    </View>

      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View className="flex items-center justify-center p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
         <Image  source={require('../assets/demo.png')} />
      </View>
        
        {/* Description Section */}
      <View className="p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold">Description</Text>
          <TouchableOpacity onPress={toggleExpand}>
            <Image
              source={
                descriptionIsExpanded
                  ? require('../assets/uparrow.png') // Replace with your "up arrow" image
                  : require('../assets/downArrow.png') // Replace with your "down arrow" image
              }
              className=""
            />
          </TouchableOpacity>
        </View>
        {/* Expanded Content */}
        {descriptionIsExpanded && (
          <View className="mt-4">
            <Text className="text-sm text-gray-700">
              Dolo 650 is a commonly used medication that provides relief from pain and fever. It contains the active
              ingredient paracetamol, also known as acetaminophen. Paracetamol is widely used for its analgesic (pain-relieving)
              and antipyretic (fever-reducing) properties. It is available in tablet form and can be easily purchased
              over the counter. Research shows DOLO 650 was one of the highest sought-after medicines in India during Covid.
            </Text>
          </View>
        )}
      </View>
        
        {/* Uses Section */}
      <View className="p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold">Uses</Text>
          <TouchableOpacity onPress={toggleUsesExpand}>
            <Image
              source={
                usesIsExpanded
                  ? require('../assets/uparrow.png') // Replace with your "up arrow" image
                  : require('../assets/downArrow.png') // Replace with your "down arrow" image
              }
              className=""
            />
          </TouchableOpacity>
        </View>
        {/* Expanded Content for Uses */}
        {usesIsExpanded && (
          <View className="mt-4">
            <Text className="text-sm text-gray-700">
              1. Headaches{"\n"}
              2. Toothaches{"\n"}
              3. Menstrual cramps{"\n"}
              4. Muscle aches{"\n"}
              5. Cold-related symptoms like fever and body aches
            </Text>
          </View>
        )}
      </View>
      
       {/* Indications Section */}
      <View className="p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold">Indications</Text>
          <TouchableOpacity onPress={toggleIndicationsExpand}>
            <Image
              source={
                indicationsIsExpanded
                  ? require('../assets/uparrow.png')
                  : require('../assets/downArrow.png')
              }
              className=""
            />
          </TouchableOpacity>
        </View>
        {indicationsIsExpanded && (
          <View className="mt-4">
            <Text className="text-sm text-gray-700">
              1. Headaches{"\n"}
              2. Fever{"\n"}
              3. Pain relief{"\n"}
              4. Body pain
            </Text>
          </View>
        )}
      </View>
      
          {/* Side Effects Section */}
      <View className="p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold">Side Effects</Text>
          <TouchableOpacity onPress={toggleSideEffectsExpand}>
            <Image
              source={
                sideEffectsIsExpanded
                  ? require('../assets/uparrow.png')
                  : require('../assets/downArrow.png')
              }
              className=""
            />
          </TouchableOpacity>
        </View>
        {sideEffectsIsExpanded && (
          <View className="mt-4">
            <Text className="text-sm text-gray-700">
              1. Nausea{"\n"}
              2. Dizziness{"\n"}
              3. Liver/kidney issues{"\n"}
              4. Allergic reactions
            </Text>
          </View>
        )}
      </View>
      
       {/* Warnings Section */}
       <View className="p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold">Warnings</Text>
          <TouchableOpacity onPress={toggleWarningsExpand}>
            <Image
              source={
                warningsIsExpanded
                  ? require('../assets/uparrow.png')
                  : require('../assets/downArrow.png')
              }
              className=""
            />
          </TouchableOpacity>
        </View>
        {warningsIsExpanded && (
          <View className="mt-4">
            <Text className="text-sm text-gray-700">
              1. Avoid alcohol{"\n"}
              2. Stick to recommended dose{"\n"}
              3. Consult a doctor if pregnant or on other meds{"\n"}
              4. Avoid long-term use
            </Text>
          </View>
        )}
      </View>
      </ScrollView>
    </View>
  )
}