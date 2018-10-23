
import React from 'react'
import Service from '&/services';
import CONST from '$/constants';
 
const LogoutScreen =  ({navigation}) => {
  Service.logout();
  navigation.navigate(CONST.routes.Auth)
  return null
}

export default LogoutScreen