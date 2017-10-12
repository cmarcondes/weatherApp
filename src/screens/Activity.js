import React from 'react';
import {
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Activity extends React.Component {
  static navigationOptions = {
    title: 'Activity',
  };
  render() {
    return <Text>Hello, Activity!</Text>;
  }
}


export default Activity;