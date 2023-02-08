import { aDayAgo } from "@/utils/aDayAgo";
import Image from "next/image"
import Link from "next/link";

export default function Posts({data: {postsApi, token, currentUser}}) {
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

  return (
    <>
        {postsApi.map(post => {
            return (
                <div key={post.id} className="w-max-[390px] h-[100%] flex justify-center ">
                    <div className="w-[390px] border border-border-primary text-text-secondary">
                        <div className="flex px-4 py-3 gap-3 items-start">
                            <div className="relative z-10 w-[40px] h-[40px]">
                                <Link href={`/${post.attributes.user.data.attributes.username}`}>
                                    <Image src={post.attributes.user.data.attributes.image.data ? post.attributes.user.data.attributes.image.data.attributes.url : "/profile-default.png"} fill className="rounded-full object-cover" />
                                </Link>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <Link href={`/${post.attributes.user.data.attributes.username}`}>
                                        <p className="text-text-primary text-sm font-semibold">{post.attributes.user.data.attributes.name}</p>
                                    </Link>
                                    <Link href={`/${post.attributes.user.data.attributes.username}`}>
                                        <p className="text-text-third text-sm">@{post.attributes.user.data.attributes.username}</p>
                                    </Link>
                                    <p className="ml-[6px] text-xs text-text-third relative before:absolute before:top-[8px] before:block before:bg-text-third before:w-[2px] before:h-[2px] before:rounded-full before:-left-[6px]">{aDayAgo(post?.attributes.createdAt)}</p>
                                </div>
                                <p className="text-sm text-text-secondary">{post.attributes.caption}</p>
                            </div>
                        </div>
                        <div>
                        <div className="w-full relative aspect-square">
                            <Image src={`${post.attributes.image.data?.attributes.url}`} fill className="object-cover" /> 
                        </div>
                        </div>
                        <div className="px-2 py-4 space-y-4">
                            <button onClick={(e) => likeDislikeHandler(e, post)} value={false} className="px-3 py-2 text-sm bg-red-500 text-white rounded-full hover:bg-red-600">Like : {post.attributes.likedBy.data.length}</button>
                        </div>
                    </div>
                </div>
            )
        })}
    </>
  )
}
