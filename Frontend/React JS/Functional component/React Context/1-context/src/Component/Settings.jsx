import { useState } from "react";
import {  UseAppContext } from "../Context/AppContext"

export default function Settings() {
  const [state, dispatch] = UseAppContext(); 
  const [username, setUsername] = useState('');
  console.log(state);

  function updatedUsername(e){
    e.preventDefault();
    dispatch({
      type: "updateUser",
      payload: {
        ...state.user,
        name: username
      }
    })
    setUsername('');
  }  

  return (
    <form style={{margin: "20px"}} onSubmit={updatedUsername}>
        <input type="text" id="username" placeholder="change username" value={username} onChange={(e) => {
            setUsername(e.target.value);
        }} />
        <input type="submit" value="save" />
    </form>
  )
}
