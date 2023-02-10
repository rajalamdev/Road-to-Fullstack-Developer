import Head from 'next/head'
import { Inter } from '@next/font/google'
import { authToken, verifyToken } from './api/auth/authToken'
import Navbar from "@/components/Navbar"
import { useEffect, useRef, useState } from "react"
import Posts from "@/components/Posts"

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(ctx){  
  const verify = await verifyToken(ctx)
  
  const reqPosts = await fetch(`${process.env.PUBLIC_API_URL}/api/posts?populate[user][populate]=image&populate[likedBy]=*&populate[image]=*&populate[comments][populate][user][populate][0]=image&populate[comments][populate][replies][populate][user][populate][0]=image`, {
      headers: {
          "Authorization": "Bearer " + verify
      }
  })
  const resPosts = await reqPosts.json()

  return {
      props: {
          posts: resPosts.data ? resPosts.data : [],
          token: verify,
      }
  }
}


export default function Home({posts, token, currentUser}) {
  const [postsApi, setPostsApi] = useState(posts); 
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
            <Posts data={{postsApi, token, currentUser}} />
      </div>
    </>
  )
}

