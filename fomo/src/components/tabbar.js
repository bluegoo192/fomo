import React from 'react';
import { Text, View } from 'react-native';

function Tab(props) {
  return(
    <Text>Tab: {this.props.name}</Text>
  );
}

export default class Tabbar extends React.Component {
    render() {
        return(
            <View>
              <Tab name="one"/>
              <Tab name="two"/>
            </View>
        );
    }
}
