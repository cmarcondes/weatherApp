import React from 'react';
import { View } from 'react-native';
import { Router } from './src/router';
import getPlace from './src/api/getPlace';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      location: {}
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      const lat = coords.latitude.toFixed(3);
      const long = coords.longitude.toFixed(3);
      getPlace(lat, long).then((res) => {
        this.setState({
          location: res.weeronline.data
        })
      })
    });
  }
  
  render() {
    const { location } = this.state;
    return (
      <View style={{ flex:1 }}>
        <Router screenProps={{ location }}/>
      </View>
    );
  }
}
