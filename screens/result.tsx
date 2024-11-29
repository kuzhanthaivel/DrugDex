import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

export default function Result() {
  const navigation = useNavigation();
  const route = useRoute();
  const { drugName, username } = route.params;
  const [drug, setDrug] = useState("");
  const [description, setDescription] = useState("");
  const [uses, setUses] = useState([]);
  const [indications, setIndications] = useState([]);
  const [sideEffects, setSideEffects] = useState([]);
  const [warnings, setWarnings] = useState([]);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [error1, setError1] = useState(null); 
  

//  const [descriptionIsExpanded, setDescriptionIsExpanded] = useState(false); 
  const [usesIsExpanded, setUsesIsExpanded] = useState(false);
  const [indicationsIsExpanded, setIndicationsIsExpanded] = useState(false);
  const [sideEffectsIsExpanded, setSideEffectsIsExpanded] = useState(false);
  const [warningsIsExpanded, setWarningsIsExpanded] = useState(false);


  const toggleExpand = (section) => {
//  if (section === 'description') setDescriptionIsExpanded(!descriptionIsExpanded);
    if (section === 'uses') setUsesIsExpanded(!usesIsExpanded);
    if (section === 'indications') setIndicationsIsExpanded(!indicationsIsExpanded);
    if (section === 'sideEffects') setSideEffectsIsExpanded(!sideEffectsIsExpanded);
    if (section === 'warnings') setWarningsIsExpanded(!warningsIsExpanded);
  };

  // Fetch drug data
  useEffect(() => {
    const fetchDrugData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://drug-dex-server.vercel.app/search-drug', {
          params: { drugName },
        });

        const drug = response.data.drug;
        setDrug(drug.drugName);
        setDescription(drug.description);
        setUses(drug.uses);
        setIndications(drug.indications);
        setSideEffects(drug.sideEffects);
        setWarnings(drug.warnings);
      } catch (err) {
        console.error('Error fetching drug data:', err);
        setError('Failed to load drug data.');
      } finally {
        setLoading(false);
      }
    };

    fetchDrugData();
  }, [drugName]);
  
  useEffect(() => {
    const checkBookmark = async () => {
      try {
        const response = await axios.post('https://drug-dex-server.vercel.app/check-bookmark', {
          username: username,
          drugName: drugName,
        });
        setLiked(response.data.isBookmarked);
      } catch (err) {
        console.error('Error checking bookmark:', err);
        setError1('Failed to check bookmark.');
      }
    };
  
    checkBookmark();
  }, [username, drugName]);
  


const toggleLike = async () => {
  setLiked(!liked);
  console.log({ username, drug });

  try {
      const endpoint = liked ? 'remove-bookmark' : 'add-bookmark';
      const response = await axios.post(`https://drug-dex-server.vercel.app/${endpoint}`, {
          username :username,
          drugName : drug,
      });

      if (response.data.isBookmarked !== undefined) {
          setLiked(response.data.isBookmarked);
      }
  } catch (err) {
      console.error('Error toggling bookmark:', err);
  }
};



  if (loading) {
    return (
      <View className="flex-1 pt-14" >
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
      <View className="items-center justify-center flex-1 bg-gray-100">
        <Text className="text-lg text-gray-700">Loading...</Text>
      </View> </View>

    );
  }

  if (error) {
    return (
      <View className="flex-1 pt-14" >
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
        
        <View className="items-center justify-center flex-1 bg-gray-100">
        <Text className="text-lg text-red-600">{error}</Text>
      </View> 
      </View>

    );
  }

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
          <Text className="text-xl font-bold text-black">{drug}</Text>
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

        
        {/* Description Section */}
        <View className="p-6 mx-4 mb-4 bg-white rounded-lg shadow-md">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Description</Text>
            {/* 
            <TouchableOpacity onPress={() => toggleExpand('description')}>
              <Image
                source={descriptionIsExpanded ? require('../assets/uparrow.png') : require('../assets/downArrow.png')}
              />
            </TouchableOpacity>*/}
          </View>
          {/*           {descriptionIsExpanded && (
            <View className="mt-4">
              <Text className="text-sm text-gray-700">{description}</Text>
            </View>
          )} */}

            <View className="mt-4">
              <Text className="text-sm text-gray-700">{description}</Text>
            </View>

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
