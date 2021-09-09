import React, {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

//components
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';

// navigator
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const getFonts = () => {
  return (
    Font.loadAsync({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    })
  )}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const Stack = createStackNavigator();

  if(fontsLoaded){
    return (
      <NavigationContainer>
      <Stack.Navigator>
        {/* it automatically adds a navigation prop */}
        <Stack.Screen name='Home' component={Home}/> 
        <Stack.Screen name='Reviews' component={ReviewDetails}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
     <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={console.warn}
      />
    )
  }
}