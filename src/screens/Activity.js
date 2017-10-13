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
import RatingGraph from '../components/RatingGraph';
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
    textAlign: 'right',
    color: '#85898c',
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
    color: '#444647',
  },
  icon: {
    marginRight: 13,
  },
  footer_container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
    paddingBottom: 15,
  },
  footer__content: {
    flexDirection: 'row',
  },
  footer__time: {
    paddingLeft: 11,
  }
});

class Activity extends React.Component {
  static navigationOptions = {
    title: 'Activity',
  };

  constructor(props) {
    super(props);
    const forecast = forecast1Day[0];
    const sortedActivities = activities.map(activity => {
      activity.rating = forecast[`activity_digit_${activity.id}`];
      return activity;
    }).sort((a1, a2) => a2.rating - a1.rating);
    this.state = {
      activities: sortedActivities,
      theBest: sortedActivities[0],
      theWorst: sortedActivities[sortedActivities.length - 1],
    }
    this._renderContent = this._renderContent.bind(this);
  }

  _renderHeader(activity, index, isActive) {
    return (
      <View style={[styles.container]}>
        <View style={[styles.row, (!isActive && styles.borderBottom)]}>
          <Text style={styles.headerText}>{activity.name}</Text>
          <Image source={activity.icon} style={styles.icon}></Image>
          <Rating value={activity.rating} />
        </View>
      </View>
    );
  }

  _createFooterElement(title, rating, time, date) {
    return (
      <View>
        <Text style={{ fontSize: 12, marginBottom: 12, color: '#444647', fontWeight: 'bold'}}>{title}</Text>
        <View style={styles.footer__content}>
          <Rating value={rating} />
          <View style={styles.footer__time}>
            <Text>{time}</Text>
            <Text style={{ fontSize: 12, color: '#797d80' }}>{date}</Text>
          </View>
        </View>
      </View>
    );
  }

  _renderFooter() {
    return (
      <View style={styles.footer_container}>
        <View style={{ paddingRight: 49, borderRightColor: '#D8D8D8', borderRightWidth: 1, }}>
          {this._createFooterElement('Beste Schema', this.state.theBest.rating, '22:00', '13 okt')}
        </View>
        <View style={{ paddingLeft: 49 }}>
          {this._createFooterElement('Slechtste Schema', this.state.theWorst.rating, '13:00', '13 okt')}
        </View>
      </View>
    );
  }

  _renderContent(activity, index, isActive) {
    return (
      <View style={styles.borderBottom}>
        <RatingGraph isActive={isActive} />
        {this._renderFooter()}
      </View>
    );
  }
  render() {
    return (
      <ScrollView>
        <View style={[styles.today__container, styles.borderBottom]}>
          <Text style={styles.today}>Vandaag</Text>
        </View>
        <Accordion
          sections={this.state.activities}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          underlayColor='#0282EB'
        />
      </ScrollView>
    );
  }
}


export default Activity;