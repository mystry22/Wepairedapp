import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { devEnv } from '../Config/env';


const headers = {};
const AxiosInstance = axios.create({
    baseURL: 'https://mystry22-triggerbackend.onrender.com',
    headers
});

AxiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('userToken');

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




