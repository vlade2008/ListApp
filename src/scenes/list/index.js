import React from 'react';
import {
  Button,
  AsyncStorage,
  View,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavigationService from '../../utils/NavigationService';
import styles from './styles';
import debounce from 'lodash/debounce';
import * as repositoryAction from '../../actions/repositoryAction';
import CustomListView from '../../components/CustomListView';
import CustomLoading from '../../components/CustomLoading';

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
    this.props.repositoryAction.getRepository(this.state.search);
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
  keyExtractor = item => item.id.toString();
  renderItem = item => {
    let {name, owner} = item;
    return (
      <TouchableHighlight
        style={styles.touchableButton}
        onPress={this._onPressButton(item)}>
        <View style={styles.listItemContainer}>
          <View style={styles.listItem} />
          <View style={styles.listItemDetails}>
            <Text>{name}</Text>
            <Text style={styles.listItemDetailsText}>by {owner.login} </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  _onPressButton = item => {
    return () => {
      this.props.navigation.navigate('Detail', item);
    };
  };
  render() {
    let data = this.props.repository.data.items || [];
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search Repository"
          onChangeText={this._onHandleChangeText}
        />
        <CustomLoading loading={this.props.loading} />
        <CustomListView
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={item => this.renderItem(item.item)}
          refreshing={this.props.loading}
        />
      </SafeAreaView>
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
