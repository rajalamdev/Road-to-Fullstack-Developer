import { useEffect, useState } from "react"

export default function create() {
   const [title, setTitle] = useState("") 
   const [content, setContent] = useState("Content...") 
   const [token, setToken] = useState("") 

    useEffect(() => {
        const token = document.cookie.split("token=")[1]
        setToken(token)
    }, [])

    async function createPostHandler(e){
        e.preventDefault();

        const reqCreatePosts = await fetch("/api/posts/create", {
            method: "POST",
            body: JSON.stringify({
                title,
                content
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });

        const resCreatePosts = await reqCreatePosts.json()

        console.log(resCreatePosts);

        setTitle("")
        setContent("")
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
            <button type="submit">Create +</button>
        </form>
    </div>
  )
}
