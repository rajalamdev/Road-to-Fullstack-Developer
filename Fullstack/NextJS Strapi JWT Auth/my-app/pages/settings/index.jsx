import { useRef } from "react"
import { verifyToken } from "../api/auth/authToken"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEarthAsia, faLock, faPowerOff, faPalette } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons";
import nookies from "nookies";
import Router from "next/router";
import Head from "next/head";

export async function getServerSideProps(ctx){  
  const verify = await verifyToken(ctx)
  
  return {
      props: {
          token: verify,
      }
  }
}

export default function Account() {
  const settingElement = useRef()

  function pushToSetting(target){
    Router.push(`/settings/${target}`)
    settingElement.current.classList.remove("bottom-0", "z-50")
    settingElement.current.classList.add("-bottom-full", "-z-50")
  }

  function logoutHandler(){
    nookies.destroy(null, "token")
    Router.replace("/login")
  }  

  return (
    <>
    <Head>
        <title>Settings</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
    </Head>
    <div ref={settingElement} className="bg-bg-primary z-30 transition-all duration-300 fixed left-0 right-0 bottom-0 top-0 h-full">
            <div className="relative h-full max-w-[390px] sm:max-w-[500px] mx-auto pt-20">
                <div onClick={() => pushToSetting("account")} className="flex gap-6 hover:bg-slate-600/20 py-4 px-4 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                    <div>
                      <h2>Account Information</h2>
                      <p className="text-text-third">See information like username and email</p>
                    </div>
                </div>
                <div onClick={() => pushToSetting("password")} className="flex gap-6 hover:bg-slate-600/20 py-4 px-4 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faLock} size="lg" />
                    <div>
                      <h2>Change Password</h2>
                      <p className="text-text-third">Change your password at any time</p>
                    </div>
                </div>
                <button disabled className="w-full text-left flex gap-6 hover:cursor-not-allowed py-4 px-4 items-center relative">
                    <FontAwesomeIcon icon={faPalette} size="lg" />
                    <div>
                      <h2>Theme</h2>
                      <p className="text-text-third">Change the theme</p>
                    </div>
                    <div className="absolute right-4 border border-border-primary border-dashed text-text-third text-xs px-2 py-2">Not available</div>
                </button>
                <button disabled className="hover:cursor-not-allowed text-left flex gap-6 py-4 px-4 items-center w-full relative">
                    <FontAwesomeIcon icon={faEarthAsia} size="lg" />
                    <div>
                      <h2>Language</h2>
                      <p className="text-text-third">Change langunage</p>
                    </div>
                    <div className="absolute right-4 border border-border-primary border-dashed text-text-third text-xs px-2 py-2">Not available</div>
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