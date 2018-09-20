import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet  } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Button } from 'react-native-elements'
import colors from '../../styles/colors';

export default class LoginForm extends Component {
  
  state = {
      countryPhoneCode: '56',
      phoneNumber: '999999999',
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
            <Text style={styles.phoneCode}>
                {`+${countryPhoneCode} `}
            </Text>
            <TextInput
                keyboardType="phone-pad"
                style={styles.phoneNumber}
                value={phoneNumber}
                placeholder="Enter your phone number"
                onChangeText={phoneNumber => this.setState({phoneNumber})}
            />
        </View>
            <Button
            disabled={!phoneNumber.length}
            buttonStyle={styles.submitButton}
            onPress={()=> navigate('ConfirmationCode')}
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
        alignContent: 'center',
        marginTop: 30,
        marginLeft: '10%',
        marginRight: '10%'
    },
    phoneCode: {
        fontSize:15,
        paddingTop: 3,
        fontWeight: 'bold'
    },
    phoneNumber:{
        flex: 1,
        fontSize: 15
    },
    submitButton:{
        marginTop: 30,
        display: 'flex',
        backgroundColor: colors.primary
    },
});