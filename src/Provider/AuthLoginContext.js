import React, { createContext, useContext, useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {sharevalue,allUnresolved,allresolved,userInformation} from '../Utils/requests';

export const AuthLoginContext = createContext({});
export const GlobalAuthContext = ({children})=>{ 

    const [changes,setChanges] = useState('');
    const [userDetail,setUserDetails] = useState('');
    const [switched,setWitched] = useState('init');
    const [fname,setFname] = useState('');
    const [lname,setFLame] = useState('');
    const [email,setEmail] = useState('');
    const [bio,setBio] = useState('');






    useEffect(()=>{
        evalScreen();
        // getUserDetails();
        // checkChanges();
    },[switched,changes])

    const evalScreen = async()=>{
        const token = await AsyncStorage.getItem('Uid');
        if(token){
            setWitched('avail');
        }else{
            setWitched('notAvail');
        }
    }

    const getUserDetails = ()=>{
        AsyncStorage.getItem('Uid').then(token =>{

            if(token){
                userInformation(token).then(res=>{
                    setUserDetails(res);
                })
            }else{
                
            }
        })
    }

    const getShareValue = async ()=>{
        const share = await sharevalue();
        setShare(share.msg);
        
    }
    const getAllTrans = async () => {
        const trans = await allUnresolved();
        setTransactions(trans);
    }

    const plotGraph = async()=>{
        const data = await allresolved();
        setGraphData(data);
    }
    
      const checkChanges = ()=>{
        getShareValue();
        getAllTrans();
        plotGraph();
      }


    
    
    
    return <AuthLoginContext.Provider value={{switched,setWitched,setFname}}>
        {children}
    </AuthLoginContext.Provider>
}
