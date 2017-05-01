import React from 'react';
import { Text, Button, View } from 'react-native';

export default class Friends extends React.Component {
    static navigationOptions = {
      title: 'Friends'
    };
    render() {
        return(
          <View>
            <Text>You have no friends</Text>
            <Button
              onPress={() => this.props.navigation.navigate('NewEvent')}
              title="Add friend" color="#1B2AC4"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        );
    }
}
