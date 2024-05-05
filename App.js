import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white" >
       <Text className='text-center mt-3 text-2xl underline font-bold text-red-500'>
        Welcome 
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}


