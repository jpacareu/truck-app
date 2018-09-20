import React, { Component } from 'react'
import { Text, View, TextInput,StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import colors from '../../styles/colors';

export default class ConfirmationCodeScreen extends Component {
    static navigationOptions = {
        title: 'Confirm code',
    };
    state = {confCode: ''};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.confCodeText}>Please enter the confirmation code we send you</Text>
        <TextInput
            style={styles.confCode}
            placeholder="Code"
            onChangeText={confCode => this.setState({confCode})}
            />
        <Button 
            onPress={()=>{}}
            color={colors.white}
            buttonStyle={styles.confButton}
            title="Confirm"
        />
        <Button 
            onPress={()=>{}}
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
