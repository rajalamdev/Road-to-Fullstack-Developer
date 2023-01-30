import { verifyToken } from "./api/auth/authToken"
import nookies from "nookies"
import Navbar from "@/components/Navbar";

export async function getServerSideProps(ctx){
    const verify = await verifyToken(ctx);
    const currentUser = ctx.req.cookies.username

    const reqMyPosts = await fetch(`${process.env.PUBLIC_API_URL}/api/posts?populate=*&filters[user][username][$eq]=${currentUser}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + verify,
        "Content-Type": "Application/json"
      }
    })

    const resMyPosts = await reqMyPosts.json()

    return {
        props: {
          posts: resMyPosts.data
        }
    }
}

export default function dashboard({posts}) {

  return (
    <>
      <Navbar />
      <div className="flex h-screen justify-center items-center flex-col gap-2">
          <div className="text-3xl">Dashboard</div>
          <div>
            {posts.map(post => {
              return (
                <div className="mb-8">
                  <h1 className="font-bold text-xl">{post.attributes.title}</h1>  
                  <p>{post.attributes.content}</p>
                  <p>Like: {post.attributes.like == null ? 0 : post.attributes.like}</p>
                </div>  
              )
            })}
          </div>
      </div>
    </>
  )
}
