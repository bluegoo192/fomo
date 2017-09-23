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
    title: 'Home',
    headerStyle: { marginTop: Expo.Constants.statusBarHeight }
  }
  constructor() {
    super();
    this.state = {
      current: "feed",
      test: 1,
      events: [
        {
          "_id": "590681476fe5d832abbf9807",
          "modification_date": "2017-05-01T00:28:55.901Z",
          "creation_date": "2017-05-01T00:28:55.896Z",
          "creator": "ghost",
          "name": "full test event",
          "start": "1970-01-01T03:43:54.324Z",
          "end": "1970-01-01T04:10:39.039Z",
          "publicity": "PUBLIC",
          "image_url": "http://www.bizbash.com/content/editorial/storyimg/big/sjp_4063.JPG",
          "description": "a test event",
          "__v": 0,
          "posts": [],
          "invitees": [],
          "latlng": {
            "latitude": 34.413331,
            "longitude": -119.859929,
          },
          "admins": []
        },
        {
          "_id": "590681476fe5d832abbf9807",
          "modification_date": "2017-05-01T00:28:55.901Z",
          "creation_date": "2017-05-01T00:28:55.896Z",
          "creator": "ghost",
          "name": "Detailed Event",
          "start": "1970-01-01T03:43:54.324Z",
          "end": "1970-01-01T04:10:39.039Z",
          "publicity": "PUBLIC",
          "image_url": "https://myibiza.tv/wp-content/uploads/sites/12/2016/12/ushuaia_closing_party_ibiza_2016_featured.jpg",
          "description": "This is a longer event description.   title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newl",
          "__v": 0,
          "posts": [],
          "invitees": [],
          "latlng": {
            "latitude": 34.413544,
            "longitude": -119.856539,
          },
          "admins": []
        },
        {
          "_id": "590681476fe5d832abbf9807",
          "modification_date": "2017-05-01T00:28:55.901Z",
          "creation_date": "2017-05-01T00:28:55.896Z",
          "creator": "ghost",
          "name": "Detailed Event",
          "start": "1970-01-01T03:43:54.324Z",
          "end": "1970-01-01T04:10:39.039Z",
          "publicity": "PUBLIC",
          "image_url": "http://weknowyourdreams.com/images/party/party-08.jpg",
          "description": "This is a longer event description.   title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newl",
          "__v": 0,
          "posts": [],
          "latlng": {
            "latitude": 34.410003,
            "longitude": -119.865337,
          },
          "invitees": [],
          "admins": []
        }
      ]
    };
  }
  changeView(view) {
    this.setState({ current: view });
  }
  getView() {
    var current;
    switch(this.state.current) {
      case "feed":
        current = <Feed events={this.state.events} navigation={this.props.navigation}></Feed>
        break;
      case "nearby":
        current = <Nearby events={this.state.events} navigation={this.props.navigation}></Nearby>
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
