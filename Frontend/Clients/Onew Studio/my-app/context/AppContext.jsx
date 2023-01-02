import {createContext, useContext, useEffect, useRef, useState} from 'react'
import {useRouter} from 'next/router'

const AppContext = createContext();

const UseAppContext = () => useContext(AppContext)

const AppProvider = ({children}) => {
    const router = useRouter();
    const [themeStorage, setThemeStorage] = useState("dark");
    const [offCanvas, setOffCanvas] = useState(false);
    const navLink = [
        {content: "Home", href: "/"},
        {content: "About", href: "/about"},
        {content: "Portofolios", href: "/portofolios"},
        {content: "Contact", href: "/contact"}
    ]
    const getPortLink = useRef()

    useEffect(() => {
        if (localStorage.getItem("theme") == "light"){
            lightMode()
        } else [
            darkMode()
        ]
    }, [])

    function themeHandler(){
        if (themeStorage == "dark"){
            lightMode()
        } else {
            darkMode()
        }
    }

    function lightMode(){
        setThemeStorage("light")
        localStorage.setItem("theme", "light")
        document.querySelector("html").classList.add("light")
    }

    function darkMode(){
        setThemeStorage("dark")
        localStorage.setItem("theme", "dark")
        document.querySelector("html").classList.remove("light")
    }

    const contextValue = {
        themeStorage,
        setThemeStorage,
        offCanvas,
        setOffCanvas,
        router,
        themeHandler,
        getPortLink,
        navLink,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export { UseAppContext, AppProvider };