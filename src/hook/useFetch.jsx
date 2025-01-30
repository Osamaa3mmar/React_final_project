import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url) {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);


    const getData=async()=>{
        try{
        const {data}=await axios.get(url);
        setError(null);
        setData(data);
        }catch(e){
            setError(e.message);
            setData(null);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getData();
    },[url])
  return {data,loading,error}
}
