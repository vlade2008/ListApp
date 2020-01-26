import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';

class Detail extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Detail</Text>
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
