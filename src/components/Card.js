import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    onPress: PropTypes.func,
  };

  render() {
    const { title, body, children, onPress } = this.props; 

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            {title}
          </Text>
          { !children ?
            (<Text style={styles.cardBody}> {body} </Text>) :
            children
          }
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    elevation: 3,
    shadowColor: 'rgba(5, 5, 5, .4)',
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0,
    }
  },
  cardTitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
  },
  cardBody: {
    fontWeight: '200',
    marginVertical: 5,
    color: 'black'
  },
});


export default Card;