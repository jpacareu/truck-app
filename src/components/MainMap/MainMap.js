import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE =  -33.4569400;
const LONGITUDE = -70.6482700;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MainMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <MapView
            provider={this.props.provider}
            style={styles.map}
            initialRegion={this.state.region}
          >
          <TextInput
            style={styles.searchInput}
            placeholder={'Where to?'}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          </MapView>
      </View>
    );
  }
}

MainMap.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchInput: {
    position: 'absolute',
    top: 50,
    left: 0,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'white',
    height: 50,
    marginLeft: '10%',
    marginRight: '10%',
    width: '80%',
    shadowOffset: {width: 0,height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4
  },
  map: {
    width,
    height
  },
});

export default MainMap;