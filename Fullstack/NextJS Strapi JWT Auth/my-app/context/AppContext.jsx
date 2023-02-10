const { createContext, useContext, useState } = require("react");

const appContext = createContext()

const UseAppContext = () => useContext(appContext)

const AppProvider = ({children}) => {
    const [searchUsersApi, setSearchUsersApi] = useState([]);
    const [searchPostsApi, setSearchPostsApi] = useState([]);

    const contextValue = {
        searchUsersApi, 
        setSearchUsersApi,
        searchPostsApi,
        setSearchPostsApi
    }

    return (
        <appContext.Provider value={contextValue}>
           {children}
        </appContext.Provider>
    )
}
export { UseAppContext, AppProvider }