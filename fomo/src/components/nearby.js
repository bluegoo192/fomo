import React from 'react';
import { Text } from 'react-native';
import MapView from 'react-native-maps';

export default class Nearby extends React.Component {
    static navigationOptions = {
      title: 'Nearby'
    };
    render() {
        return(
            <Text>Nearby</Text>
        );
    }
}
