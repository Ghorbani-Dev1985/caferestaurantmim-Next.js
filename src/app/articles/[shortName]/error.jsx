'use client';

import toast from "react-hot-toast";

function error({error}) {
    console.log("error" ,error)
  return (
    <div className="container flex-center my-8 font-extrabold text-xl bg-rose-100 p-3 text-rose-500 rounded-xl">چنین مقاله ای یافت نگردید</div>
  )
}

export default error