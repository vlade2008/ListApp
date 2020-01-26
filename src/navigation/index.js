import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoadingScreen from '../scenes/loading/index';

import AppNavigator from '../navigation/app-navigator';
import AuthNavigator from '../navigation/auth-navigator';

const RootNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default createAppContainer(RootNavigator);
