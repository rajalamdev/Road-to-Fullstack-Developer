import { useState } from "react";
import Layout from "../components/Layout";
import Posts from "../components/Posts";

export default function DetailPost() {

  const [posts, setPosts] = useState(true);

  return (
    <Layout>
      <h1 className="text-center text-2xl my-12">Search: UI DESIGN</h1>
      {!posts ? (
        <div className="flex flex-col gap-2 w-[525px] mx-auto text-center">
          <h2 className="text-[50px]">No Result😥</h2>
          <p className="text-xl text-white/80">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
        </div>
      ) : (
        <Posts />
      )}
    </Layout>  
  )
}
