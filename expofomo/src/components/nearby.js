import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 45,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class Nearby extends React.Component {
    static navigationOptions = {
      title: 'Nearby'
    }
    constructor() {
      super();
      this.state = {
        markers: [
          {
            key: "000",
            latlng: {
              latitude: 34.413544,
              longitude: -119.856539,
            }
          }
        ]
      }
    }
    render() {
        return(
          <View style ={styles.container}>
            <MapView style={styles.map}
              initialRegion={{
                latitude: 34.413544,
                longitude: -119.856539,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
                {this.state.markers.map(marker => (
                  <MapView.Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                  />
                ))}
              </MapView>
          </View>
        );
    }
}
