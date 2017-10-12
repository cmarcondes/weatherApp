import React from 'react';
import { View } from 'react-native';
import { Router } from './src/router';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <Router/>
      </View>
    );
  }
}
