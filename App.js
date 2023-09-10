import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-blue-400">
      <ImageBackground source={require('./assets/lkwPhy.jpg')} resizeMode='cover'>
        <View className="flex justify-center items-center mt-[60px]">
          <TextInput className="h-11 m-[12px] bg-white p-4 rounded-lg w-2/3 max-w-2xl"
                placeholder="Search Location...">
          </TextInput>
        </View>
        <View className="flex items-center justify-center w-full">
          <Text className="flex text-black text-3xl justify-center mt-[10px]">Philadelphia</Text>
          <Text className="text-black text-7xl mt-12">84°F</Text>
          <Text className="text-black mt-4">Feels like: 88°F</Text>
          <Text className="text-black mt-16">Wear a T-shirt, and bring some water!</Text>
        </View>
        <View className="flex flex-row w-full space-x-2 mt-6 overflow-x-scroll">
          <ScrollView horizontal className="flex flex-row w-full mx-4 space-x-2 bg-blue-400/40 rounded-lg">
            <View className="flex items-center justify-center bg-blue-500/90 rounded-lg px-4 m-6">
              <Text className="text-white text-xl">Tue, Sep 5</Text>
              <Text className="text-white text-base mt-2">84°F</Text>
            </View>
            <View className="flex items-center justify-center bg-blue-500/90 rounded-lg px-4 m-6">
              <Text className="text-white text-xl">Wed, Sep 6</Text>
              <Text className="text-white text-base mt-2">87°F</Text>
            </View>
            <View className="flex items-center justify-center bg-blue-500/90 rounded-lg px-4 m-6">
              <Text className="text-white text-xl">Thu, Sep 7</Text>
              <Text className="text-white text-base mt-2">90°F</Text>
            </View>
          </ScrollView>
        </View>
        <View className="flex rounded-lg mt-4">
          <Image className="mx-auto mb-4 opacity-70" source={require('./assets/lineChart.png')} style={{width: 390, height: 150}}
                 resizeMode="cover"/>
          <Image className="mx-auto h-1/3 opacity-90" source={require('./assets/radar.jpg')} style={{width: 390, height: '40%'}}
                 resizeMode='cover'/>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
