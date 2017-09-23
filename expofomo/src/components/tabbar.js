import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Tab(props) {
  var myStyle=[styles.tab];
  var textStyle = [{textAlign: 'center'}];
  if (props.name.toLowerCase() === props.current.toLowerCase()) {
    myStyle.push(styles.activeTab);
    textStyle.push(styles.activeTabText);
  }
  return(
    <TouchableOpacity style={myStyle} onPress={() => props.handlePress()}>
      <Text style={textStyle}>{props.name}</Text>
    </TouchableOpacity>
  );
}

export default class Tabbar extends React.Component {
    render() {
        return(
          <View style={styles.tabbar}>
            <Tab name="Feed" current={this.props.current} handlePress={() => this.props.changeView("feed")}/>
            <Tab name="Nearby" current={this.props.current} handlePress={() => this.props.changeView("nearby")}/>
            <Tab name="Friends" current={this.props.current} handlePress={() => this.props.changeView("friends")}/>
            <Tab name="My Events" current={this.props.current} handlePress={() => this.props.changeView("mine")}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f1f1f3'
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    padding: 12
  },
  activeTab: {},
  activeTabText: {
    color: '#000'
  }
});
