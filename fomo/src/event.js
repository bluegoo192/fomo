import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class Event extends Component {
  static navigationOptions = ({navigation}) => ({
      title: `${navigation.state.params.event.name}`,
    })
  render() {
    return (
      <Text>Viewing detailed data for event with _id: {this.props.navigation.state.params.event._id}</Text>
    );
  }
}
