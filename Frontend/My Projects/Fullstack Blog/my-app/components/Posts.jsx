import { useState } from "react"
import Image from "next/image";
import mockPosts from "../pages/posts.json"
import InfoPosts from "./InfoPosts";
import CardPosts from "./CardPosts";

export default function Posts({postsApi}) {

  const [posts, setPosts] = useState(postsApi);

  return (
    <article className="flex flex-wrap -ml-3 pt-16">
        {posts.map(post => {
            return (
                <div className="md:w-4/12 w-full px-3 mb-16" key={post.id}>
                    <CardPosts {...post.attributes} />
                </div>
            )
        })}        
    </article>
  )
}
