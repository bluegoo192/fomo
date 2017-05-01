import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class NewEvent extends Component {
  static navigationOptions = {
    title: 'New Event'
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.formItem}>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.label}>Start:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.label}>End:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Submit" color="#02BF2E" style={styles.bigButton}
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6
  },
  textInput: {
    backgroundColor: '#fff',
    flex: 1
  },
  label: {
    paddingRight: 6
  },
  child: {
    alignItems: 'center'
  },
  bigButton: {
    margin: 8
  },
  title: {
    fontSize: 20
  },
  card: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#dddddf',
    borderWidth: 1,
    marginBottom: 12
  }

});
