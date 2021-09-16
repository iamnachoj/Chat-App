import React from 'react';
import {View, KeyboardAvoidingView,  Text, Button, Platform } from 'react-native';
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import {globalStyles} from '../styles/global';

//firebase
import firebase from "firebase";
import("firebase/firestore");

export default class Chat extends React.Component {
  // this is just mock data to store messages
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      uid: 0,
      loggedInText: "Logging in...",
      user: {
        _id: "",
        name: "",
      },
    };

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCLGd3JfCZk3wXMg9XnZ8FGbORf2cJ85DM",
        authDomain: "chatapp-594ec.firebaseapp.com",
        projectId: "chatapp-594ec",
        storageBucket: "chatapp-594ec.appspot.com",
        messagingSenderId: "700285424160",
        appId: "1:700285424160:web:b401e36959d1236096a245"
      });
    }
    // Check for updates in Firestore
    this.referenceChatMessages = firebase.firestore().collection("messages");
    this.referenceMessageUser = null;
  }
   // after the chat component is mounted, we store these 2 messages as an example, changing the current state of messages (empty array)
   componentDidMount() {
    const name = this.props.route.params.username;
    this.props.navigation.setOptions({ title: name });
    
    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        messages: [],
        user: {
          _id: user.uid,
          name: name,
        },
      });
      this.referenceMessagesUser = firebase
        .firestore()
        .collection("messages")
        .where("uid", "==", this.state.uid);

      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  addMessage() {
    const message = this.state.messages[0];
    // add the new messages to the collection
    this.referenceChatMessages.add({
      uid: this.state.uid,
      _id: message._id,
      text: message.text,
      createdAt: message.createdAt,
      user: message.user,
    });
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
    this.setState(
      (previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }),
      () => {
        this.addMessage();
      }
    );
  }
  
  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: {
          _id: data.user._id,
          name: data.user.name,
        },
      });
    });
    this.setState({
      messages,
    });
  };
  
  componentWillUnmount() {
    // stop authentication
    this.authUnsubscribe();
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
        user={this.state.user}
      />
       {/* this line bellow makes sure that any android version does not have issues with the keyboard taking the screen room and hidding the chat. */}
      { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
      )
   }
}