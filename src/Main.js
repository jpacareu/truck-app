import React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreenContainer';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import AuthLoadingScreen from './screens/LoginScreen/AuthLoadingScreen';
import ConfirmationCodeScreen from './screens/ConfirmationCodeScreen/ConfirmationCodeScreen';
import UserInformationScreen from './screens/UserInformationScreen/UserInformationScreen';
import {createStackNavigator, createSwitchNavigator, DrawerActions} from 'react-navigation';
import {Icon} from 'react-native-elements';

const AppStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Select your destination',
            headerLeft: 
            <Icon
            iconStyle={{marginLeft: 10}}
                name={navigation.state.isDrawerOpen ? 'close' : 'menu'}
                color='black'
                onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}/>
          })
    }
});

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({header: null})
    }, 
    ConfirmationCode: {
        screen: ConfirmationCodeScreen
    },
    UserInformation: {
        screen: UserInformationScreen,
        navigationOptions: () => ({header: null})
    }
}, {initialRouteName: 'Login'});

export default createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  );