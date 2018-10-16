import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import globalStyles from '../../styles/styles';

export default class UserInformationScreen extends Component {
  state = { name: 'Javier',email: 'javier@email.com'}
  navigate = () => {
    const { navigate } = this.props.navigation;
    navigate('RoleSelection')
  }

  render() {
    const { name, email } = this.state;
    return (
      <View>
        <Text style={globalStyles.textCenter}> You are only two steps close </Text>
        <View style={styles.inlineForm}>
            <TextInput
              value={name}
              style={globalStyles.inputCenter}
              placeholder="Enter your name"
              onChangeText={name => this.setState({name})}
            />
        </View>
        <View style={styles.inlineForm}>
            <TextInput
              value={email}
              style={globalStyles.inputCenter}
              placeholder="Enter your email"
              onChangeText={email => this.setState({email})}
            />
        </View>
        <Button
          onPress={this.navigate}
          buttonStyle={globalStyles.buttonPrimary}
          raised
          disabled={!name}
          rightIcon={{name: 'keyboard-arrow-right'}}
          title='Continue' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inlineForm: {
      display: 'flex',
      flexDirection: 'column',
  }
});