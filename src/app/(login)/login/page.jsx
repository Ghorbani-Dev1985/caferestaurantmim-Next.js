"use client"
import LoginPage from "@/Features/Dashboard/Login";
import useTitle from "@/Hooks/useTitle";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "src/Context/AuthContext";

const Login = () => {
   const title = useTitle(" ورود | کافه رستوران میم");
   const router = useRouter()
   const { user} = useAuth();
   useEffect(() => {
    if(user) router.replace("/dashboard")
 },[user])
 return <LoginPage />
}
 
export default Login;
