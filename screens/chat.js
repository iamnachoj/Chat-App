import React from 'react';
import {View, Text, Button } from 'react-native';
import {globalStyles} from '../styles/global';

export default class Chat extends React.Component {
  render() {
    
      let name = this.props.route.params.name;
      this.props.navigation.setOptions({title: name});

      return (
      <View style={globalStyles.container}>
        <Text>Chat Screen</Text>
        <Button 
        title='Back'
        onPress={() => this.props.navigation.navigate('Home')}/>
      </View>
      )
   }
}