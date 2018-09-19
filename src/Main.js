import React from 'react';
import {
    Text
} from 'react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ConfirmationCodeScreen from './screens/ConfirmationCodeScreen/ConfirmationCodeScreen';
import {
    createStackNavigator,
} from 'react-navigation';

const Main = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    ConfirmationCode: {
        screen: ConfirmationCodeScreen
    },
    Login: {
        screen: LoginScreen,
        navigationOptions : () => ({
            header: null // React Component to override the header
        })
    },
}, {
    initialRouteName: 'Login',
});

export default Main;