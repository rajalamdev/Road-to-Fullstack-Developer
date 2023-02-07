import Router from "next/router"
import { useEffect, useRef } from "react"
import { useState } from "react"

export default function TopNav({currentUser}) {      
  const navLinks = [
    {name: "Home", href: "/"}, {name: "Create Post", href: "/posts/create"}
  ]  

  const [current, setCurrent] = useState()
  const topNav = useRef()

  useEffect(() => {
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

  return (
    <>
        <div ref={topNav} className="left-0 transition-all duration-200 right-0 py-[20px] absolute top-2 border-border-primary justify-center flex items-center z-10">
            <h1 className="text-xl font-medium">{current}</h1>
        </div>
    </>
  )
}
