import { useEffect, useRef, useState } from "react"
import { verifyToken } from "../api/auth/authToken"

export async function getServerSideProps(ctx){  
    const verify = await verifyToken(ctx)
    const currentUser = ctx.req.cookies.username

    const reqPosts = await fetch(`${process.env.PUBLIC_API_URL}/api/posts?populate=*`, {
        headers: {
            "Authorization": "Bearer " + verify
        }
    })
    const resPosts = await reqPosts.json()

    return {
        props: {
            posts: resPosts.data,
            token: verify,
            currentUser
        }
    }
}

export default function index({posts, token, currentUser}) {
   const [postsApi, setPostsApi] = useState(posts); 

   useEffect(() => {
        console.log("updated");
   }, [postsApi]) 

   async function likeHandler(e, post){
        console.log(post.attributes.likedBy.data);
       if (post.attributes.liked != true){
           const incrementLiked = post.attributes.like += 1;

            const reqLiked = await fetch(`${process.env.PUBLIC_API_URL}/api/posts/${post.id}`, {
                method: "PUT",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({
                    "data": {
                        "likedBy": 21
                    }
                })
            })

            e.target.innerHTML = "like: " + incrementLiked
            post.attributes.liked = true
        } else {
            const decrementLiked = post.attributes.like -= 1;

            // const reqLiked = await fetch(`${process.env.PUBLIC_API_URL}/api/posts/${post.id}`, {
            //     method: "PUT",
            //     headers: {
            //         "Authorization": "Bearer " + token,
            //         "Content-Type": "Application/json"
            //     },
            //     body: JSON.stringify({
            //         "data": {
            //             "like": decrementLiked
            //         }
            //     })
            // })

            e.target.innerHTML = "like: " + decrementLiked
            post.attributes.liked = false
        }
   }

  return (
    <div>
        {postsApi.map(post => {
            return (
                <div key={post.id} className="mb-8">
                    <h1 className="font-bold text-xl">{post.attributes.title}</h1>
                    <p>{post.attributes.content}</p>
                    <p>Post by {post.attributes.user.data?.attributes.username}</p>
                    <p>{new Date(post.attributes.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}</p>
                    <button onClick={(e) => likeHandler(e, post)} value={false} className="border px-3 py-2 text-sm bg-red-500 text-white rounded-full hover:bg-red-600">Like : {!post.attributes.like ? 0 : post.attributes.like}</button>
                </div>
            )
        })}
    </div>
  )
}
