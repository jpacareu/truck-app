import React, {Component} from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'
import {StackActions, NavigationActions} from 'react-navigation';
import {Button, CheckBox} from 'react-native-elements'
import globalStyles from '#/styles';
import CONST from '$/constants';
import Service from '&/services';

export default class UserInformationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Javier',
            lastName: 'Paca',
            email: 'javier@email.com',
            client: true,
            phoneNumber: '',
            localCode: ''
        }
    }

    async componentDidMount() {
        const {phoneNumber, localCode} = await Service.getUserInfo();
        this.setState({phoneNumber, localCode})
    }

    navigate = () => {
        const {navigate, dispatch} = this.props.navigation;
        const {
            localCode,
            phoneNumber,
            email,
            name: username,
            lastName,
            client
        } = this.state;
        const role = client
            ? 'client'
            : 'provider';
        this._saveUserInfo({
            username,
            email,
            localCode,
            phoneNumber,
            lastName,
            role
        });

        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: CONST.navigationRoutes.Home})]
        });
        dispatch(resetAction);
    }

    _saveUserInfo = async(params) => {
			try {
        const data = await Service.addUser(params);
        console.log("User saved! ",data);
        return data.status;
			} catch (error) {
				console.log('Error: ',error);
			}
    }

    render() {
        const {name, email, client, lastName} = this.state;
        return (
            <View>
                <Text style={globalStyles.textCenter}>
                    You are only two steps close
                </Text>
                <View style={styles.inlineForm}>
                    <TextInput
                        value={name}
                        style={globalStyles.inputCenter}
                        placeholder="Enter your name"
                        onChangeText={name => this.setState({name})}/>
                </View>
                <View style={styles.inlineForm}>
                    <TextInput
                        value={lastName}
                        style={globalStyles.inputCenter}
                        placeholder="Enter your last name"
                        onChangeText={lastName => this.setState({lastName})}/>
                </View>
                <View style={styles.inlineForm}>
                    <TextInput
                        value={email}
                        style={globalStyles.inputCenter}
                        placeholder="Enter your email"
                        onChangeText={email => this.setState({email})}/>
                </View>
                <View style={styles.inlineForm}>
                    <CheckBox
                        title='Client'
                        checked={client}
                        onPress={() => this.setState({
                        client: !client
                    })}/>
                    <CheckBox
                        title='Provider'
                        checked={!client}
                        onPress={() => this.setState({
                        client: !client
                    })}/>
                </View>
                <Button
                    onPress={this.navigate}
                    buttonStyle={globalStyles.buttonPrimary}
                    raised
                    disabled={!name}
                    rightIcon={{
                    name: 'keyboard-arrow-right'
                }}
                    title='Continue'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inlineForm: {
        display: 'flex',
        flexDirection: 'column'
    }
});