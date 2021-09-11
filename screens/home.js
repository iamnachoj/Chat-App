import React from 'react';
import { View, Text, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import {globalStyles} from '../styles/global';

const image = { uri: "" };

export default class Screen1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: '', bgColor: "#757083" };
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
         <View style={globalStyles.colorPickerContainer}>
              <Text style={globalStyles.chooseColor}>Choose Background Color:</Text>
              <View style={globalStyles.colorPicker}>
                <TouchableOpacity
                  style={[globalStyles.colors, globalStyles.blue]}
                  onPress={() => this.setState({ bgColor: "#BED7FF" })}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={[globalStyles.colors, globalStyles.pink]}
                  onPress={() => this.setState({ bgColor: "#FFD2F8" })}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={[globalStyles.colors, globalStyles.mint]}
                  onPress={() => this.setState({ bgColor: "#B4F8C8" })}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={[globalStyles.colors, globalStyles.yellow]}
                  onPress={() => this.setState({ bgColor: "#fffde7" })}
                ></TouchableOpacity>
              </View>
            </View>
        <Button title={'Go to Chat'} onPress={() => this.props.navigation.navigate('Chat', {name: this.state.name, bgColor: this.state.bgColor})}/>
       </View>
     </View>
     </ImageBackground>
   )
  }
}