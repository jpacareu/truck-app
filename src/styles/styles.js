import { StyleSheet } from 'react-native';

const colors = {
    primary: '#5eb9ff',
    white: 'white'
}

const globalStyles = StyleSheet.create({  
    buttonPrimary: {
        backgroundColor: colors.primary,
    },
    textCenter: {
        fontSize: 20,
        textAlign: 'center'
    },
    inputCenter: {
        width: '80%',
        margin: 10,
        textAlign: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20
    }
});


export { colors };
export default globalStyles;