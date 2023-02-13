import Posts from "@/components/Posts";
import { UseAppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { verifyToken } from "./api/auth/authToken"

export async function getServerSideProps(ctx){
  const verify = await verifyToken(ctx);

  return {
    props: {
      token: verify
    }
  }
}

export default function Search({token, currentUser}) {
  const context = UseAppContext();
  const filterButton = [{text: "Users", name: "users"}, {text: "Posts", name: "posts"}]
  const [userFilterButton, setUserFilterButton] = useState(true)
  const [postsApi, setPostsApi] = useState()

  useEffect(() => {
    setPostsApi(context.searchPostsApi)
  })

  function activeHandler(e){
    if(e.target.name === "users"){
      e.target.nextSibling.classList.remove("after:right-0")
      e.target.classList.add("after:right-0")
      setUserFilterButton(true)
    } else {
      e.target.previousSibling.classList.remove("after:right-0")
      e.target.classList.add("after:right-0")
      setUserFilterButton(false)
    }
  }

  return (
    <div className="max-w-[390px] mx-auto">
      <div className="flex justify-around border-b border-border-primary pt-2 pb-4">
        {filterButton.map(button => {
          return <button name={button.name} onClick={activeHandler} className={`px-4 relative after:absolute after:h-[3px] after:rounded-full after:bg-blue-400 after:-bottom-4 after:left-0 ${button.name === "users" ? "after:right-0" : ""}`}>{button.text}</button>
        })}
      </div>
      {userFilterButton ? (
        <div className="w-full">
          <>
            {context.searchUsersApi.length ? (
              context.searchUsersApi.map(result => {
                return (
                  <Link href="/[profile]" as={`/${result.username}`} className="flex gap-2 py-4 hover:bg-bg-hover px-4">
                    <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
                      <Image alt="user" src={result.image ? result.image.url : "/profile-default.png"} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">@{result.username}</p>
                      <p className="text-text-third">{result.name}</p>
                    </div>
                  </Link>
                )
              })
            ): (
              <div className="flex justify-center items-center h-[65vh]">
                <p className="text-text-third">Search any users</p>
              </div>
            )}
          </>
        </div>
      ): (
        <div>
          {context.searchPostsApi.length ? (
            <Posts data={{postsApi, token, currentUser}} />

          ) : (
            <div className="flex justify-center items-center h-[65vh]">
              <p className="text-text-third">Search any posts</p>
            </div>
          ) }
        </div>
      )}
    </div>
  )
}
