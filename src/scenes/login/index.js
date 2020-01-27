import React from 'react';
import {Button, AsyncStorage, TextInput, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <Button color="orange" title="Sign in" onPress={this._signInAsync} />
      </SafeAreaView>
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
export default connector(Login);
