import React, { Component } from 'react'
import { Text, View, TextInput,StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import colors from '../../styles/colors';

export default class ConfirmationCodeScreen extends Component {
    static navigationOptions = {
        title: 'Confirm code',
    };
    state = {confCode: '1234'};
  navigate = () => {
    const { navigate } = this.props.navigation;
    navigate('RoleSelection',{status: true})
  }
  sendAgainHandler = () => {
    Alert.alert(
      'Send code again',
      'Your code was again!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  render() {
    const {confCode} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.confCodeText}>Please enter the confirmation code we send you</Text>
        <TextInput
            value={confCode}
            style={styles.confCode}
            placeholder="Code"
            onChangeText={confCode => this.setState({confCode})}
            />
        <Button 
            onPress={this.navigate}
            color={colors.white}
            buttonStyle={styles.confButton}
            title="Confirm"
            />
        <Button 
            onPress={this.sendAgainHandler}
            color={colors.primary}
            buttonStyle={styles.sendAgainButton}
            title="Send code again?"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      padding: 15,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
  },
  confCodeText:{
      fontSize: 15,
      marginBottom: 30,
      textAlign: 'center'
    },
    confCode: {
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 30,
      width: '50%',
      alignSelf: 'center'
  },
  confButton: {
    backgroundColor: colors.primary,
  },
  sendAgainButton:{
    backgroundColor: 'transparent',
  }
})
