import Router from "next/router"
import { useEffect, useRef } from "react"
import { useState } from "react"
import nookies from "nookies";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faGear, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { UseAppContext } from "@/context/AppContext";

export default function TopNav({currentUser, token}) {  
  const context = UseAppContext();
  
  const navLinks = [
    {name: "Home", href: "/"}, {name: "Create Post", href: "/posts/create"}
  ]  

  const [current, setCurrent] = useState()
  const [currentPath, setCurrentPath] = useState()
  const router = useRouter()
  const topNav = useRef()
  const [search, setSearch] = useState();

  useEffect(() => {
    if(search === "") {
      context.setSearchUsersApi(() => [])
      return context.setSearchPostsApi(() => [])
    }
    setTimeout( async () => {
      const reqSearch = await fetch(`${process.env.PUBLIC_API_URL}/api/users?populate=*&filters[$or][0][name][$contains]=${search}&filters[$or][1][username][$contains]=${search}`, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

      const resSearch = await reqSearch.json()

      context.setSearchUsersApi(() => resSearch)

      const reqSearchPosts = await fetch(`${process.env.PUBLIC_API_URL}/api/posts?populate[user][populate]=image&populate[likedBy]=*&populate[image]=*&filters[$or][0][caption][$contains]=${search}&filters[$or][1][user][username][$contains]=${search}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
      })

      const resSearchPosts = await reqSearchPosts.json()

      context.setSearchPostsApi(resSearchPosts.data)
    })
  }, [search])

  useEffect(() => {
    setCurrentPath(router.pathname)
    window.addEventListener("scroll", () => {
      const top = window.scrollY;
      const navOffset = topNav.current.offsetTop

      if(top >= navOffset){
        topNav.current.classList.remove("absolute", "top-2", "py-[20px]")        
        topNav.current.classList.add("fixed", "bg-nav-primary", "backdrop-blur-md", "top-0", "py-4", "border-b")
      }
      
      if(top == 0){
        topNav.current.classList.remove("fixed", "bg-nav-primary", "backdrop-blur-md", "top-0", "py-4", "border-b")
        topNav.current.classList.add("absolute", "top-2", "py-[20px]")
      }
    })

    navLinks.map((nav) => {
        if(Router.query.profile === currentUser.username) return setCurrent("@" + currentUser.username)

        Router.pathname === nav.href && setCurrent(nav.name)
    })
  })

  function logoutHandler(){
    nookies.destroy(null, "token")
    Router.replace("/login")
  }  
  return (
    <>
        <div ref={topNav} className="left-0 transition-all z-50 duration-200 right-0 py-[20px] absolute top-2 border-border-primary">
            <div className="max-w-[390px] sm:max-w-[500px] mx-auto flex justify-between items-center px-4">
              <FontAwesomeIcon onClick={() => router.back()} icon={faChevronLeft} size="lg" />
              {currentPath === "/search" ? (
               <form className="flex flex-col gap-6 mx-auto max-w-[500px] text-sm w-[80%]">
                    <input type="text" className="w-[90%] block mx-auto h-8 rounded-full mt-1 outline-none self-center bg-bg-primary ring-1 ring-border-secondary px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" name="name" onChange={(e) => {
                      setSearch(() => e.target.value)
                    }} placeholder="Search..."></input>
              </form>
              ): (
                <h1 className="text-xl font-medium">{current}</h1>
                )}
              <FontAwesomeIcon onClick={logoutHandler} icon={faGear} size="lg" />
            </div>
        </div>
    </>
  )
}
