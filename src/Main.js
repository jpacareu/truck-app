import React from 'react';
import {
    Text, View
} from 'react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ConfirmationCodeScreen from './screens/ConfirmationCodeScreen/ConfirmationCodeScreen';
import UserInformationScreen from './screens/UserInformationScreen/UserInformationScreen';
import RoleSelectionScreen from './screens/RoleSelectionScreen/RoleSelectionScreen';
import {
    createStackNavigator,
} from 'react-navigation';

const Main = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    RoleSelection: {
        screen: RoleSelectionScreen,
        navigationOptions : () => ({
            header: null 
        })
    },
    ConfirmationCode: {
        screen: ConfirmationCodeScreen
    },
    UserInformation: {
        screen: UserInformationScreen
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