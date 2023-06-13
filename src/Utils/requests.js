import AxiosInstance from './axios';



const signUp = async(data)=>{
    const res = await AxiosInstance.post('/api/v1/user/register',data);
    return res.data;
    
}

const signIn = async(data)=>{
    const res = await AxiosInstance.post('/api/v1/user/login',data);
    return res.data;
    
}






export {
    signUp,
    signIn,
} 