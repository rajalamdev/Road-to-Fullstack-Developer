import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { verifyToken } from "../api/auth/authToken";
import Router from "next/router";

export async function getServerSideProps(ctx){
    const verify = await verifyToken(ctx)

    return {
        props: {
            token: verify,
        }
    }
}

// comment
export default function Create({token, currentUser}) {
  const [image, setImage] = useState()  
  const [title, setTitle] = useState()


  async function uploadImage(e){
    e.preventDefault();
    const formData = new FormData()
    formData.append("files", image[0])

    const reqUpload = await fetch(`${process.env.PUBLIC_API_URL}/api/upload`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: formData        
    })

    const resUpload = await reqUpload.json();
    console.log(resUpload)

    const reqPosts = await fetch(`${process.env.PUBLIC_API_URL}/api/posts`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "data": {
                "title": title,
                "slug": title,
                "user": currentUser,
                "image": resUpload[0].id
            }
        })
    })

    Router.push("/")
  }

  return (
    <>
        <div>
            <h1>Create Posts</h1>
            <form onSubmit={uploadImage}>
                <label htmlFor="title"> Title
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                </label>
                <input type="file" onChange={(e) => setImage(e.target.files)} />
                <button className="border-2 border-black px-2 rounded-md" type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}
