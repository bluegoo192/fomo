/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/app.js';

export default class fomo extends Component {
  render() {
    return (
      <App></App>
    );
  }
}

AppRegistry.registerComponent('fomo', () => fomo);
