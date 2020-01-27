import React from 'react';
import {Button, AsyncStorage, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavigationService from '../../utils/NavigationService';
import styles from './styles';
import debounce from 'lodash/debounce';
import * as repositoryAction from '../../actions/repositoryAction';

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
    this.props.repositoryAction.getRepository();
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
    console.log('props', this.props);
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
function mapStateToProps(state) {
  return {
    repository: state.repository,
    loading: state.app.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    repositoryAction: bindActionCreators(repositoryAction, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
