import { verifyToken } from "./api/auth/authToken"
import nookies from "nookies"
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import Router from "next/router";

export async function getServerSideProps(ctx){
    const verify = await verifyToken(ctx);

    const reqMyProfile = await fetch(`${process.env.PUBLIC_API_URL}/api/users?populate=*&filters[username][$eq]=${ctx.params.profile}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + verify,
        "Content-Type": "Application/json"
      }
    })
    const resMyProfile = await reqMyProfile.json()

    const reqMyPosts = await fetch(`${process.env.PUBLIC_API_URL}/api/posts?populate=*&filters[user][username][$eq]=${ctx.params.profile}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + verify,
        "Content-Type": "Application/json"
      }
    })

    const resMyPost = await reqMyPosts.json();

    return {
        props: {
          postsApi: resMyPost.data ? resMyPost.data : [],
          me: resMyProfile[0] || null,
          token: verify,          
        }
    }
}

export default function Dashboard({me, postsApi, token, currentUser}) {
  const [editable, setEditable] = useState()

  useEffect(() => {
    if (currentUser.username == Router.query.profile) {
      setEditable(true)
    } else {
      setEditable(false)
    }

  }, [])

  function editHandler(){
    Router.push(`/${currentUser.username}/edit`)
  }

  return (
    <>
      <div>
        <div className="mb-10 pb-10 space-y-4 max-w-[350px] mx-auto border-b border-border-primary">
          <div className="flex gap-4 justify-center items-center">
            <div className="relative w-[100px] h-[100px]">
              <Image src={me?.image?.url} fill className="rounded-full object-cover" />
            </div>
            <div className="flex-col flex items-center">
              <span>{me?.posts.length}</span>
              <span>Posts</span>
            </div>
            <div className="flex-col flex items-center">
              <span>{me?.followers.length}</span>
              <span>Followers</span>
            </div>
            <div className="flex-col flex items-center">
              <span>{me?.following.length}</span>
              <span>Following</span>
            </div>
          </div>
          <div className="">
            <p className="font-bold text-lg flex-wrap">{me?.name}</p>
            <p>{me?.bio}</p>
            <a className="text-blue-400" href={`${me?.link}`}>{me?.link}</a>
            <div className="text-text-third mt-2">
              <p>{me?.location}</p>
              <p>Joined {formatDate(me?.createdAt)}</p>
            </div>
          </div>
          <div>
            {editable ? (
              <button onClick={editHandler} className="border rounded py-1 px-3 text-sm cursor-pointer">Edit Profile</button>
            ): (
              <button className="border rounded py-1 px-3 text-sm cursor-pointer">Follow</button>
            )}
            
          </div>
        </div>
      </div>
      <div>
        <Posts data={{postsApi, token, currentUser}} />          
      </div>
    </>
  )
}
