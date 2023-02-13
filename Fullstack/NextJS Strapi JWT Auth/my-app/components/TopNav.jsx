import Router from "next/router"
import { useEffect, useRef } from "react"
import { useState } from "react"
import nookies from "nookies";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faEarthAsia, faLock, faGear, faXmark, faPowerOff, faPalette } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { UseAppContext } from "@/context/AppContext";

export default function TopNav({currentUser, token}) {  
  const context = UseAppContext();
  
  const navLinks = [
    {name: "Home", href: "/"}, {name: "Create Post", href: "/posts/create"}
  ]  

  const [current, setCurrent] = useState()
  const [currentPath, setCurrentPath] = useState()
  const topNav = useRef()
  const [search, setSearch] = useState();
  const settingElement = useRef()

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

      const reqSearchPosts = await fetch(`${process.env.PUBLIC_API_URL}/api/posts?populate[user][populate]=image&populate[likedBy]=*&populate[image]=*&filters[$or][0][caption][$contains]=${search}&populate[comments][populate][user][populate][0]=image&populate[comments][populate][replies][populate][user][populate][0]=image&filters[$or][1][user][username][$contains]=${search}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
      })

      const resSearchPosts = await reqSearchPosts.json()

      context.setSearchPostsApi(resSearchPosts.data)
    })
  }, [search])

  useEffect(() => {
    setCurrentPath(Router.pathname)
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

  function settingHandler(){
    settingElement.current.classList.remove("-bottom-full", "-z-50")
    settingElement.current.classList.add("bottom-0", "z-50")
  }

  function closeSetting(){
    settingElement.current.classList.remove("bottom-0", "z-50")
    settingElement.current.classList.add("-bottom-full", "-z-50")
  }

  return (
    <>
        <div ref={topNav} className="left-0 transition-all z-40 duration-200 right-0 py-[20px] absolute top-2 border-border-primary">
            <div className="max-w-[390px] sm:max-w-[500px] mx-auto flex justify-between items-center px-4">
              <FontAwesomeIcon className="cursor-pointer" onClick={() => Router.back()} icon={faChevronLeft} size="lg" />
              {currentPath === "/search" ? (
               <form className="flex flex-col gap-6 mx-auto max-w-[500px] text-sm w-[80%]">
                    <input type="text" className="w-[90%] block mx-auto h-8 rounded-full mt-1 outline-none self-center bg-bg-primary ring-1 ring-border-secondary px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" name="name" onChange={(e) => {
                      setSearch(() => e.target.value)
                    }} placeholder="Search..."></input>
              </form>
              ): (
                <h1 className="text-xl font-medium">{current}</h1>
                )}
              <FontAwesomeIcon onClick={settingHandler} icon={faGear} size="lg" className="cursor-pointer" />
            </div>
        </div>
        <div ref={settingElement} className="bg-bg-primary -z-50 transition-all duration-300 fixed left-0 right-0 -bottom-full h-full">
            <div className="relative h-full max-w-[390px] sm:max-w-[600px] mx-auto pt-20">
                <div className="absolute right-6 sm:right-0 top-4 cursor-pointer hover:bg-slate-600/20 px-[10px] py-[4px] rounded-lg" onClick={closeSetting}>
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </div>
                <div onClick={pushToSetting} className="flex gap-6 hover:bg-slate-600/20 py-4 px-4 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                    <div>
                      <h2>Account Information</h2>
                      <p className="text-text-third">See information like username and email</p>
                    </div>
                </div>
                <div className="flex gap-6 hover:bg-slate-600/20 py-4 px-4 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faLock} size="lg" />
                    <div>
                      <h2>Change Password</h2>
                      <p className="text-text-third">Change your password at any time</p>
                    </div>
                </div>
                <div className="flex gap-6 hover:bg-slate-600/20 py-4 px-4 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faPalette} size="lg" />
                    <div>
                      <h2>Theme</h2>
                      <p className="text-text-third">Change the theme (dark mode / light mode)</p>
                    </div>
                </div>
                <button className="cursor-not-allowed text-left flex gap-6 py-4 px-4 items-center w-full">
                    <FontAwesomeIcon icon={faEarthAsia} size="lg" />
                    <div>
                      <h2>Language</h2>
                      <p className="text-text-third">Change langunage</p>
                    </div>
                </button>
                <div onClick={logoutHandler} className="flex gap-6 py-4 px-4 w-max cursor-pointer items-center text-red-500">
                    <FontAwesomeIcon icon={faPowerOff} size="lg" />
                    <div>
                      <h2>Logout</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
