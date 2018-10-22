import React from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ConfirmationCodeScreen from './screens/ConfirmationCodeScreen/ConfirmationCodeScreen';
import UserInformationScreen from './screens/UserInformationScreen/UserInformationScreen';
import {createStackNavigator} from 'react-navigation';

const Main = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    ConfirmationCode: {
        screen: ConfirmationCodeScreen
    },
    UserInformation: {
        screen: UserInformationScreen,
        navigationOptions: () => ({header: null})
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            header: null // React Component to override the header
        })
    }
}, {initialRouteName: 'Login'});

export default Main;