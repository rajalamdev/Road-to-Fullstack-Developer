import { useEffect, useState } from "react"
import { verifyToken } from "../api/auth/authToken"
import Router from "next/router"

export async function getServerSideProps(ctx){
    const verify = await verifyToken(ctx)

    const reqMyProfile = await fetch(`${process.env.PUBLIC_API_URL}/api/users/me?populate=*`, {
        headers: {
            "Authorization": "Bearer " + verify
        }
    })

    const resMyProfile = await reqMyProfile.json()

    return {
        props: {
            token: verify,
            me: resMyProfile
        }
    }
}

export default function Edit({currentUser, me, token}) {
    const [image, setImage] = useState(me.image?.id) 
    const [name, setName] = useState(me.name) 
    const [bio, setBio] = useState(me.bio) 
    const [location, setLocation] = useState(me.location) 
    const [link, setLink] = useState(me.link)

   async function reqEdit(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append("files", image[0])

        const reqUpload = await fetch(`${process.env.PUBLIC_API_URL}/api/upload`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token
            }, 
            body: formData
        })

        const resUpload = await reqUpload.json()

        const req = await fetch(`${process.env.PUBLIC_API_URL}/api/users/${currentUser.id}`, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                bio,
                location,
                link,
                "image": resUpload[0] ? resUpload[0].id : image
            })
        })

        console.log(await req.json())

        Router.replace(`/${currentUser.username}`)
   }

  return (
    <div>
        <form onSubmit={reqEdit} className="flex flex-col gap-6 mx-auto max-w-[500px] text-sm px-4">
            <div className="flex justify-center">
            <div className="relative after:absolute after:block after:content-['Picture'] after:bg-bg-primary after:left-8 after:-top-[12px] after:px-1 after:text-blue-400"></div>
                <input type="file" onChange={(e) => {
                    setImage(e.target.files)
                }} />
            </div>
            <div className="flex justify-center">
                <div className="relative after:absolute after:block after:content-['Name'] after:bg-bg-primary after:left-3 after:-top-[6px] after:px-1 after:text-blue-400"></div>
                <input type="text" className="w-[90%] h-8 rounded mt-1 outline-none self-center bg-bg-primary ring-1 ring-border-secondary px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex justify-center">
                <div className="relative after:absolute after:block after:content-['Bio'] after:bg-bg-primary after:left-3 after:-top-[6px] after:px-1 after:text-blue-400"></div>
                <input type="text" className="w-[90%] h-8 rounded mt-1 outline-none self-center bg-bg-primary ring-1 ring-border-secondary px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" name="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
            </div>
            <div className="flex justify-center">
                <div className="relative after:absolute after:block after:content-['Location'] after:bg-bg-primary after:left-3 after:-top-[6px] after:px-1 after:text-blue-400"></div>
                <input type="text" className="w-[90%] h-8 rounded mt-1 outline-none self-center bg-bg-primary ring-1 ring-border-secondary px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="flex justify-center">
                <div className="relative after:absolute after:block after:content-['Link'] after:bg-bg-primary after:left-3 after:-top-[6px] after:px-1 after:text-blue-400"></div>
                <input type="text" className="w-[90%] h-8 rounded mt-1 outline-none self-center bg-bg-primary ring-1 ring-border-secondary px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" name="link" value={link} onChange={(e) => setLink(e.target.value)} />
            </div>
            <button type="submit" className="bg-blue-500 w-max mx-auto px-8 py-[6px] rounded">Save</button>
        </form>
    </div>
  )
}
