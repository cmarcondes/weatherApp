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

  static navigationOptions = (props) => {
    return {
      title: `${props.screenProps.location.city_name}`,
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const forecast = forecast1Day[0];
    const sortedActivities = activities.map(activity => {
      activity.rating = forecast[`activity_digit_${activity.id}`];
      return activity;
    }).sort((a1, a2) => a2.rating - a1.rating);
    return (
      <View>
        <Card 
          title='Activiteitenweer'
          onPress={() => navigate('Activity')}
        >
          <ScrollView horizontal>
            <View style={styles.container}>
              {sortedActivities.slice(0,4).map((activity, index)=>{
                return (
                <View style={styles.col} key={index}>
                  <Text>{activity.name}</Text>
                  <Image source={activity.icon} style={styles.icon} />
                  <Rating value={forecast[`activity_digit_${activity.id}`]} />
                </View>
                );
              })}
            </View>
          </ScrollView>
        </Card>
      </View>
    );
  }
}

export default Home;