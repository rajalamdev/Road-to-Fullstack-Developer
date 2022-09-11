import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

// Menggunakan state
// export const AppContext = createContext({})

// export function UseAppContext(){
//     return useContext(AppContext);
// }

// export function AppProvider({ children }){
//     const [user, setUser] = useState({});
//     const [darkMode, setDarkMode] = useState(true);

//     useEffect(() => {
//         const user = {
//             name: "Marsha Lenathea Lavia",
//             avatar: "https://64.media.tumblr.com/4d49e898b29985db1c1ad16aa19dd4a8/aceb1b9f809f201e-d4/s540x810/ab028d3557cf8839f0791935cd092106247fcbaf.jpg"
//         }

//         setUser(user);
//     }, []);

//     const valueAppContext = {
//         user: user,
//         setUser,
//         darkMode: darkMode,
//         setDarkMode,
//     }

//     return (
//         <AppContext.Provider value={valueAppContext}>
//             {children}
//         </AppContext.Provider>
//     )
// }


// Menggunakan Reduce
export const AppContext = createContext({})

export function UseAppContext(){
    return useContext(AppContext);
}

function reducer(state, action){
    switch(action.type){
        case "updateUser" :
            return { ...state, user: action.payload}
        case "darkMode" :
            return {...state, darkMode: state.darkMode === "true" ? "false" : "true"}
        default : 
            throw new Error("unexpected action!");
    }
}

const initialState = {
    user: {},
    darkMode: "true"
}

export function AppProvider({ children }){
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const user = {
            name: "Marsha Lenathea Lavia",
            avatar: "https://64.media.tumblr.com/4d49e898b29985db1c1ad16aa19dd4a8/aceb1b9f809f201e-d4/s540x810/ab028d3557cf8839f0791935cd092106247fcbaf.jpg"
        }

        dispatch({
            type: "updateUser",
            payload: user
        })
    }, []);

    const valueAppContext = [state, dispatch]

    return (
        <AppContext.Provider value={valueAppContext}>
            {children}
        </AppContext.Provider>
    )
}

