import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

//const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

function FeedCard(props) {
  return(
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text>{props.data.title}</Text>
        <Text>{props.data.time}</Text>
      </View>
      <Image
        style={{alignSelf: 'stretch', height: 160}}
        resizeMode="cover"
        source={{uri: props.data.uri}}
      />
    </View>
  );
}

export default class Feed extends React.Component {
  getFeed() {
    var stubItems = [
      {
        "title": "test post 1",
        "time": "8:03 am",
        "uri": "https://myibiza.tv/wp-content/uploads/sites/12/2016/12/ushuaia_closing_party_ibiza_2016_featured.jpg"
      },
      {
        "title": "test post 2",
        "time": "Yesterday",
        "uri": "http://weknowyourdreams.com/images/party/party-08.jpg"
      },
      {
        "title": "test post 3",
        "time": "3 days ago",
        "uri": "http://www.bizbash.com/content/editorial/storyimg/big/sjp_4063.JPG"
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
