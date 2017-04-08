import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function FeedCard(props) {
  return(
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text>{props.data.title}</Text>
        <Text>{props.data.time}</Text>
      </View>
    </View>
  );
}

export default class Feed extends React.Component {
  getFeed() {
    var stubItems = [
      {
        "title": "test post 1",
        "time": "8:03 am"
      },
      {
        "title": "test post 2",
        "time": "Yesterday"
      },
      {
        "title": "test post 3",
        "time": "3 days ago"
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
    alignItems: 'center',
    padding: 6
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#dddddf',
    borderWidth: 1,
    marginTop: 8,
    padding: 6
  }

});
