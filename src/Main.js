import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import AuthLoadingScreen from './screens/LoginScreen/AuthLoadingScreen';
import ConfirmationCodeScreen from './screens/ConfirmationCodeScreen/ConfirmationCodeScreen';
import UserInformationScreen from './screens/UserInformationScreen/UserInformationScreen';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';

const AppStack = createStackNavigator({
    Home: {
        screen: HomeScreen
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