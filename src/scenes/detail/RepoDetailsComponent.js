import React from 'react';
import {Text, View, Button, Image, Linking} from 'react-native';
import styles from './styles';

export default class RepoDetailsComponent extends React.PureComponent {
  onPressCall = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url).catch(() => null);
      }
    });
  };
  render() {
    let {
      name,
      description,
      stargazers_count,
      owner,
      html_url,
    } = this.props.repository;
    return (
      <View style={styles.wrapper}>
        <Image style={styles.avatar} source={{uri: owner.avatar_url}} />
        <Text>Stars {stargazers_count}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button
          title="Go to Repo"
          onPress={() => {
            this.onPressCall(html_url);
          }}
        />
      </View>
    );
  }
}
