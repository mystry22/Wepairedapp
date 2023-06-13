import AxiosInstance from './axios';



const signUp = async(data)=>{
    const res = await AxiosInstance.post('/api/registration/register',data);
    return res.data;
    
}

const signIn = async(data)=>{
    const res = await AxiosInstance.post('/api/auth/userlogin',data);
    return res.data;
    
}


const sharevalue = async()=>{
    const res = await AxiosInstance.get('/api/deli/sharevalue');
    return res.data;
}
const addfunds = async(data)=>{
    const res = await AxiosInstance.post('/api/deli/addition',data);
    return res.data;
}

const removefunds = async(data)=>{
    const res = await AxiosInstance.post('/api/deli/deduct',data);
    return res.data;
}

const admincount = async()=>{
    const res = await AxiosInstance.get('/api/deli/alladmins');
    return res.data;
}

const allplays = async()=>{
    const res = await AxiosInstance.post('/api/deli/allplays');
    return res.data;
}

const transactions = async()=>{
    const res = await AxiosInstance.get('/api/deli/transactions');
    return res.data;
}

const play = async(data)=>{
    const res = await AxiosInstance.post('/api/deli/play',data);
    return res.data;
}

const allUnresolved = async()=>{
    const res = await AxiosInstance.get('/api/deli/allunresolved');
    return res.data;
}

const updateOutcome = async(data)=>{
    const res = await AxiosInstance.post('/api/deli/updatebookie',data);
    return res.data;
}


const allresolved = async()=>{
    const res = await AxiosInstance.get('/api/deli/allresolved');
    return res.data;
}

const userInformation = async()=>{
    const res = await AxiosInstance.post('/api/auth/userdetail');
    return res.data;
}



export {
    signUp,
    signIn,
    sharevalue,
    addfunds,
    removefunds,
    admincount,
    allplays,
    transactions,
    play,
    allUnresolved,
    updateOutcome,
    allresolved,
    userInformation
} 