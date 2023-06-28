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
    const response = await fetch('https://wepair-api.onrender.com/api/v1/user/login',
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

const getUserDetails = async()=>{
    const token = await AsyncStorage.getItem('Uid');
    const response = await fetch('https://wepair-api.onrender.com/api/v1/posts',
    {
        method:'GET',
        headers: {
            'auth-token': token
        }
    });

    const res = response.json();
    return res;
}






export {
    signUp,
    signIn,
    getUserDetails
} 