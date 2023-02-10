const { createContext, useContext, useState, useRef } = require("react");

const appContext = createContext()

const UseAppContext = () => useContext(appContext)

const AppProvider = ({children}) => {
    const [searchUsersApi, setSearchUsersApi] = useState([]);
    const [searchPostsApi, setSearchPostsApi] = useState([]);
    const commentElement = useRef([])

    const contextValue = {
        searchUsersApi, 
        setSearchUsersApi,
        searchPostsApi,
        setSearchPostsApi,
        commentElement
    }

    return (
        <appContext.Provider value={contextValue}>
           {children}
        </appContext.Provider>
    )
}
export { UseAppContext, AppProvider }