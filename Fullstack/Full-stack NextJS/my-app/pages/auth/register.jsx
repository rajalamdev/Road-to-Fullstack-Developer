import React, { useState } from 'react'
import { authToken } from '../api/middlewares/authTokenPage';

export async function getServerSideProps(ctx){
  await authToken(ctx)

  return {
    props: {}
  }
}

export default function register() {

   const [info, setInfo] = useState({
        email: "",
        password: ""
   })  

   const [loading, setLoading] = useState("normal")

   async function registerHandler(e){
        e.preventDefault();

        setLoading("loading...")

        const req = await fetch("/api/auth/register", {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!req.ok) return setLoading("Errror" + req.status)

        const res = await req.json()
        setLoading("Success")
   }

   function infoHandler(e){
      const name = e.target.getAttribute("name")

      setInfo({
        ...info,
        [name]: e.target.value,
      })
   }

  return (
    <div>
        <h1>Register Form</h1>
        <form onSubmit={registerHandler}>
            <input type="text" name="email" onChange={(e) => infoHandler(e)} />
            <br />
            <input type="password" name="password" onChange={(e) => infoHandler(e)} />
            <br />
            <br />
            <button type="submit">Register</button>
        </form>
        <div>{loading}</div>
    </div>
  )
}
