import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Result() {
  const navigation = useNavigation();
  const [descriptionIsExpanded, setDescriptionIsExpanded] = useState(false);
  const [usesIsExpanded, setUsesIsExpanded] = useState(false);
  const [indicationsIsExpanded, setIndicationsIsExpanded] = useState(false);
  const [sideEffectsIsExpanded, setSideEffectsIsExpanded] = useState(false);
  const [warningsIsExpanded, setWarningsIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  const [drugName, setDrugName] = useState('Dolo 650');
  const [description, setDescription] = useState("Dolo 650 is a commonly used medication that provides relief from pain and fever. It contains the active ingredient paracetamol, also known as acetaminophen. Paracetamol is widely used for its analgesic (pain-relieving) and antipyretic (fever-reducing) properties. It is available in tablet form and can be easily purchased over the counter. Research shows DOLO 650 was one of the highest sought-after medicines in India during Covid.");
  
  const [uses, setUses] = useState([
    'Headaches',
    'Toothaches',
    'Menstrual cramps',
    'Muscle aches',
    'Cold-related symptoms like fever and body aches',
  ]);
  
  const [indications, setIndications] = useState([
    'Headaches',
    'Fever',
    'Pain relief',
    'Body pain',
  ]);
  
  const [sideEffects, setSideEffects] = useState([
    'Nausea',
    'Dizziness',
    'Liver/kidney issues',
    'Allergic reactions',
  ]);
  
  const [warnings, setWarnings] = useState([
    'Avoid alcohol',
    'Stick to recommended dose',
    'Consult a doctor if pregnant or on other meds',
    'Avoid long-term use',
  ]);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleExpand = (section) => {
    if (section === 'description') setDescriptionIsExpanded(!descriptionIsExpanded);
    if (section === 'uses') setUsesIsExpanded(!usesIsExpanded);
    if (section === 'indications') setIndicationsIsExpanded(!indicationsIsExpanded);
    if (section === 'sideEffects') setSideEffectsIsExpanded(!sideEffectsIsExpanded);
    if (section === 'warnings') setWarningsIsExpanded(!warningsIsExpanded);
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
          />
        </TouchableOpacity>

        {/* Title */}
        <View className="flex-1">
          <Text className="text-xl font-bold text-black">{drugName}</Text>
        </View>

        {/* Like and Share Buttons */}
        <View className="flex-row items-center">
          {/* Like Button */}
          <TouchableOpacity className="pl-4" onPress={toggleLike}>
            <Image
              source={liked ? require('../assets/likeRed.png') : require('../assets/likeBlack.png')}
              className="h-6 w-7"
            />
          </TouchableOpacity>

          {/* Share Button */}
          <TouchableOpacity className="pl-4">
            <Image
              source={require('../assets/share.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View className="flex items-center justify-center p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
          <Image source={require('../assets/demo.png')} />
        </View>
        
        {/* Description Section */}
        <View className="p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Description</Text>
            <TouchableOpacity onPress={() => toggleExpand('description')}>
              <Image
                source={descriptionIsExpanded ? require('../assets/uparrow.png') : require('../assets/downArrow.png')}
              />
            </TouchableOpacity>
          </View>
          {/* Expanded Content */}
          {descriptionIsExpanded && (
            <View className="mt-4">
              <Text className="text-sm text-gray-700">{description}</Text>
            </View>
          )}
        </View>

        {/* Uses Section */}
        <View className="p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Uses</Text>
            <TouchableOpacity onPress={() => toggleExpand('uses')}>
              <Image
                source={usesIsExpanded ? require('../assets/uparrow.png') : require('../assets/downArrow.png')}
              />
            </TouchableOpacity>
          </View>
          {/* Expanded Content for Uses */}
          {usesIsExpanded && (
            <View className="mt-4">
              {uses.map((use, index) => (
                <Text key={index} className="text-sm text-gray-700">
                  {index + 1}. {use}
                </Text>
              ))}
            </View>
          )}
        </View>

        {/* Indications Section */}
        <View className="p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Indications</Text>
            <TouchableOpacity onPress={() => toggleExpand('indications')}>
              <Image
                source={indicationsIsExpanded ? require('../assets/uparrow.png') : require('../assets/downArrow.png')}
              />
            </TouchableOpacity>
          </View>
          {indicationsIsExpanded && (
            <View className="mt-4">
              {indications.map((indication, index) => (
                <Text key={index} className="text-sm text-gray-700">
                  {index + 1}. {indication}
                </Text>
              ))}
            </View>
          )}
        </View>

        {/* Side Effects Section */}
        <View className="p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Side Effects</Text>
            <TouchableOpacity onPress={() => toggleExpand('sideEffects')}>
              <Image
                source={sideEffectsIsExpanded ? require('../assets/uparrow.png') : require('../assets/downArrow.png')}
              />
            </TouchableOpacity>
          </View>
          {sideEffectsIsExpanded && (
            <View className="mt-4">
              {sideEffects.map((effect, index) => (
                <Text key={index} className="text-sm text-gray-700">
                  {index + 1}. {effect}
                </Text>
              ))}
            </View>
          )}
        </View>

        {/* Warnings Section */}
        <View className="p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Warnings</Text>
            <TouchableOpacity onPress={() => toggleExpand('warnings')}>
              <Image
                source={warningsIsExpanded ? require('../assets/uparrow.png') : require('../assets/downArrow.png')}
              />
            </TouchableOpacity>
          </View>
          {warningsIsExpanded && (
            <View className="mt-4">
              {warnings.map((warning, index) => (
                <Text key={index} className="text-sm text-gray-700">
                  {index + 1}. {warning}
                </Text>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
