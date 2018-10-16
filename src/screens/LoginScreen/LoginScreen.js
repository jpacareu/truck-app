import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableWithoutFeedback,Keyboard, AsyncStorage } from 'react-native'
import LoginForm from './LoginForm'
import CONST from '../../constants';

export default class LoginScreen extends Component {
  state = {
    isLoggedIn: false
  }

  async componentDidMount() {
    const { navigate } = this.props.navigation;
    let isLoggedIn = await AsyncStorage.getItem("@MySuperStore:isLoggedIn");
    if (isLoggedIn !== null) {
      navigate(CONST.navigationRoutes.Home)
    }
  }

  onSubmitHandler = ({countryPhoneCode,phoneNumber}) => () => {
    // Send confirmation CODE
    if(this.phoneExist({countryPhoneCode,phoneNumber})){
      navigate(CONST.navigationRoutes.ConfirmationCode,{
        userExist: true
      })
    }
  }

  phoneExist = async (phoneInfo) => {
      const phoneExist = await axios.post(`${CONST.BASE_API}/phone/`,phoneInfo);
      return userExist
  }

  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
              <View style={styles.nisumLogoCircle}> 
                  <Text style={styles.nisumLogo}>n</Text> 
              </View>
          </View>
          <View style={styles.loginForm}>
              <LoginForm onSubmit={this.onSubmitHandler} {...this.props}/>
          </View>
        </View> 
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    backgroundColor: 'lightblue',
  },
  nisumLogoCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',  
    borderWidth: 2,
    width: 100,
    height: 100,
    borderRadius: 100/2,
    borderColor: 'darkgray'
  },
  nisumLogo: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  loginForm: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  }
});
