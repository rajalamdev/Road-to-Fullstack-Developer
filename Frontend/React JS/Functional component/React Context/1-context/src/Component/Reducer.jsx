import { useEffect } from "react";
import { useReducer } from "react";

function reducer(state, action){
    
    switch(action.type){
        case "increment" :
            return { ...state, count: state.count + action.payload };
        case "decrement" :
            return { ...state, count: state.count - action.payload };
        case "toggleTheme" :
            return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' }
        default : 
            throw new Error("unexpected action!");
    }
}

const initialState = {
    count: 0,
    theme: 'dark'
}

export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);  

  return (
    <>
        <button onClick={() => dispatch({type: 'decrement', payload: 2})}>-</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({type: 'increment', payload: 4})}>+</button>
        <button onClick={() => dispatch({type: 'toggleTheme'})}>Toggle</button>
    </>
  )
}
