import React from 'react';
import { View, Text, Button } from 'react-native';
import {globalStyles} from '../styles/global';

export default function Home({navigation}) {
   
   const pressHandler = () => {
      navigation.navigate('Reviews')
   }

   return (
     <View style={globalStyles.container}>
       <Text style={globalStyles.titleText}>Home Screen</Text>
       <Button title={'Go to Reviews'} onPress={pressHandler}/>
     </View>
   )
}