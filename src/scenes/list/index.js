import React from 'react';
import {Button, AsyncStorage, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import NavigationService from '../../utils/NavigationService';
import styles from './styles';
import debounce from 'lodash/debounce';

const _logoutAsync = async () => {
  await AsyncStorage.removeItem('userToken');
  alert('Success Logout!'); // eslint-disable-line no-alert
  NavigationService.navigate('Auth', {});
};

class List extends React.Component {
  state = {
    search: '',
  };
  static navigationOptions = {
    title: 'List',
    headerRight: <Button onPress={_logoutAsync} title="Logout" />,
  };
  debounceTest = debounce(() => {
    _logoutAsync();
  }, 1000);
  _onHandleChangeText = value => {
    this.setState(
      {
        search: value,
      },
      () => {
        this.debounceTest();
      },
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={this._onHandleChangeText}
        />
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
export default connector(List);
