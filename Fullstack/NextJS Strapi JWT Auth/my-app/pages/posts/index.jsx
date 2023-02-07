import Navbar from "@/components/Navbar"
import { useEffect, useRef, useState } from "react"
import { verifyToken } from "../api/auth/authToken"
import Posts from "@/components/Posts"

export async function getServerSideProps(ctx){  
    const verify = await verifyToken(ctx)
    const currentUser = {
        id: ctx.req.cookies.id,
        username: ctx.req.cookies.username
    }
    
    const reqPosts = await fetch(`${process.env.PUBLIC_API_URL}/api/posts?populate=*`, {
        headers: {
            "Authorization": "Bearer " + verify
        }
    })
    const resPosts = await reqPosts.json()

    return {
        props: {
            posts: resPosts.data ? resPosts.data : [],
            token: verify,
            currentUser
        }
    }
}

export default function Index({posts, token, currentUser}) {
    const [postsApi, setPostsApi] = useState(posts); 
    const userId = Number(currentUser.id);

    async function dislikeHandler(e, post){
        const liked = []

        const decrementLike = post.attributes.likedBy.data.length - 1;
        const dislike = post.attributes.likedBy.data.filter(user => {
            return user.id !== userId
        })

        dislike.map(user => {
            liked.push(user.id)
        })

        post.attributes.likedBy.data = dislike;
        
        e.target.innerHTML = "Like: " + decrementLike
        await fetch(`${process.env.PUBLIC_API_URL}/api/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                "data": {
                    "likedBy": liked
                }
            })
        })        
    }

    async function likeHandler(e, post){
        const liked = []           
        const incrementLiked = post.attributes.likedBy.data.length + 1;
        
        post.attributes.likedBy.data.map(user => {
            liked.push(user.id)
        })
        liked.push(userId)

        post.attributes.likedBy.data = [...post.attributes.likedBy.data, {id: userId}];

        e.target.innerHTML = "Like: " + incrementLiked

        const reqLiked = await fetch(`${process.env.PUBLIC_API_URL}/api/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                "data": {
                "likedBy": liked
            }
            })
        })
    }
    
    function likeDislikeHandler(e, post){
        if(post.attributes.likedBy.data.some(user => user.id === userId)){
            return dislikeHandler(e, post)
        }else {
            return likeHandler(e, post)
        }
        
   }

   const [ratio, setRatio] = useState(16/9)
  return ( 
      <>
        <Navbar />
        <div>
            <div className="text-3xl text-center mb-4">Posts</div>
            <Posts data={{postsApi, token, currentUser}} />
        </div>
      </>
  )
}
