import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Activity from './screens/Activity';

export const Router = StackNavigator({
  Home: { screen: Home },
  Activity: { screen: Activity },
});