import { aDayAgo } from "@/utils/aDayAgo";
import Image from "next/image"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { createRef, useEffect, useRef, useState } from "react";
import Comments from "./Comments";
import { UseAppContext } from "@/context/AppContext";

export default function Posts({data: {postsApi, token, currentUser}}) {
    const context = UseAppContext()
    const userId = Number(currentUser.id);
    const [comment, setComment] = useState(false)
    const likeCount = useRef([])

    async function dislikeHandler(e, post, likeElement){
        const liked = []
    
        const decrementLike = Number(post.attributes.likedBy.data.length) - 1;
        const dislike = post.attributes.likedBy.data.filter(user => {
            return user.id !== userId
        })
    
        dislike.map(user => {
            liked.push(user.id)
        })
    
        post.attributes.likedBy.data = dislike;
        likeElement.textContent = decrementLike
        e.target.parentNode.classList.remove("text-red-500")

        
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
    
    async function likeHandler(e, post, likeElement){
        const liked = []           
        const incrementLiked = Number(post.attributes.likedBy.data.length) + 1;
        
        post.attributes.likedBy.data.map(user => {
            liked.push(user.id)
        })
        liked.push(userId)

        likeElement.textContent = incrementLiked
        e.target.parentNode.classList.add("text-red-500")
    
        post.attributes.likedBy.data = [...post.attributes.likedBy.data, {id: userId}];
    
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

    function likeDislikeHandler(e, post, i){
        const currentCountLikeElement = likeCount.current[i]
        if(post.attributes.likedBy.data.some(user => user.id === userId)){
            return dislikeHandler(e, post, currentCountLikeElement)
        }else {
            return likeHandler(e, post, currentCountLikeElement)
        }
   }

   function commentHandler(e, post){
    context.commentElement.current.map(element => {
        if(element.id == post.id){
            element.classList.remove("-bottom-full")
            element.classList.add("bottom-0")
        } else{
            element.classList.remove("bottom-0")
            element.classList.add("-bottom-full")
        }
    })
   }

  return (
    <>
        {postsApi.map((post, i) => {
            return (
                <div key={post.id} className="max-w-[390px] mx-auto h-[100%] flex justify-center">
                    <div className="w-[390px] border border-border-primary text-text-secondary">
                        <div className="flex px-3 py-3 gap-3 items-start">
                            <div className="relative z-10 w-[40px] h-[40px]">
                                <Link href={`/${post.attributes.user.data.attributes.username}`}>
                                    <Image src={post.attributes.user.data?.attributes.image.data ? post.attributes.user.data.attributes.image.data.attributes.url : "/profile-default.png"} fill className="rounded-full object-cover" />
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
                            <div className="text-right flex-1">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        </div>
                        <div>
                        <div className="w-full relative aspect-square">
                            <Image src={`${post.attributes.image?.data?.attributes.url}`} fill className="object-cover" /> 
                        </div>
                        </div>
                        <div className="px-3 py-4 w-max flex gap-6">
                            <div className="flex gap-2 items-start">
                                <FontAwesomeIcon icon={faHeart} size={"lg"} className={`${post.attributes.likedBy.data.some(user => user.id === userId) ? "text-red-500" : ""} hover:cursor-pointer`} onClick={(e) => likeDislikeHandler(e, post, i)} />
                                <div ref={element => likeCount.current[i] = element} className="text-xs">{post.attributes.likedBy.data.length}</div>
                            </div>
                            <FontAwesomeIcon icon={faComment} className="cursor-pointer" size={"lg"} onClick={(e) => commentHandler(e, post)} />
                        </div>
                    </div>
                    <div ref={element => context.commentElement.current[i] = element} id={post.id} className="fixed -bottom-full transition-all z-50 bg-bg-primary duration-300 border border-border-primary max-w-full sm:max-w-[800px] left-0 right-0 mx-auto h-full overflow-auto sm:h-[60%] sm:rounded-t-xl">
                        <div className="flex w-full">
                            <div className="max-w-[390px] hidden sm:block">
                                <div className="sticky top-0">
                                    <div className="w-[390px] relative aspect-square">
                                        <Image src={`${post.attributes.image?.data?.attributes.url}`} fill className="object-cover" /> 
                                    </div>
                                </div>
                            </div>
                            <Comments data={{post, currentUser, token}} />
                        </div>
                    </div>
                </div>
            )
        })}
    </>
  )
}
