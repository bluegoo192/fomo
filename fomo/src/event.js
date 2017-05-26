import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class Event extends Component {
  static navigationOptions = ({navigation}) => ({
      title: `${navigation.state.params.event.name}`,
    })
  render() {
    return (
      <View>
        <Image
          style={{alignSelf: 'stretch', height: 200}}
          resizeMode="cover"
          source={{uri: this.props.navigation.state.params.event.image_url}}
        />
        <View style={{padding: 12}}>
          <View style={{flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: 24}}>{this.props.navigation.state.params.event.name}</Text>
            <Text>{this.props.navigation.state.params.event.start}</Text>
          </View>
          <Text>{this.props.navigation.state.params.event.description}</Text>
        </View>
      </View>
    );
  }
}
