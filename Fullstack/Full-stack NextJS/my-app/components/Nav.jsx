import Link from "next/link";
import Cookies from "js-cookie";
import Router from "next/router";

export default function Nav() {
  function logoutHandler(){
    Cookies.remove("token")
    Router.replace("/auth/login")
  }  

  return (
    <div>
        <Link href="/posts">Home</Link>
        <Link href="/posts/create">Create</Link>
        <Link href="" onClick={logoutHandler}>Logout</Link>
    </div>
  )
}
