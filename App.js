import { View, Text } from 'react-native'
import React from 'react'
import { BottomTab } from './src/navigation/BottomTab';
import * as Font from 'expo-font';

export default class App extends React.Component {
  componentDidMount() {
    this.loadFonts();
  }

  loadFonts(){
    Font.loadAsync({
      'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    });
  }

  render() {
    return (
      <BottomTab></BottomTab>
    );
  }
}
