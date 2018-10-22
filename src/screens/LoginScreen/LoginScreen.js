import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import LoginForm from './LoginForm'
import CONST from '$/constants'
import axios from 'axios'
import Toaster, {ToastStyles} from 'react-native-toaster'
import Service from '&/services';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    componentDidMount() {
        this._retrieveAuth()
    }

    _retrieveAuth = async() => {
        try {
            const isLoggedIn = await Service.isLoggedIn();
            console.log("Is logged in?", isLoggedIn);
            if (isLoggedIn === true) {
                this
                    .props
                    .navigation
                    .navigate(CONST.navigationRoutes.Home)
            }
        } catch (error) {
            console.log('Error isLoggedIn: ', error);
        }
    }

    sendConfirmationCode = (params) => {
        // TODO
    }

    onSubmitHandler = ({localCode, phoneNumber}) => async () => {
        // Send confirmation CODE
        const {navigate} = this.props.navigation;
				let userExist = await this.phoneExist({localCode, phoneNumber});
				console.log("userExist: ",userExist);
				this.sendConfirmationCode({localCode, phoneNumber});
				navigate(CONST.navigationRoutes.ConfirmationCode, {
						userExist: userExist,
						localCode,
						phoneNumber
				});
    }
		
		_saveUserInformation = async (userInfo) => {
			const json = await Service.setUserInfo(userInfo);
			return json;
		}

    phoneExist = async(phonePostData) => {
        try {
            const {data: phoneInfo} = await axios.post(`${CONST.BASE_API}/phone`, phonePostData);
						console.log("phoneInfo: ",phoneInfo);
						if(phoneInfo && phoneInfo.phoneExist){
							this._saveUserInformation(phoneInfo.userInfo)
						}
            return phoneInfo && phoneInfo.phoneExist
        } catch (error) {
            console.log("Error: ", error);
            return false; 
        }
    }

    render() {
        // const failedAuth = this.props.navigation.getParam('failedAuth', false);
        // this.props.navigation.setParams('failedAuth',false);
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
        flexDirection: 'column'
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        backgroundColor: 'lightblue'
    },
    nisumLogoCircle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderColor: 'darkgray'
    },
    nisumLogo: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    loginForm: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    }
});
