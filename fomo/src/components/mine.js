import React from 'react';
import { Text, Button, View } from 'react-native';

 const createEvent = () => { return; };

export default class Mine extends React.Component {
    static navigationOptions = {
      title: 'Mine'
    };
    render() {
        return(
          <View>
            <Text>You have no events</Text>
            <Button
              onPress={createEvent}
              title="Create" color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        );
    }
}
