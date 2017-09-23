import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

export default class Mine extends React.Component {
    static navigationOptions = {
      title: 'Mine'
    };
    render() {
        return(
          <View>
            <Text>You have no events</Text>
            <Button
              onPress={() => this.props.navigation.navigate('NewEvent')}
              title="Create" color="#841584" style={styles.bigButton}
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
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
