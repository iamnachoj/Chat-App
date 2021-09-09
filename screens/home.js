import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {globalStyles} from '../styles/global';

export default class Screen1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: ''};
  }
  render() {
   return (
     <View style={globalStyles.container}>
       <Text style={globalStyles.titleText}>Hello World!</Text>
       <TextInput
        style={globalStyles.input}
        placeholder='Your name'
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
       />
       <Button title={'Go to Chat'} onPress={() => this.props.navigation.navigate('Chat', {name: this.state.name})}/>
     </View>
   )
  }
}