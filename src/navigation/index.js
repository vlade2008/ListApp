import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from '../scenes/home/index';

const RootNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RootNavigator);
