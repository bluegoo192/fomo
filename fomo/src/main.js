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
import Mine from './components/mine';
import Friends from './components/friends';

export default class app extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  constructor() {
    super();
    this.state = {
      current: "feed",
      test: 1
    };
  }
  changeView(view) {
    this.setState({ current: view });
  }
  getView() {
    var current;
    switch(this.state.current) {
      case "feed":
        current = <Feed navigation={this.props.navigation}></Feed>
        break;
      case "nearby":
        current = <Nearby></Nearby>
        break;
      case "mine":
        current = <Mine navigation={this.props.navigation}></Mine>
        break;
      case "friends":
        current = <Friends navigation={this.props.navigation}></Friends>
        break;
      default:
        current = <Feed></Feed>
    }
    return current;
  }
  render() {
    return (
      <View style={styles.container}>
        <Tabbar current={this.state.current} changeView={(v) => this.changeView(v)}></Tabbar>
        {this.getView()}
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
