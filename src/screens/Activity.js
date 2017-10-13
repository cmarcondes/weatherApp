import React from 'react';
import {
  Text,
  Section,
  StyleSheet,
  View,
  Image,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Accordion from 'react-native-collapsible/Accordion';

import Rating from '../components/Rating';
import activities from '../static/activities';
import forecast1Day from '../static/forecast1day';

const styles = StyleSheet.create({
  today__container: {
    justifyContent: 'center',
  },
  today: {
    fontSize: 12,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 11,
    textAlign: 'right'
  },
  container: {
    paddingLeft: 11,
    paddingRight: 11,
  },
  borderBottom: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
  },
  row: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
  },
  headerText: {
    flex: 1,
    paddingTop: 6,
    fontSize: 16,
  },
  icon: {
    marginRight: 13,
  }
});

class Activity extends React.Component {
  static navigationOptions = {
    title: 'Activity',
  };

  _renderHeader(activity, index, isActive) {
    const forecast = forecast1Day[0];
    return (
      <View style={[styles.container]}>
        <View style={[ styles.row, (!isActive && styles.borderBottom) ]}>
          <Text style={styles.headerText}>{activity.name}</Text>
          <Image source={activity.icon} style={styles.icon}></Image>
          <Rating value={forecast[`activity_digit_${activity.id}`]} />
        </View>
      </View>
    );
  }

  _renderContent(activity, index, isActive) {
    return (
      <View style={styles.borderBottom}>
        <Text style={styles.borderBottom}>CONTENT for {activity.name}</Text>
      </View>
    );
  }
  render() {
    return (
      <ScrollView>
        <View style={[ styles.today__container, styles.borderBottom ]}>
          <Text style={styles.today}>Vandaag</Text>
        </View>
        <Accordion
          sections={activities}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          underlayColor='#0282EB'
        />
      </ScrollView>
    );
  }
}


export default Activity;