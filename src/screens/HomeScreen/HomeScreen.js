import React from 'react';
import { View } from 'react-native';
import MainMap from '../../components/MainMap/MainMap';

export default class HomeScreen extends React.Component {
 static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View>
          <MainMap />
      </View>
    );
  }
}