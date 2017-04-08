import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function FeedCard(props) {
  return(
    <View style={styles.card}>
      <Text>{props.data.title}</Text>
    </View>
  );
}

export default class Feed extends React.Component {
  getFeed() {
    var stubItems = [
      {
        "title": "test post 1"
      },
      {
        "title": "test post 2"
      },
      {
        "title": "test post 3"
      }
    ];
    return(stubItems);
  }
    render() {
       var items = [];
       this.getFeed().forEach(function(i, index) {
         items.push(<FeedCard data={i} key={index} />);
       });
        return(
          <View style={styles.container}>
            {items}
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#ccc'
  }

});
