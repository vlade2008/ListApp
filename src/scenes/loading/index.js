import React from 'react';
import {
  View,
  ActivityIndicator,
  StatusBar,
  Text,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="light-content" />
        <Text>Loading</Text>
      </View>
    );
  }
}
const mapStateProps = state => ({});
const mapDispatch = dispatch => {
  return {};
};
const connector = connect(
  mapStateProps,
  mapDispatch,
);
export default connector(Loading);
