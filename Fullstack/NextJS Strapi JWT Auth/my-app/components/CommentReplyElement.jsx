import { useState } from "react"
import Replies from "./Replies"
import Image from "next/image"

export default function CommentReplyElement({post}) {
    const [commentApi, setCommentApi] = useState(post.attributes.comments.data)
  return (
        <>
{commentApi.length ? (
                    commentApi.map((comment) => {
                        return (
                            <div className="flex gap-2 py-4 hover:bg-bg-hover px-4">
                                <div className="relative z-10 w-[50px] h-[50px] rounded-full overflow-hidden">
                                    <Image src={comment.attributes.user.data.attributes.image.data ? comment.attributes.user.data.attributes.image.data.attributes.url : "/profile-default.png"} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-semibold">@{comment.attributes.user.data.attributes.username}</p>
                                    <p className="text-text-secondary text-sm">{comment.attributes.content}</p>
                                    <button>Reply</button>
                                    {/* <div id={comment.id} ref={element => context.replyFormElement.current[i] = element}>
                                        <Replies data={{comment, token, currentUser, i}} />
                                    </div> */}
                                </div>
                            </div>
                        )
                    })
                ): (
                    <div className="flex items-center justify-center text-text-third h-[50vh]">This post doest have any comment yet :/</div>
                )}
        </>
  )
}
