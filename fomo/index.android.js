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
import Event from './src/event.js';

const fomo = StackNavigator({
  Home: { screen:  Main, path: 'main' },
  Event: {
    path: 'events/:event',
    screen: Event,
  },
});

AppRegistry.registerComponent('fomo', () => fomo);
