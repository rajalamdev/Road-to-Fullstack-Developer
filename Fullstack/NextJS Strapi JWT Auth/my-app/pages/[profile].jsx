import { verifyToken } from "./api/auth/authToken"
import nookies from "nookies"
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";

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

    const reqMyPosts = await fetch(`${process.env.PUBLIC_API_URL}/api/posts?populate[user][populate]=image&populate[likedBy]=*&populate[image]=*&populate[comments][populate][user][populate][0]=image&populate[comments][populate][replies][populate][user][populate][0]=image&filters[user][username]=${ctx.params.profile}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + verify,
        "Content-Type": "Application/json"
      }
    })

    const start =  [2, 3, 10, 23, 5, 1]

    const resMyPost = await reqMyPosts.json();
    const sortenedPostByDate = resMyPost.data.sort((a, b) => {
       return new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime()
    })


    return {
        props: {
          postsApi: sortenedPostByDate,
          me: resMyProfile[0] || null,
          token: verify,          
          params: ctx.params.profile
        }
    }
}

export default function Dashboard({me, postsApi, token, currentUser, params}) {
  const [editable, setEditable] = useState()
  const followersCount = useRef()

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

  async function followHandler(user, currentUser, e){
    const arrayFollowers = []
    user.followers.map(user => {
      arrayFollowers.push(user.id)
    })

    arrayFollowers.push(currentUser.id)

    const reqFollow = await fetch(`${process.env.PUBLIC_API_URL}/api/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "followers": arrayFollowers
      })
    })

    e.target.textContent = "Unfollow"
    user.followers = [...user.followers, {id: currentUser.id, username: currentUser.username}]
    const incrementFollower = Number(followersCount.current.textContent) + 1
    followersCount.current.textContent = incrementFollower
  }
  
  async function unfollowHandler(user, currentUser, e){
    const arrayFollowers = []
    const filteredFollowers = user.followers.filter(user => {
      return user.id !== currentUser.id
    })

    filteredFollowers.map(filter => {
      arrayFollowers.push(filter.id)
    })

    const reqUnfollow = await fetch(`${process.env.PUBLIC_API_URL}/api/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "followers": arrayFollowers
      })
    })

    e.target.textContent = "Follow"
    user.followers = filteredFollowers
    const decrementFollowers = Number(followersCount.current.textContent) - 1
    followersCount.current.textContent = decrementFollowers
  }
  
  function followUnfollowHandler(user, currentUser, e){
    if(user.followers.some(user => user.id ==currentUser.id)) return unfollowHandler(user, currentUser, e);
    return followHandler(user, currentUser, e)
  }

  return (
    <>
      <div>
        <div className="mb-10 space-y-4 max-w-[350px] mx-auto px-3">
          <div className="flex gap-4 justify-center items-center">
            <div className="relative w-[100%] h-[100px] rounded-full overflow-hidden">
              <Image src={me.image ? me.image.url : "/profile-default.png"} className="object-cover" fill />
            </div>
            <div className="flex-col flex items-center">
              <span>{me?.posts.length}</span>
              <span>Posts</span>
            </div>
            <div className="flex-col flex items-center">
              <span ref={followersCount}>{me?.followers.length}</span>
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
              <div className="flex gap-2 items-center">
                {me?.location && (
                  <>
                    <FontAwesomeIcon icon={faLocationDot} size="xs" />
                    <p>{me.location}</p>
                  </>
                )}
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faCalendar} size="xs" />
                <p>Joined {formatDate(me?.createdAt)}</p>
              </div>
            </div>
          </div>
          <div>
            {editable ? (
              <button onClick={editHandler} className="border rounded py-1 px-3 text-sm cursor-pointer">Edit Profile</button>
            ): (
              <button className="border rounded py-1 px-3 text-sm cursor-pointer" onClick={(e) => followUnfollowHandler(me, currentUser, e)}>{me.followers.some(user => user.id === currentUser.id) ? "Unfollow" : "Follow"}</button>
            )}
          </div>
        </div>
      </div>
      <div>
        {!postsApi.length ? (
          <div className="text-center border border-dashed border-border-secondary w-max mx-auto px-4 py-2 rounded text-sm text-text-third mt-24">This user doesn't have any post yet : /</div>
        ): (
          <Posts data={{postsApi, token, currentUser}} />
        )}
      </div>
    </>
  )
}