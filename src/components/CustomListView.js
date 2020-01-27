import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';

export default class CustomListView extends React.PureComponent {
  keyExtractor = item => {
    const {keyExtractor} = this.props;
    if (typeof keyExtractor === 'function') {
      return keyExtractor(item);
    } else {
      return item.id;
    }
  };
  render() {
    const {data, renderItem} = this.props;
    return (
      <FlatList
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.listContainer}>
            <Text style={styles.listDetails}>No Records</Text>
          </View>
        }
      />
    );
  }
}
