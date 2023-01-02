import Link from "next/link";
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { UseAppContext } from "../context/AppContext";

export default function Navbar() {
  const context = UseAppContext();

  const nav = useRef()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const top = window.scrollY
      const navOffset = nav.current.offsetTop

      if (top >= navOffset){
        nav.current.classList.remove("absolute")
        nav.current.classList.add("fixed")
        nav.current.classList.add("top-0")
        nav.current.classList.remove("top-6")
      } else {
        nav.current.classList.remove("fixed")
        nav.current.classList.add("absolute")
      }

      if (top == 0){
        nav.current.classList.remove("top-0")
        nav.current.classList.add("top-6")
      }

    })
  }, [])

  useEffect(() => {
    if (context.router.pathname.includes("portofolios")){
      context.getPortLink.current.classList.add("bg-link") 
      context.getPortLink.current.classList.add("text-header-primary") 
      context.getPortLink.current.classList.add("hover:bg-link-hover") 
      context.getPortLink.current.classList.remove("hover:after:w-[50%]") 
    } else {
      context.getPortLink.current.classList.remove("bg-link") 
      context.getPortLink.current.classList.remove("text-header-primary") 
      context.getPortLink.current.classList.remove("hover:bg-link-hover") 
    }  
  })

  return (
      <nav ref={nav} className="absolute top-6 left-0 right-0 flex justify-between bg-navbar-primary md:backdrop-blur-lg items-center p-3 px-6 rounded-xl container w-11/12 shadow-md shadow-black/20">
          <Link href="/" className="font-bold text-xl text-header-primary">Onew Studio</Link>
          <div className={`items-center flex-col md:flex-row text-center md:text-left justify-center gap-8 flex fixed bg-sidebar md:bg-transparent backdrop-blur-lg md:backdrop-blur-0 md:static top-0 left-0 right-0 bottom-0 z-50 md:translate-y-0 -translate-y-full transition-transform duration-[600ms] ease-[cubic-bezier(.51,.92,.24,1.15)] ${context.offCanvas ? "translate-y-0": "-translate-y-full"}`}>
            <div className="flex gap-8 md:gap-2 text-header-secondary flex-col md:flex-row font-semibold md:font-medium">
                <Link 
                    className={`relative after:absolute after:block after:content-[''] after:rounded-full after:w-0 after:left-0 after:right-0 after:mx-auto after:bottom-0 after:transition-width after:h-[2px] after:bg-header-primary hover:text-header-primary rounded-lg ${context.router.pathname == "/" ? "hover:bg-link-hover" : ""} ${context.router.pathname == "/" ? "" : "hover:after:w-[50%]"} ${context.router.pathname == "/" ? "text-header-primary" : ""} ${context.router.pathname == "/" ? "bg-link" : ""} px-4 py-2 md:text-sm transition`} 
                    onClick={(e) => context.setOffCanvas(false)}
                    href="/">
                    Home
                </Link>
                <Link 
                    className={`relative after:absolute after:block after:content-[''] after:rounded-full after:w-0 after:left-0 after:right-0 after:mx-auto after:bottom-0 after:transition-width after:h-[2px] after:bg-header-primary hover:text-header-primary rounded-lg ${context.router.pathname == "/about" ? "hover:bg-link-hover" : ""} ${context.router.pathname == "/about" ? "" : "hover:after:w-[50%]"} ${context.router.pathname == "/about" ? "text-header-primary" : ""} ${context.router.pathname == "/about" ? "bg-link" : ""} px-4 py-2 md:text-sm transition`} 
                    onClick={(e) => context.setOffCanvas(false)}
                    href="/about">
                    About
                </Link>
                <Link 
                    ref={context.getPortLink}
                    className={`relative after:absolute after:block after:content-[''] after:rounded-full after:w-0 after:left-0 after:right-0 after:mx-auto after:bottom-0 after:transition-width after:h-[2px] after:bg-header-primary hover:text-header-primary rounded-lg ${context.router.pathname == "/portofolios" ? "hover:bg-link-hover" : ""} ${context.router.pathname == "/portofolios" ? "" : "hover:after:w-[50%]"} ${context.router.pathname == "/portofolios" ? "text-header-primary" : ""} ${context.router.pathname == "/portofolios" ? "bg-link" : ""} px-4 py-2 md:text-sm transition`} 
                    onClick={(e) => context.setOffCanvas(false)}
                    href="/portofolios">
                    Portofolios
                </Link>
                <Link 
                    className={`relative after:absolute after:block after:content-[''] after:rounded-full after:w-0 after:left-0 after:right-0 after:mx-auto after:bottom-0 after:transition-width after:h-[2px] after:bg-header-primary hover:text-header-primary rounded-lg ${context.router.pathname == "/contact" ? "hover:bg-link-hover" : ""} ${context.router.pathname == "/contact" ? "" : "hover:after:w-[50%]"} ${context.router.pathname == "/contact" ? "text-header-primary" : ""} ${context.router.pathname == "/contact" ? "bg-link" : ""} px-4 py-2 md:text-sm transition`} 
                    onClick={(e) => context.setOffCanvas(false)}
                    href="/contact">
                    Contact
                </Link>
            </div>
            <div className={`md:h-6 md:w-[1px] h-[1px] w-20 rounded-full ${context.themeStorage == "dark" ? "bg-white/30" : "bg-black/30"}`}></div>
            <div className={`flex gap-6 ${context.offCanvas ? "text-lg": "text-lg items-center"}`}>
              <Link target="_blank" 
                    href="https://wa.me/6289516106359?text=Hi%20saya%20tertarik%20dengan%20karya%20Anda"
                    rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
              </Link>
              <Link target="_blank" 
                    href="https://www.instagram.com/one.newstudio/"
                    rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-600" />
              </Link>
              <div onClick={context.themeHandler} className="cursor-pointer p-2 flex relative">
                  {context.themeStorage == "dark" ? (
                    <FontAwesomeIcon className={`text-header-primary absolute m-auto right-0 left-0 top-0 bottom-0`} icon={faMoon} />
                  ): (
                    <FontAwesomeIcon icon={faSun} className="text-orange-400 absolute right-0 left-0 top-0 bottom-0 m-auto" />
                  )}
              </div>
            </div>
          </div>
          <div className="w-6 h-4 md:hidden cursor-pointer flex flex-col justify-around relative z-50" onClick={() => context.setOffCanvas(!context.offCanvas)} >
              <div className={`bg-header-secondary w-full h-[2px] transition duration-200 ${context.offCanvas ? "rotate-[135deg]" : "rotate-0"} absolute ${context.offCanvas ? "" : "top-0"}`}></div>
              <div className={`bg-header-secondary w-full h-[2px] transition duration-200 absolute ${context.offCanvas ? "opacity-0" : "opacity-100"}`}></div>
              <div className={`bg-header-secondary w-full h-[2px] transition duration-200 ${context.offCanvas ? "-rotate-[135deg]" : "rotate-0"} absolute ${context.offCanvas ? "" : "bottom-0"}`}></div>
          </div>
      </nav>
  ) 
}
