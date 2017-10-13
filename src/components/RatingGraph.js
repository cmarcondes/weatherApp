import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import moment from 'moment';
import * as Animatable from 'react-native-animatable';

import Rating from '../components/Rating';

const datas = [
  { time: 'nu', rating: 1 },
  { time: '17:00', rating: 2 },
  { time: '18:00', rating: 3 },
  { time: '19:00', rating: 4 },
  { time: '20:00', rating: 5 },
  { time: '21:00', rating: 6 },
  { time: '22:00', rating: 7 },
  { time: '23:00', rating: 8 },
  { time: '24:00', rating: 9 },
  { time: '00:00', rating: 10 },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    height: 340,
    width: 50,
    borderRightColor: '#D8D8D8',
    borderRightWidth: 1,
    alignItems:'center',
  },
  header: {
    paddingBottom: 10,
    color: '#797d80',
  },
});

const calculateRatingPosition = (rating) => {
  return { top: 300 - (rating * 30) };
}

class RatingGRaph extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
  };
  static defaultProps = {
    isActive: false,
  };
  constructor(props) {
    super(props);
    this.createColumn = this.createColumn.bind(this);
  }
  createColumn(data) {
    let time = data.time;
    // if(data.time === moment().minute(0).format('HH:mm')) {
    //   time = 'nu';
    // }
    return (
      <View key={data.time} style={styles.column}>
        <Text style={styles.header}>{time}</Text>
        {/* <Animatable.View
          duration={1000}
          animation={this.props.isActive ? 'bounceInRight' : false}> */}
          <Rating value={data.rating} style={calculateRatingPosition(data.rating)} />
        {/* </Animatable.View> */}
      </View>
    );
  }
  render() {
    return (
      <ScrollView horizontal>
        <View style={styles.container}>
          {datas.map(this.createColumn)}
        </View>
      </ScrollView>
    );
  }
}

export default RatingGRaph;
