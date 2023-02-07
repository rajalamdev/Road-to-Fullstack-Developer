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
  const [caption, setCaption] = useState()


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

    const reqPosts = await fetch(`${process.env.PUBLIC_API_URL}/api/posts`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "data": {
                "caption": caption,
                "slug": caption,
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
            <form onSubmit={uploadImage} className="flex flex-col gap-6 mx-auto max-w-[500px] text-sm">
                <div className="flex justify-center">
                    <div className="relative after:absolute after:block after:content-['Caption'] after:bg-bg-primary after:left-3 after:-top-[6px] after:px-1 after:text-blue-400"></div>
                    <input type="text" className="w-[90%] h-8 rounded mt-1 outline-none self-center bg-bg-primary ring-1 ring-border-secondary px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" name="name" onChange={(e) => setCaption(e.target.value)} />
                </div>
                <input type="file" onChange={(e) => setImage(e.target.files)}  />
                <button className="bg-blue-500 w-max mx-auto px-8 py-[6px] rounded" type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}
