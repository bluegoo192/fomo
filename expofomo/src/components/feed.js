import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

//const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


function FeedCard(props) {
  return(
    <View style={styles.card}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Event', {event: props.data})}>
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
      </TouchableOpacity>
      <View style={styles.padded}>
        <Text>Created by {props.data.creator} on {props.data.creation_date}</Text>
      </View>
    </View>
  );
}

export default class Feed extends React.Component {
    render() {
       var items = [];
       let nav = this.props.navigation;
       this.props.events.forEach(function(i, index) {
         items.push(<FeedCard data={i} key={index} style={styles.child} navigation={nav}/>);
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
