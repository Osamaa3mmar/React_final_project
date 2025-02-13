import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const UserContext=createContext();

const UserContextProvider=({children})=>{

    const [user,setUser]=useState(null);
    const getUser=async ()=>{
        
            const {data}=await axios.get('https://ecommerce-node4.onrender.com/user/profile',{
                headers: {
                    Authorization: `Tariq__${localStorage.getItem('token')}`
                }
            });
            console.log(data);
            setUser(data.user);
        }

    useEffect(()=>{
        getUser();
    },[]);
    return <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
}


export default UserContextProvider;




