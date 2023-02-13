const { createContext, useContext, useState, useRef, useEffect } = require("react");
import { parseCookies, setCookie, destroyCookie } from 'nookies'

const appContext = createContext()

const UseAppContext = () => useContext(appContext)

const AppProvider = ({children}) => {
    const [searchUsersApi, setSearchUsersApi] = useState([]);
    const [searchPostsApi, setSearchPostsApi] = useState([]);
    const commentElement = useRef([])
    const [formReply, setFormReply] = useState()
    const [getHighestIdComment, setGetHighestIdComment] = useState(0)

    useEffect(() => {
    })

    const getHighestId = async () => {
        const cookies = parseCookies()
        const reqHighestCommentId = await fetch(`${process.env.PUBLIC_API_URL}/api/comments`, {
            headers: {
                "Authorization": "Bearer " + cookies.token
            }
        })
    
        const resHighestCommentId = await reqHighestCommentId.json()
        if (resHighestCommentId.data.length){
            const reduce = resHighestCommentId.data.reduce((prev, current) => {
                return (prev.id > current.id) ? prev : current
            })
    
            setGetHighestIdComment(reduce.id + 1)
        } else {
            setGetHighestIdComment(getHighestIdComment + 1)
        }
    }
    
    function replyFormHandler(data){
        setUsernameReply(data.attributes.user.data.attributes.username)
        setIsReply(true)
        setComment(`@${data.attributes.user.data.attributes.username} `)
        inputRef.current.focus()
    }

    function cancelReplyCommentHandler(){
        setIsReply(false)
        setComment("")
    }

    const contextValue = {
        searchUsersApi, 
        setSearchUsersApi,
        searchPostsApi,
        setSearchPostsApi,
        commentElement,
        formReply,
        setFormReply,
        replyFormHandler,
        cancelReplyCommentHandler,
        getHighestIdComment,
        setGetHighestIdComment,
        getHighestId
    }

    return (
        <appContext.Provider value={contextValue}>
           {children}
        </appContext.Provider>
    )
}
export { UseAppContext, AppProvider }