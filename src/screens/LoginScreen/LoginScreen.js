import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableWithoutFeedback,Keyboard } from 'react-native'
import LoginForm from './LoginForm'

export default class LoginScreen extends Component {
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
              <LoginForm {...this.props}/>
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
