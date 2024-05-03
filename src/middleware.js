import { BASE_URL } from "./Services/HttpService";


export async function middleware(req){
  const url = req.url;
  const pathname = req.nextUrl.pathname;
   if(pathname.startsWith('/dashboard')){
    const getToken = JSON.parse(typeof window !== "undefined" ? window.localStorage.getItem("user") : false);
    console.log(getToken)
   const data = await fetch(`${BASE_URL}/auth/me` , {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${getToken?.accessToken}`
            }
        }
    ).then((res) => res.json());
        console.log(data)
   }
}

export const config = {
    matcher: ["/dashboard"]
}