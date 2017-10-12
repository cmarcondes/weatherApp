import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
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
        >
          <ScrollView horizontal>
            <View>
              <Text>Barbecue</Text>
              <Image source={require('../assets/images/bbq.png')} />
            </View>
            <View>
              <Text>Fietsen</Text>
              <Image source={require('../assets/images/bike.png')} />
            </View>
            <View>
              <Text>Tennis</Text>
              <Image source={require('../assets/images/tennis.png')} />
            </View>
            <View>
              <Text>Drinken</Text>
              <Image source={require('../assets/images/terrace.png')} />
            </View>
          </ScrollView>
        </Card>
      </View>
    );
  }
}

export default Home;