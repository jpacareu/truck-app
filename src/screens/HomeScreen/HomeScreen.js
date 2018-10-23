import React from 'react';
import {View, Button, Text, NavigationBar} from 'react-native';
import MainMap from 'c/MainMap/MainMap';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <MainMap/>
            </View>
        );
    }
}