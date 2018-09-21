import React from 'react';
import { View } from 'react-native';
import MainMap from '../../components/MainMap/MainMap';

export default class HomeScreen extends React.Component {
 static navigationOptions = {
    title: 'Select destination',
  };
  render() {
    return (
      <View>
          <MainMap />
      </View>
    );
  }
}