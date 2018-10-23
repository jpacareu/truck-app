import {
    AsyncStorage
} from 'react-native';
import axios from 'axios';
import CONST from '$/constants';

export default {
    getUserInfo: async () => {
            const user = await AsyncStorage.getItem('@MySuperStore:user');
            if (user) {
                return JSON.parse(user);
            }
            return null;
        },
        setUserInfo: async (userData) => {
                const user = await AsyncStorage.setItem('@MySuperStore:user', JSON.stringify(userData));
                if (user) {
                    return JSON.parse(user);
                }
                return null;
        },
        isLoggedIn: async (userData) => {
                const isLoggedIn = await AsyncStorage.getItem('@MySuperStore:isLoggedIn');
                return isLoggedIn;
            },
        addUser: async (userData) => {
                const result = await axios.post(`${CONST.BASE_API}/user`, userData)
                return result.data;
            },
        logout: async () => {
            try {
                const result = await AsyncStorage.multiRemove(['@MySuperStore:user', '@MySuperStore:isLoggedIn']);
                return true;
            } catch (error) {
                console.log("Error :",error)
                return false;
            }
        }
}