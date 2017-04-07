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
import { StackNavigator } from 'react-navigation';
import Main from './src/main.js';

const fomo = StackNavigator({
  Home: { screen:  Main, path: 'main' }
});

AppRegistry.registerComponent('fomo', () => fomo);
