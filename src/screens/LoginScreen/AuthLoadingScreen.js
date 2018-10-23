import React from 'react';
import {
  ActivityIndicator,
  View,
  Text
} from 'react-native';
import Service from '&/services';
import globalStyles, { colors } from '#/styles';
import CONST from '$/constants';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const isLoggedIn = await Service.isLoggedIn();
    this.props.navigation.navigate(isLoggedIn ? CONST.routes.App : CONST.routes.Auth);
  };

  render() {
    return (
      <View style={globalStyles.authPage}>
        <Text style={globalStyles.authPage__text}>Loading...</Text>
        <ActivityIndicator
            size="large" 
            color={colors.primary} />
      </View>
    );
  }
}

export default AuthLoadingScreen;