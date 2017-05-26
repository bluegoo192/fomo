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
import NewEvent from './src/newevent.js';
import AddFriend from './src/addfriend.js';

const fomo = StackNavigator({
  Home: { screen:  Main, path: 'main' },
  Event: {
    path: 'events/:event',
    screen: Event,
  },
  NewEvent: {
    path: 'events/new',
    screen: NewEvent,
  },
  AddFriend: {
    path: 'friends/add',
    screen: AddFriend,
  },
});

AppRegistry.registerComponent('fomo', () => fomo);
