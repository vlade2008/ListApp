import React from 'react';
import {View, ActivityIndicator, StatusBar} from 'react-native';
export default class CustomLoading extends React.PureComponent {
  static defaultProps = {
    loading: false,
  };
  render() {
    const {loading} = this.props;
    if (!loading) {
      return null;
    }
    return (
      <View>
        <ActivityIndicator />
        <StatusBar />
      </View>
    );
  }
}
