import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faL, faPaperPlane, faXmark, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
import { UseAppContext } from "@/context/AppContext"
import Replies from "./Replies"
import { red } from "@mui/material/colors"

export default function Comments({data: {post, token, currentUser, currentPostId, currentI, postsApi}}){
    const context = UseAppContext()
    const [commentApi, setCommentApi] = useState(post.attributes.comments.data)
    const [comment, setComment] = useState()
    const [isReply, setIsReply] = useState(false)
    const [usernameReply, setUsernameReply] = useState()
    const [currentCommentId, setcurrentCommentId] = useState()
    const inputRef = useRef()
    const [currentPosts, setCurrentPosts] = useState(postsApi[currentI])

    function closeCommentHandler(){
        context.commentElement.current.map(element => {
            if(element.id == post.id){
                element.classList.add("-bottom-full")
                element.classList.remove("bottom-0")
            }
        })
    }

    useEffect(() => {
        setCurrentPosts(postsApi[currentI])
        console.log(commentApi)
    })


    async function sendCommentHandler(e){
        e.preventDefault();
        if(comment === "") return
        
        if(!isReply){
            const currentPost = {
                id: context.getHighestIdComment,
                attributes: {
                    content: comment,   
                    creratedAt: "2023-02-10T08:10:41.474Z",
                    user: {
                        data: {
                            attributes: {
                                username: currentUser.username,
                                image: {
                                    data: {
                                        attributes: {
                                            url: currentUser.image ? currentUser.image.url : "/profile-default.png"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    replies: {
                        data: []
                    }
                }
            }

            currentPosts.attributes.comments.data = [...currentPosts.attributes.comments.data, currentPost]
            context.setGetHighestIdComment(context.getHighestIdComment + 1)
            setCommentApi([...commentApi, currentPost])
    
            const reqSendComment = await fetch(`${process.env.PUBLIC_API_URL}/api/comments`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "data": {
                        "content": comment,
                        "user": currentUser.id,
                        "post": post.id
                    }
                })
            })
            context.setGetHighestIdComment(context.getHighestIdComment + 1)
        } else {

            const findIndexTodos = commentApi.findIndex(comment => {
                return comment.id === currentCommentId
            })

            const copyComment = [...commentApi];

            const change = {
                id: copyComment[findIndexTodos].id,
                attributes: {
                    content: copyComment[findIndexTodos].attributes.content,   
                    creratedAt: "2023-02-10T08:10:41.474Z",
                    user: {
                        data: {
                            attributes: {
                                username: copyComment[findIndexTodos].attributes.user.data.attributes.username,
                                image: {
                                    data: {
                                        attributes: {
                                            url: copyComment[findIndexTodos].attributes.user.data.attributes.image.data.attributes.url
                                        }
                                    }
                                }
                            }
                        }
                    },
                    replies: {
                        data: [
                            ...copyComment[findIndexTodos].attributes.replies.data,
                            {
                                attributes: {
                                    replyText: comment,
                                    createdAt: "2023-02-10T19:55:36.644Z",
                                    user: {
                                        data: {
                                            attributes: {
                                                username: currentUser.username,
                                                image: {
                                                    data: {
                                                        attributes: {
                                                            url: currentUser.image ? currentUser.image.url : "/profile-default.png"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            }

            copyComment[findIndexTodos] = change
            setCommentApi(copyComment)

            const reqReply = await fetch(`${process.env.PUBLIC_API_URL}/api/replies`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "data": {
                        replyText: comment,
                        user: currentUser.id,
                        comments: currentCommentId
                    }
                })
            })

            console.log(await reqReply.json())
        }
        setComment("")
    }

    async function replyFormHandler(data){
        setUsernameReply(data.attributes.user.data.attributes.username)
        setIsReply(true)
        setComment(`@${data.attributes.user.data.attributes.username} `)
        inputRef.current.focus()
    }

    function cancelReplyCommentHandler(){
        setIsReply(false)
        setComment("")
    }

    return (
        <div className="w-full">
            <form onSubmit={sendCommentHandler} className="sticky z-50 top-0 bg-bg-hover">
                <div className="py-4 flex items-center gap-4 px-4">
                    <FontAwesomeIcon icon={faChevronLeft} size="lg" onClick={closeCommentHandler} className="cursor-pointer px-[8px] py-[4px] rounded-full" />
                    <div className="w-full relative flex flex-wrap">
                        <input ref={inputRef} type="text" className="w-full py-2 resize-none bg-bg-primary block mx-auto h-10 rounded-full mt-1 outline-none self-center ring-1 ring-border-secondary px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" name="name" onChange={(e) => {
                            setComment(() => e.target.value)
                        }} value={comment} placeholder={`${isReply ? "Reply to " + usernameReply: "Comment as " + currentUser.username}`}></input>
                        <button type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} className="absolute right-4 text-blue-400 top-[15px] cursor-pointer bg-bg-primary pl-2" />
                        </button>
                    </div>
                    <Image src={currentUser.image ? currentUser.image.url : "/profile-default.png"} width={30} height={30} className="rounded-full" />
                </div>
                {isReply && (
                    <div className="px-4 py-2 flex items-center text-text-third transition-all top-0 justify-bet">
                        <FontAwesomeIcon icon={faXmark} size="sm" onClick={cancelReplyCommentHandler} className="cursor-pointer px-[8px] py-[4px] rounded-full text-text-secondary" />
                        <p>Reply to {usernameReply}</p>
                    </div>
                )}
            </form>
            <div>
                {commentApi.length ? (
                    commentApi.map((comment) => {
                        return (
                            <div className="flex gap-2 py-4 px-4">
                                <div className="relative z-10 w-[50px] h-[50px] rounded-full overflow-hidden">
                                    <Image src={comment.attributes.user.data.attributes.image.data ? comment.attributes.user.data.attributes.image.data.attributes.url : "/profile-default.png"} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-semibold">@{comment.attributes.user.data.attributes.username}</p>
                                    <p className="text-text-secondary text-sm">{comment.attributes.content}</p>
                                    <button onClick={() => {
                                        replyFormHandler(comment)
                                        setcurrentCommentId(comment.id)
                                    }}>Reply</button>
                                    {comment.attributes.replies.data.map(reply => {
                                        return (
                                            <div className="flex gap-2 mt-4">
                                                <div className="relative z-10 w-[30px] h-[30px] rounded-full overflow-hidden">
                                                    <Image src={reply.attributes.user.data.attributes.image.data ? reply.attributes.user.data.attributes.image.data.attributes.url : "/profile-default.png"} fill className="object-cover" />
                                                </div>
                                                <div>
                                                    <p>@{reply.attributes.user.data.attributes.username}</p>
                                                    <p className="text-text-secondary text-sm">{reply.attributes.replyText}</p>
                                                    <button onClick={() => {
                                                        replyFormHandler(reply)
                                                        setcurrentCommentId(comment.id)
                                                    }} name="replyToReply" className="w-max">Reply</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                ): (
                    <div className="flex items-center justify-center text-text-third h-[50vh]">This post doest have any comment yet :/</div>
                )}
            </div>
        </div>
    )
}