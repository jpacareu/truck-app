import React, { Component } from 'react'
import { Text, View, TextInput,StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

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
            placeholder="Enter the confirmation code"
            onChangeText={confCode => this.setState({confCode})}
            />
        <Button 
            onPress={()=>{}}
            title="Confirm"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      padding: 15,
      display: 'flex',
      justifyContent: 'center'
  },
  confCodeText:{
      fontSize: 15,
      marginBottom: 10
  },
  confCode: {
      fontSize: 15,
      marginBottom: 10
  }
})
