import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import Card from '../components/Card';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Weather for Amsterdam',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Card 
          title='Activiteitenweer'
          onPress={() => navigate('Activity')}
        />
      </View>
    );
  }
}

export default Home;