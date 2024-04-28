import Http from "@/Services/HttpService";
import Router from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext()

const AuthContextDispatcher = createContext();

const InitialState = {
  user: null,
  loading: false,
  error: null
}

const reducer = (state , action) => {
    
  switch (action.type) {
    case "PENDING":
       return { user: null , error: false , loading: true}
    case "SUCCESS":
        return { user: action.payload , error : null , loading: false}  
    case "REJECT":
        return {user: null , error: action.error , loading: false }
    default: return {...state}
  }
}

const asyncActionHandlers = {
    
    LOGIN: ({ dispatch }) => (action) => {
        dispatch({type: 'PENDING'})
        Http.post('/auth/login' , action.payload)
        .then(({data , status}) => {
            if(status === 200){
                toast.success("ورود شما با موفقیت انجام شد")
                typeof localStorage.setItem('user' , JSON.stringify(data))
                dispatch({type: 'SUCCESS'})
                Router.replace("dashboard/blogs")
            }
        })
        .catch((err) => {
            dispatch({type: 'REJECT' , error : err})
            toast.error(err)
        })
    },
    GET_USER_INFOS : ({dispatch}) => async (action) => {
            dispatch({type: 'PENDING'})
           const getToken = await JSON.parse(typeof window !== "undefined" ? window.localStorage.getItem("user") : false);
            if(getToken) {
                Http.get('/auth/me' , )
                .then(({data}) => {
                 dispatch({type: 'SUCCESS' , payload: data})
                })
                .catch((err) => {
                    dispatch({type: 'REJECT' , error : err?.response?.data?.message})
                })
            }
    },

    LOGOUT: ({dispatch}) => (action) =>{
        typeof localStorage.removeItem('user')
        toast.success("خروج با موفقیت انجام شد")
        dispatch({type: 'SUCCESS'})
        Router.replace('/')
    },
  };


const AuthProvider = ({children}) => {
    const [user , dispatch] = useReducerAsync(reducer , InitialState , asyncActionHandlers);
    useEffect(() => {
      dispatch({type: "GET_USER_INFOS"})
    },[])
    return (
        <AuthContext.Provider value={user}>
           <AuthContextDispatcher.Provider value={dispatch}>
              {children}
           </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);