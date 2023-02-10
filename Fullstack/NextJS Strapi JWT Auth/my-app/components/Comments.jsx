import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { UseAppContext } from "@/context/AppContext"
import Replies from "./Replies"

export default function Comments({data: {post, token, currentUser}}){
    const context = UseAppContext()
    const [commentApi, setCommentApi] = useState(post.attributes.comments.data)
    const [comment, setComment] = useState()

    function closeCommentHandler(){
        context.commentElement.current.map(element => {
            if(element.id == post.id){
                element.classList.add("-bottom-full")
                element.classList.remove("bottom-0")
            }
        })
    }

    async function sendCommentHandler(e){
        e.preventDefault();
        if(comment === "") return

        e.target.reset()
        const currentPost = {
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
                }
            }
        }

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
    }

    return (
        <div className="w-full">
            <form onSubmit={sendCommentHandler} className="sticky z-50 top-0 bg-bg-hover h-20 flex items-center gap-4 px-4">
                <Image src={currentUser.image ? currentUser.image.url : "/profile-default.png"} width={30} height={30} className="rounded-full" />
                <div className="w-full relative flex flex-wrap">
                    <textarea type="text" className="w-full py-2 resize-none bg-bg-primary block mx-auto h-10 rounded-full mt-1 outline-none self-center ring-1 ring-border-secondary px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" name="name" onChange={(e) => {
                        setComment(() => e.target.value)
                        }} placeholder="Comment..."></textarea>
                    <button type="submit">
                        <FontAwesomeIcon icon={faPaperPlane} className="absolute right-4 text-blue-400 top-[15px] cursor-pointer bg-bg-primary pl-2" />
                    </button>
                </div>
                <FontAwesomeIcon icon={faXmark} size="lg" onClick={closeCommentHandler} className="cursor-pointer px-[8px] py-[4px] rounded-full" />
            </form>
            <div>
                {commentApi.length ? (
                    commentApi.map((comment) => {
                        return (
                            <div className="flex gap-2 py-4 hover:bg-bg-hover px-4">
                                <div className="relative z-10 w-[50px] h-[50px] rounded-full overflow-hidden">
                                    <Image src={comment.attributes.user.data.attributes.image.data ? comment.attributes.user.data.attributes.image.data.attributes.url : "/profile-default.png"} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-semibold">@{comment.attributes.user.data.attributes.username}</p>
                                    <p>{comment.attributes.content}</p>
                                    <Replies data={{comment, token, currentUser}} />
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