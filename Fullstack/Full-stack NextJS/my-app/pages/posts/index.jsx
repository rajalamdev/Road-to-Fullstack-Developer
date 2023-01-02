import { useEffect, useState } from "react";
import { unAuthToken } from "../api/middlewares/authTokenPage"
import Router from "next/router"
import Nav from "../../components/Nav";

export async function getServerSideProps(ctx){
    const token = await unAuthToken(ctx)

    const getPostsReq = await fetch("http://localhost:3000/api/posts", {
      headers: {
        "Authorization": `Bearer ${token}`
      }  
    })
    
    const getPostsRes = await getPostsReq.json();


    return {
        props: {
            getPosts: getPostsRes.dataPosts,
            token
        }
    }
}

export default function posts(props) {
  const [posts, setPosts] = useState(props.getPosts);

  async function deletePostHandler(id){
    const reqDeletePost = await fetch("/api/posts/delete/" + id, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + props.token
      }
    })

    const filteredPost = posts.filter(post => post.id !== id)
    setPosts(filteredPost)
  }

  async function editPostHandler(id){
      Router.push("/posts/edit/" + id)
  }

  return (
    <div>
        <h1>Posts</h1>
        <Nav />
        {posts.map(post => {
            return (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <button onClick={() => editPostHandler(post.id)}>Edit</button>
                    <button onClick={() => deletePostHandler(post.id)}>Delete</button>
                    <hr />
                </div>
            )
        })}
    </div>
  )
}
