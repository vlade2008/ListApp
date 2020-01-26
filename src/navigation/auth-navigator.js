import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../scenes/login/index';

const AuthNavigator = createStackNavigator({
  Login: LoginScreen,
});
export default AuthNavigator;
