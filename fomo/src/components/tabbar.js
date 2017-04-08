import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Tab(props) {
  return(
    <TouchableOpacity style={styles.tab} onPress={() => props.handlePress()}>
      <Text style={{textAlign: 'center'}}>{props.name}</Text>
    </TouchableOpacity>
  );
}

export default class Tabbar extends React.Component {
    render() {
        return(
          <View style={styles.tabbar}>
            <Tab name="Feed" handlePress={() => this.props.changeView("feed")}/>
            <Tab name="Nearby" handlePress={() => this.props.changeView("nearby")}/>
            <Tab name="Friends" handlePress={() => this.props.changeView("feed")}/>
            <Tab name="My Events" handlePress={() => this.props.changeView("feed")}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fefeff'
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    padding: 12
  }
});
