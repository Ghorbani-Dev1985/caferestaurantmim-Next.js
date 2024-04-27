import LoginPage from "@/Features/Dashboard/Login";
import Http from "@/Services/HttpService";

const Login = () => {
  return ( 
      <LoginPage />
   );
}
 
export default Login;

// export async function getStaticProps() {
//   const { data } = await Http.get("/auth/me");
//   return { props: { userInfo: data }};
// }