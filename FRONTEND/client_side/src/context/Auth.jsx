import axios from 'axios';
import {useState,useContext,createContext, useEffect,} from 'react'

const AuthContext = createContext();



const AuthProvider = ({children})=>{
    const [auth,setAuth] = useState({
        user:null,
        token:"",
    });

    // default axios
    axios.defaults.headers.common['Authorization'] = auth?.token;

    useEffect(()=>{
        const data = localStorage.getItem('output')
        if(data){
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token,
            });
        }
    },[])
    return(
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
// coustom hook
const useAuth = ()=>{
    return useContext(AuthContext)
}

export{useAuth,AuthProvider}