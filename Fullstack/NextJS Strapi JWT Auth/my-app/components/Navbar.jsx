import Link from "next/link"
import Router from "next/router";
import nookies from "nookies"

export default function Navbar() {

    function logoutHandler(){
        nookies.destroy(null, "token")
        nookies.destroy(null, "username")
        Router.replace("/login")
    }  

  return (
    <div className="flex justify-center gap-8 w-full px-4 py-4 items-center fixed bg-white shadow">
        <Link href="/dashboard">Me</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/posts/create">Create Posts</Link>
        <button onClick={logoutHandler} className="px-4 py-2 bg-red-500 rounded-full">Logout</button>
    </div>
  )
}
