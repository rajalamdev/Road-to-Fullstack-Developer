import React, { useState } from 'react'
import Cookie from "js-cookie"
import Router from "next/router"
import { authToken } from '../api/middlewares/authTokenPage'

export async function getServerSideProps(ctx){
    await authToken(ctx);

    return {
        props: {}
    }
}

export default function login() {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("")
   const [loading, setLoading] = useState("Normal") 

    async function loginHandler(e){
        e.preventDefault();
        setLoading("Loading...")

        const req = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(!req.ok) return setLoading("Error" + req.status)

        const res = await req.json();
        setLoading("Success")

        Cookie.set("token", res.token)
        Router.push("/posts")
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginHandler}>
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit">Login</button>
        </form>
        <div>{loading}</div>
    </div>
  )
}
