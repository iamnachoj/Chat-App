import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}) {

  const pressHandler = () => {
     navigation.goBack()
  }
   return (
     <View style={globalStyles.container}>
       <Text>Review detail Screen</Text>
       <Button title={'Back'} onPress={pressHandler}/>
     </View>
   )
}
