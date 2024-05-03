import LoginPage from "@/Features/Dashboard/Login";
import useTitle from "@/Hooks/useTitle";
import { useAuth } from "src/Context/AuthContext";


const Login = () => {
   const title = useTitle(" ورود | کافه رستوران میم");
    const { user} = useAuth();

 return <LoginPage />
}
 
export default Login;
