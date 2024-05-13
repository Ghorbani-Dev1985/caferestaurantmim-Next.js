"use client"
import LoginPage from "@/Features/Dashboard/Login";
import useTitle from "@/Hooks/useTitle";

const Login = () => {
   const title = useTitle(" ورود | کافه رستوران میم");
 return <LoginPage />
}
 
export default Login;
