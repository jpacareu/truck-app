import React, {Component} from 'react'
import {Text, View, TextInput, StyleSheet, Alert} from 'react-native'
import {Button} from 'react-native-elements'
import {StackActions, NavigationActions} from 'react-navigation';
import globalStyles, {colors} from '#/styles';
import CONST from '$/constants';

export default class ConfirmationCodeScreen extends Component {
    static navigationOptions = {
        title: 'Confirm code'
    };
    constructor(props) {
        super(props);
        this.state = {
            confCode: '1234',
            userExist: props
                .navigation
                .getParam('userExist', '')
        };

    }

    confirmCode = () => {
        const {navigate, dispatch} = this.props.navigation;
        const {confCode, userExist} = this.state;
        console.log("userExist: ", userExist);
        if (confCode === CONST.confirmationCode) {
            if (userExist) {
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: CONST.navigationRoutes.Home})]
                });
                dispatch(resetAction);
            } else {
                navigate(CONST.navigationRoutes.UserInformation, {status: true})
            }
        } else {
            Alert.alert('Sorry!', 'Your code is incorrect!', [
                {
                    text: 'OK',
                    onPress: () => navigate(CONST.navigationRoutes.Login, {failedAuth: true})
                }
            ], {cancelable: false})
        }
    }

    sendConfirmationCode = () => {
        // SEND CONFIRMATION CODE
    }

    sendAgainHandler = () => {
        const {localCode, phoneNumber} = this.state;
        Alert.alert('Send code again', 'Do you want to receive a new confirmation code?', [
            {
                text: 'Send',
                onPress: () => this.sendConfirmationCode({localCode, phoneNumber})
            }
        ], {cancelable: false})
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
                    onChangeText={confCode => this.setState({confCode})}/>
                <Button
                    onPress={this.confirmCode}
                    color={colors.white}
                    buttonStyle={styles.confButton}
                    title="Confirm"/>
                <Button
                    onPress={this.sendAgainHandler}
                    color={colors.primary}
                    buttonStyle={styles.sendAgainButton}
                    title="Send code again?"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    confCodeText: {
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
        backgroundColor: colors.primary
    },
    sendAgainButton: {
        backgroundColor: 'transparent'
    }
})
