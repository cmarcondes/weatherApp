import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Weather for Amsterdam',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Home!</Text>
        <Button
          onPress={() => navigate('Activity')}
          title="Go to activity"
        />
      </View>
    );
  }
}


export default Home;