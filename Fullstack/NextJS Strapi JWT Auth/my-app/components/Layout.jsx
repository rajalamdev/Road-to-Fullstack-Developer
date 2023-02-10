import Navbar from "./Navbar";
import TopNav from "./TopNav";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Layout({children, currentUser, token}){
    const navExcept = ["/login", "/register"]
    const [currentPath, setCurrentPath] = useState()

    useEffect(() => {
        setCurrentPath(Router.pathname)
    })
    

    return (
    <>
        <header className={`${currentPath === "/login" || currentPath === "/register" ? "hidden": "flex"}`}>
            <TopNav currentUser={currentUser} token={token} />
            <Navbar currentUser={currentUser} />
        </header>
        <main>
            <div className="pt-20 pb-[56px]">
                {children}
            </div>
        </main>
    </>
    )
}