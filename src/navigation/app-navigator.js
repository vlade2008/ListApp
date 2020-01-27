import {createStackNavigator} from 'react-navigation-stack';

import ListScreen from '../scenes/list/index';
import DetailScreen from '../scenes/detail/index';

const AppNavigator = createStackNavigator({
  List: ListScreen,
  Detail: DetailScreen,
});
export default AppNavigator;
