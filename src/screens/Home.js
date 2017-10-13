import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Card from '../components/Card';
import Rating from '../components/Rating';

import activities from '../static/activities';
import forecast1Day from '../static/forecast1day';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  col: {
    flex: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})

class Home extends React.Component {
  static navigationOptions = {
    title: 'Weather for Amsterdam',
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      /*
      we have to call: https://service.weeronline.cloud/geodata/v1/6/1/nl/52.360/4.893
      "latitude": 52.3606941,
      "longitude": 4.8938012,
      To get the city_id.
      */
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    const forecast = forecast1Day[0];
    return (
      <View>
        <Card 
          title='Activiteitenweer'
          onPress={() => navigate('Activity')}
        >
          <ScrollView horizontal>
            <View style={styles.container}>
              <View style={styles.col}>
                <Text>Barbecue</Text>
                <Image source={require('../assets/images/bbq.png')} />
                <Rating value={forecast1Day[0][`activity_digit_${activities[0].id}`]} />
              </View>
              <View style={styles.col}>
                <Text>Fietsen</Text>
                <Image source={require('../assets/images/cycling.png')} />
                <Rating value={forecast[`activity_digit_${activities[2].id}`]} />
              </View>
              <View style={styles.col}>
                <Text>Tennis</Text>
                <Image source={require('../assets/images/tennis.png')} />
                <Rating value={forecast[`activity_digit_${activities[3].id}`]} />
              </View>
              <View style={styles.col}>
                <Text>Drinken</Text>
                <Image source={require('../assets/images/terrace.png')} />
                <Rating value={forecast[`activity_digit_${activities[1].id}`]} />
              </View>
            </View>
          </ScrollView>
        </Card>
      </View>
    );
  }
}

export default Home;