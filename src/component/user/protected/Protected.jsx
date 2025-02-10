import { Navigate } from "react-router-dom";

export default function Protected({children}) {
    const token =localStorage.getItem("token");
    console.log("osama")
    if(!token ){
        return <Navigate to='/login'/>
    }
    else
  return children;
  
}
