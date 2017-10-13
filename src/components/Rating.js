import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const _styles = StyleSheet.create({
  container: {
    width: 28,
    height: 28,
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  value: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
  },
  r_: { backgroundColor: 'transparent'},
  r_1: { backgroundColor: '#4F4F47' },
  r_2: { backgroundColor: '#6B6C6C' },
  r_3: { backgroundColor: '#8A9294' },
  r_4: { backgroundColor: '#6CAABE' },
  r_5: { backgroundColor: '#2F91BD' },
  r_6: { backgroundColor: '#03a9f4' },
  r_7: { backgroundColor: '#51C9FF' },
  r_8: { backgroundColor: '#FFC618' },
  r_9: { backgroundColor: '#FFA81D' },
  r_10: { backgroundColor: '#FF8B22' },
});

class Rating extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
  };

  render() {
    return (
      <View style={[_styles.container, _styles[`r_${this.props.value}`], this.props.style]}>
        <Text style={_styles.value}>{this.props.value}</Text>
      </View>
    );
  }
}

export default Rating;
