import React from 'react';
import { Text, Button, View } from 'react-native';

export default class Friends extends React.Component {
    static navigationOptions = {
      title: 'Friends'
    };
    render() {
        return(
          <View style={{padding: 16}}>
            <Text>You have no friends</Text>
            <View style={{marginTop: 16}}>
              <Button
                onPress={() => this.props.navigation.navigate('AddFriend')}
                title="Add friend" color="#1B2AC4"
                accessibilityLabel="Add a friend"
              />
            </View>
          </View>
        );
    }
}
