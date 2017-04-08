import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Feed from './components/feed';
import Nearby from './components/nearby';
import Tabbar from './components/tabbar';

export default class app extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  constructor() {
    super();
    this.state = {
      current: "feed"
    };
  }
  render() {
    var current;
    switch(this.state.current) {
      case "feed":
        current = <Feed></Feed>
        break;
      case "nearby":
        current = <Nearby></Nearby>
        break;
      default:
        current = <Feed></Feed>
    }
    return (
      <View style={styles.container}>
        <Tabbar></Tabbar>
        {current}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  }, container: {
    flex: 1,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
