import { verifyToken } from "./api/auth/authToken"
import nookies from "nookies"
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";

export async function getServerSideProps(ctx){
    const verify = await verifyToken(ctx);
    const currentUser = {
      id: ctx.req.cookies.id,
      username: ctx.req.cookies.username
  }

    const reqMyPosts = await fetch(`${process.env.PUBLIC_API_URL}/api/posts?populate=*&filters[user][username][$eq]=${currentUser.username}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + verify,
        "Content-Type": "Application/json"
      }
    })

    const resMyPosts = await reqMyPosts.json()

    return {
        props: {
          postsApi: resMyPosts.data,
          token: verify,          
          currentUser
        }
    }
}

export default function dashboard({postsApi, token, currentUser}) {
  console.log(postsApi);
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <div className="text-3xl text-center mb-4">My Profile</div>
        <Posts data={{postsApi, token, currentUser}} />          
      </div>
    </>
  )
}
