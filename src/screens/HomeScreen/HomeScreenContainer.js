import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'
import LogoutScreen from 's/LogoutScreen/LogoutScreen'
import DrawerScreen from 'c/DrawerScreen'

export default createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Logout: {
    screen: LogoutScreen,
  },
},{
  initialRouteName: 'Home',
  contentComponent: DrawerScreen,
  drawerWidth: 300
});