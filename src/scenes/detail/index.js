import React from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import RepoDetailsComponent from '../detail/RepoDetailsComponent';
import styles from './styles';

class Detail extends React.Component {
  static navigationOptions = {
    title: 'Repository Details',
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <RepoDetailsComponent repository={this.props.navigation.state.params} />
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
export default connector(Detail);
