import Navbar from "./Navbar";
import TopNav from "./TopNav";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Layout({children, currentUser}){
    const navExcept = ["/login", "/register"]
    const [currentPath, setCurrentPath] = useState()

    useEffect(() => {
        setCurrentPath(Router.pathname)
    })
    

    return (
    <>
        <header className={`${currentPath === "/login" || currentPath === "/register" ? "hidden": "flex"}`}>
            <TopNav currentUser={currentUser} />
            <Navbar currentUser={currentUser} />
        </header>
        <main>
            <div className="container pt-28 pb-20">
                {children}
            </div>
        </main>
    </>
    )
}