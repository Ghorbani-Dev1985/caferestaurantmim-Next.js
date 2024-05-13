import { useRouter } from "next/router"


function RedirectLink(link) {
  console.log(link)
    const router = useRouter()
  return (
   router.replace(link)
  )
}

export default RedirectLink