import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView } from 'react-native';

//const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

function FeedCard(props) {
  return(
    <View style={styles.card}>
      <View style={styles.cardHeader, styles.padded}>
        <Text style={styles.title}>{props.data.name}</Text>
        <Text>{props.data.start}</Text>
      </View>
      <Image
        style={{alignSelf: 'stretch', height: 160}}
        resizeMode="cover"
        source={{uri: props.data.image_url}}
      />
      <Text style={styles.padded}>{props.data.description}</Text>
      <View style={styles.padded}>
        <Text>Created by {props.data.creator} on {props.data.creation_date}</Text>
      </View>
    </View>
  );
}

export default class Feed extends React.Component {
  getFeed() {
    var stubItems = [
      {
        "_id": "590681476fe5d832abbf9807",
        "modification_date": "2017-05-01T00:28:55.901Z",
        "creation_date": "2017-05-01T00:28:55.896Z",
        "creator": "ghost",
        "name": "full test event",
        "start": "1970-01-01T03:43:54.324Z",
        "end": "1970-01-01T04:10:39.039Z",
        "publicity": "PUBLIC",
        "image_url": "http://www.bizbash.com/content/editorial/storyimg/big/sjp_4063.JPG",
        "description": "a test event",
        "__v": 0,
        "posts": [],
        "invitees": [],
        "admins": []
      },
      {
        "_id": "590681476fe5d832abbf9807",
        "modification_date": "2017-05-01T00:28:55.901Z",
        "creation_date": "2017-05-01T00:28:55.896Z",
        "creator": "ghost",
        "name": "Detailed Event",
        "start": "1970-01-01T03:43:54.324Z",
        "end": "1970-01-01T04:10:39.039Z",
        "publicity": "PUBLIC",
        "image_url": "https://myibiza.tv/wp-content/uploads/sites/12/2016/12/ushuaia_closing_party_ibiza_2016_featured.jpg",
        "description": "This is a longer event description.   title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newl",
        "__v": 0,
        "posts": [],
        "invitees": [],
        "admins": []
      },
      {
        "_id": "590681476fe5d832abbf9807",
        "modification_date": "2017-05-01T00:28:55.901Z",
        "creation_date": "2017-05-01T00:28:55.896Z",
        "creator": "ghost",
        "name": "Detailed Event",
        "start": "1970-01-01T03:43:54.324Z",
        "end": "1970-01-01T04:10:39.039Z",
        "publicity": "PUBLIC",
        "image_url": "http://weknowyourdreams.com/images/party/party-08.jpg",
        "description": "This is a longer event description.   title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newl",
        "__v": 0,
        "posts": [],
        "invitees": [],
        "admins": []
      }
    ];
    return(stubItems);
  }
    render() {
       var items = [];
       this.getFeed().forEach(function(i, index) {
         items.push(<FeedCard data={i} key={index} style={styles.child}/>);
       });
      return(
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
          {items}
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6
  },
  padded: {
    padding: 8
  },
  content: {
    alignItems: 'center'
  },
  child: {
    alignItems: 'center'
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20
  },
  card: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#dddddf',
    borderWidth: 1,
    marginBottom: 12
  }

});
