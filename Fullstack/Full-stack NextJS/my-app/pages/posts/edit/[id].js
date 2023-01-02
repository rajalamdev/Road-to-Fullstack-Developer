import { useEffect, useState } from "react"
import { unAuthToken } from "../../api/middlewares/authTokenPage";
import Router from "next/router"

export async function getServerSideProps(ctx){
    const token = await unAuthToken(ctx)

    const reqPostDetail = await fetch("http://localhost:3000/api/posts/detail/" + ctx.query.id, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    const resPostDetail = await reqPostDetail.json();

    return {
        props: {
            resPostDetail,
        }
    }
}

export default function create({resPostDetail: {detailPost}}) {
   const [title, setTitle] = useState(detailPost.title) 
   const [content, setContent] = useState(detailPost.content) 
   const [token, setToken] = useState("") 

    useEffect(() => {
        const token = document.cookie.split("token=")[1]
        setToken(token)
    }, [])

    async function createPostHandler(e){
        e.preventDefault();

        const reqCreatePosts = await fetch("/api/posts/update/" + detailPost.id, {
            method: "PUT",
            body: JSON.stringify({
                title,
                content
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });

        Router.push("/posts")
    }

  return (
    <div>
        <form onSubmit={createPostHandler}>
            <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <br />
            <textarea 
                value={content}
                type="text"
                onChange={(e) => setContent(e.target.value)}>
            </textarea>
            <button type="submit">Save</button>
        </form>
    </div>
  )
}
