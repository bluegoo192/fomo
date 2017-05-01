import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class Event extends Component {
  static navigationOptions = {
    title: 'Event'
  }
  render() {
    return (
      <Text>Event</Text>
    );
  }
}
