import React,{useContext} from 'react';
import {AuthLoginContext} from '../Provider/AuthLoginContext';
import AsyncStorage from '@react-native-async-storage/async-storage';




const signUp = async(data)=>{
    const response = await fetch('https://wepair-api.onrender.com/api/v1/user/register',
    {
        method:'POST', 
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const res = response.json();
    return res;
    
    
    
}

const signIn = async(data)=>{
    const res = await AxiosInstance.post('/api/v1/user/login',data);
    return res.data;
    
}






export {
    signUp,
    signIn,
} 