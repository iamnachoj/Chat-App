import React from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';

const image = { uri: "" };

export default class Screen1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: ''};
  }
  render() {
   return (
     <ImageBackground source={require("../assets/bg.png")} style={globalStyles.image}>
     <View style={globalStyles.container}>
       <View style={globalStyles.dashboardContainer}>
        <Text style={globalStyles.titleText}>Hello World!</Text>
        <TextInput
          style={globalStyles.input}
          placeholder='Your name'
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Button title={'Go to Chat'} onPress={() => this.props.navigation.navigate('Chat', {name: this.state.name})}/>
       </View>
     </View>
     </ImageBackground>
   )
  }
}