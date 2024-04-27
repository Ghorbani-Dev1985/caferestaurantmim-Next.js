import { useAuth } from "src/Context/AuthContext";

const Header = () => {
   const {  user} = useAuth();
   console.log(user)
    return ( 
        <section className="w-full flex-between h-12 mb-20">
           <p className="flex-center gap-2">کاربر گرامی ؛<span className="block text-emerald-500 font-extrabold">{user?.name}</span>به پنل کاربری خوش آمدید</p>
        </section>
     );
}
 
export default Header;