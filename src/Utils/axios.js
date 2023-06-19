import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { devEnv } from '../Config/env';


const headers = {
    'Content-Type' : 'application/json'
};
const AxiosInstance = axios.create({
    baseURL: 'https://wepair-api.onrender.com',
    headers
});

AxiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('Uid');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default AxiosInstance;




