import axios from "axios";
import { createContext, useEffect, useState } from "react";
import userIcon from '../../../public/Login/user.jpg'

export const UserContext=createContext();

const UserContextProvider=({children})=>{

    const [user,setUser]=useState(null);
    const [userImage,setUserImage]=useState(null);
    const getUser=async ()=>{
        
            const {data}=await axios.get('https://ecommerce-node4.onrender.com/user/profile',{
                headers: {
                    Authorization: `Tariq__${localStorage.getItem('token')}`
                }
            });
            console.log(data);
            setUser(data.user);
            setUserImage(data.user.image?data.user.image.secure_url:userIcon);
            
        }

    useEffect(()=>{
        getUser();
    },[]);
    return <UserContext.Provider value={{user,userImage,setUserImage}}>
        {children}
    </UserContext.Provider>
}


export default UserContextProvider;




