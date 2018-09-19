import React, { Component } from 'react'
import { Text, View, TextInput, Picker, StyleSheet  } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Button } from 'react-native-elements'

export default class LoginForm extends Component {
  
  state = {
      countryPhoneCode: '56',
      phoneNumber: '',
      listPhone: [
        {
            label: 'Cuba',
            value: '53',
        },
        {
            label: 'Chile',
            value: '56',
        },
        {
            label: 'USA',
            value: '1',
        },
        {
            label: 'México',
            value: '52',
        }
    ],
  }
  render() {
    const {countryPhoneCode,phoneNumber, listPhone} = this.state;
    const { navigate } = this.props.navigation;

    return (
      <View>
        <View style={styles.formPhone}>
        <RNPickerSelect
            hideIcon={false}
            items={listPhone}
            onValueChange={countryPhoneCode => this.setState({countryPhoneCode})}
            value={countryPhoneCode}
            />
            <Text style={styles.phoneCode}>
                {`+${countryPhoneCode} `}
            </Text>
            <TextInput
                keyboardType="phone-pad"
                style={styles.phoneNumber}
                placeholder="Enter your phone number"
                onChangeText={phoneNumber => this.setState({phoneNumber})}
            />
        </View>
            <Button
            disabled={!phoneNumber.length}
            buttonStyle={styles.submitButton}
            onPress={()=>{
                navigate('ConfirmationCode', { name: 'Jane' });
            }}
            large
            title="Login"
            />
        </View>

    )
  }
}

const styles = StyleSheet.create({
    formPhone: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    phoneCode: {
        fontWeight: 'bold',
        fontSize:15
    },
    phoneNumber:{
        flex: 1,
        fontSize: 15
    },
    submitButton:{
        marginTop: 30,
        display: 'flex',
    },
});