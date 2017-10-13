import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Activity from './screens/Activity';

export const Router = StackNavigator({
  Home: { screen: Home },
  Activity: { screen: Activity },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#1685e8',
      marginTop: StatusBar.currentHeight,
    },
    headerTitleStyle: {
      color: '#fff'
    },
    headerBackTitleStyle: {
      color: '#fff'
    },
    headerTintColor: "#fff"
  },
});

