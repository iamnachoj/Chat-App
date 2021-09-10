import React from 'react';
import {View, Text, Button } from 'react-native';
import {globalStyles} from '../styles/global';

export default class Chat extends React.Component {
  render() {
    
      let name = this.props.route.params.name;
      let bgColor = this.props.route.params.bgColor;
      this.props.navigation.setOptions({title: name});

      return (
      <View  style={{flex: 1, justifyContent: "center",alignItems: "center", backgroundColor: bgColor}}>
        <Text style={{padding: 10}}>Chat Screen</Text>
        <Button 
        title='Back'
        onPress={() => this.props.navigation.navigate('Home')}/>
      </View>
      )
   }
}