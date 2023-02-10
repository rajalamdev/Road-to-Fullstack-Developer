import { useState } from "react"

export default function Replies({data: {comment, token, currentUser}}){
    const [repliesApi, setRepliesApi] =  useState(comment.attributes.replies.data)
    const [reply, setReply] = useState()

    async function replyHandler(e){
        const currentReply = {
            attributes: {
                replyText: reply,
                createdAt: "2023-02-10T19:55:36.644Z",
                user: {
                    data: [{
                        attributes: {
                            image: {
                                data: {
                                    attributes: {
                                        url: currentUser.image ? currentUser.image.url : "/profile-default.png"
                                    }
                                }
                            }
                        }
                    }]
                }
            }
        }

        setRepliesApi([...repliesApi, currentReply])
        e.preventDefault();
     }

    return (
        <>
        <form onSubmit={replyHandler}>
            <input type="text" onChange={(e) => setReply(e.target.value)} />
            <button type="submit"></button>
        </form>
        <div>
            {repliesApi.map(reply => {
                console.log(reply)
                return (
                    <div className="flex gap-2 py-4 hover:bg-bg-hover px-4">
                                <div className="relative z-10 w-[50px] h-[50px] rounded-full overflow-hidden">
                                    {/* <Image src={comment.attributes.user.data.attributes.image.data ? comment.attributes.user.data.attributes.image.data.attributes.url : "/profile-default.png"} fill className="object-cover" /> */}
                                </div>
                                <div>
                                    {/* <p className="font-semibold">@{comment.attributes.user.data.attributes.username}</p> */}
                                    <p>{reply.attributes.replyText}</p>
                                </div>
                            </div>
                )
            })}            
        </div>
        </>
    )
}