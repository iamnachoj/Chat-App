import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View >
      <Text style={[styles.blue, styles.bold]}>Hello World!</Text>
      <Text style={[styles.red, styles.big]}>How are you?</Text>
      <Text style={[styles.big, styles.blue, styles.bold]}>I am feeling blue!</Text>
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    color: 'blue'
  },
  big: {
    fontSize: 30
  },
  bold: {
    fontWeight: 'bold'
  },
  red: {
    color: 'red'
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'skyblue'
  }
});
