import React from 'react';
import {View, KeyboardAvoidingView,  Text, Button, Platform } from 'react-native';
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import {globalStyles} from '../styles/global';

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
       messages: [],
    };
  }
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

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  render() {
    
      let name = this.props.route.params.name;
      let bgColor = this.props.route.params.bgColor;
      this.props.navigation.setOptions({title: name});

      return (
      <View  style={{flex: 1, backgroundColor: bgColor, paddingBottom: 20, paddingHorizontal: 10}}>
        <GiftedChat
        renderBubble={this.renderBubble.bind(this)}
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
      )
   }
}