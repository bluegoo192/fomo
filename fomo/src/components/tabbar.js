import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Tab(props) {
  return(
    <TouchableOpacity style={styles.tab} onPress={() => {return}}>
      <Text style={{textAlign: 'center'}}>{props.name}</Text>
    </TouchableOpacity>
  );
}

export default class Tabbar extends React.Component {
    render() {
        return(
          <View style={styles.tabbar}>
            <Tab name="Feed" />
            <Tab name="Nearby" />
            <Tab name="Friends" />
            <Tab name="My Events" />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000'
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    padding: 12
  }
});
