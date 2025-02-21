import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const ProductsContext=createContext();


const ProductsContextProvider=({children})=>{

    const [products,setProducts] =useState(null);
    const getData=async ()=>
        {
            try{
                const {data}=await axios.get('https://ecommerce-node4.onrender.com/products?page=1&limit=10');
                setProducts(data.products);
            }
            catch(e){
                console.log(e);
                toast.info('server is down 505');
            }
        }


useEffect(()=>{
    getData();
},[])

    return (
        <ProductsContext.Provider  value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}


export default ProductsContextProvider;