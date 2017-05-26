import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class Event extends Component {
  static navigationOptions = ({navigation}) => ({
      title: `${navigation.state.params.event.name}`,
    })
  render() {
    var invited = "No one has been invited to this event yet"
    if (this.props.navigation.state.params.event.invitees.length > 0) {
      invited = "";
      //todo: changed invited string
    }
    return (
      <ScrollView>
        <Image
          style={{alignSelf: 'stretch', height: 200}}
          resizeMode="cover"
          source={{uri: this.props.navigation.state.params.event.image_url}}
        />
        <View style={{padding: 12}}>
          <View style={{flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: 24, color: '#1E3238'}}>{this.props.navigation.state.params.event.name}</Text>
          </View>
          <Text>Created by <Text style={{color: '#02ADE6'}}>{this.props.navigation.state.params.event.creator}</Text> on {this.props.navigation.state.params.event.creation_date}</Text>
          <Text>Runs from {this.props.navigation.state.params.event.start} to {this.props.navigation.state.params.event.end}</Text>
        </View>
        <View style={{padding: 16, backgroundColor: '#fefefe'}}>
          <Text style={{fontSize: 16}}>{this.props.navigation.state.params.event.description}</Text>
          <Text style={{fontSize: 20, marginTop: 16}}>Invited:</Text>
          <Text>{invited}</Text>
        </View>
      </ScrollView>
    );
  }
}
