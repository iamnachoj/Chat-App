import React from 'react';
import {View, KeyboardAvoidingView,  Text, Button, Platform } from 'react-native';
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import {globalStyles} from '../styles/global';

//firebase
const firebase = require('firebase');
require('firebase/firestore');

export default class Chat extends React.Component {
  // this is just mock data to store messages
  constructor() {
    super();
    this.state = {
       messages: [],
    };
  }
   // after the chat component is mounted, we store these 2 messages as an example, changing the current state of messages (empty array)
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'This is a system message',
          createdAt: new Date(),
          system: true,
         },
      ],
    })
  }
  // a funtion that changes the color of the bubble of your own messages when you send them
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#333'
          }
        }}
      />
    )
  }
  // appends new messages to the current list of messages.
  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  render() {
      // takes name and bgColor from props from the navigation from home screen to use them in this component
      let name = this.props.route.params.name;
      let bgColor = this.props.route.params.bgColor;
      //this line bellow changes the title of the screen to "name", the variable taken from props from home screen
      this.props.navigation.setOptions({title: name});

      return (
        // full view
      <View  style={{flex: 1, backgroundColor: bgColor, paddingBottom: 20, paddingHorizontal: 10}}>
        {/* Gifted chat is a component taken from the dependency, it has its own methods. check documentation for further explanation */}
        <GiftedChat
        // call the function mentioned above
        renderBubble={this.renderBubble.bind(this)}
        // store messages
        messages={this.state.messages}
        // onsend function
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
       {/* this line bellow makes sure that any android version does not have issues with the keyboard taking the screen room and hidding the chat. */}
      { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
      )
   }
}