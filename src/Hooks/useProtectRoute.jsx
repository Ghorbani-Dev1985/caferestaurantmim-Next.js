"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "src/Context/AuthContext";

const useProtectRoute = () => {
  const router = useRouter()
  const { user} = useAuth();
  useEffect(() => {
   if(!user) router.replace("/login")
},[user])
};

export default useProtectRoute;
