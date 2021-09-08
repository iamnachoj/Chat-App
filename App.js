import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';

export default class HelloWorld extends React.Component{
  constructor(){
    super()
    this.state = {text: ''}
  }

  // alert the user input
  alertMyText (input = []) {
    Alert.alert('You wrote: ' + input.text);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}><Text style={styles.title}>Hello world!</Text></View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            placeholder='Type here...'
            value={this.state.text}
            onChangeText={(text) => {this.setState({text})}}
          />
          <Button
            onPress={() => {this.alertMyText({text: this.state.text});}}
            title="Press Me"
          />
          <Text style={styles.normalText}>You wrote: {this.state.text}</Text>
          {/* example of scrolling  */}
          <ScrollView>
            <Text style={{fontSize:110}}>This text is so big! And so long! You have to scroll!</Text>
          </ScrollView>
        </View>
        <View style={styles.footer}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    height:100,
    backgroundColor: 'skyblue'
  },
  body: {
    flex:1,
    backgroundColor: '#fff',
    padding: 20
  },
  footer: {
    height: 80,
    backgroundColor: 'skyblue'
  },
  input:{
    fontSize: 18,
    borderWidth:1,
    borderRadius: 8,
    padding: 5,
    height: 40,
    marginBottom: 15
  },
  title:{
    fontSize: 24,
    color: '#fff',
    marginTop: 45,
    textAlign: 'center'
  },
  normalText: {
    fontSize: 18,
    marginTop: 15
  },
});
