import Link from "next/link"
import Router from "next/router";
import nookies from "nookies"

export default function Navbar({currentUser}) {
    function logoutHandler(){
        nookies.destroy(null, "token")
        Router.replace("/login")
    }  

  return (
    <div className="flex z-50 justify-center w-full items-center border-t border-border-primary fixed bottom-0 left-0 right-0 bg-bg-primary gap-4 py-3">
      <Link href="/">Home</Link>
      <Link href="/posts/create">Create Posts</Link>
      <Link href="/[profile]" as={`/${currentUser.username}`}>Me</Link>
      <button onClick={logoutHandler} className="px-4 py-2 bg-red-500 rounded-full">Logout</button>
    </div>
  )
}
