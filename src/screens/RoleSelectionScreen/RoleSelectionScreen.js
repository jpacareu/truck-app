import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { AsyncStorage } from "react-native"
import axios from 'axios';
import colors from '../../styles/styles';
import CONST from '../../constants';

export default class RoleSelectionScreen extends Component {
  navigateToMap = () => {
    const { navigate } = this.props.navigation;
    this._retrieveData()
		//navigate('Home')
  }
  constructor(props){
    super(props);
    this._storeData()
  }
  componentDidMount(){
      this._retrieveData()
  }
  _storeData = async () => {
    
  }
  _retrieveData = async () => {
    console.log("_retrieveData: ",`${CONST.BASE_API}/auth`);
    try {
      const value = await axios.get(`${CONST.BASE_API}/auth`);
      if (value !== null) {
        console.log(value.data);
      }
     } catch (error) {
        console.log("Error: ", error);
     }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Which role will you take?</Text>
        <Button
        onPress={this.navigateToMap}
        buttonStyle={styles.button}
        raised
        icon={{name: 'perm-identity'}}
        title='Client' />
        <Button
        raised
        buttonStyle={styles.button}
        icon={{name: 'local-shipping'}}
        title='Provider' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%'
    },
    text: {
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 20
    },
    button:{
        marginBottom: 30,
        backgroundColor: colors.primary
      }
  })