import Link from "next/link"
import nookies from 'nookies'
import { useState } from "react"
import Router from "next/router"
import { authToken } from "./api/auth/authToken"

export async function getServerSideProps(ctx){
    const token = await authToken(ctx);

    return {
        props: {}
    }
}

export default function login() {
    const [field, setField] = useState({})

    const fieldHandler = (e) => {
        const {name, value} = e.target
        
        setField({
            ...field,
            [name]: value
        })
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        const loginReq = await fetch(`${process.env.PUBLIC_API_URL}/api/auth/local`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(field)
        })

        const loginRes = await loginReq.json()

        if (loginRes.jwt){
            e.target.reset()
            nookies.set(null, "token", loginRes.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            })
            nookies.set(null, "username", loginRes.user.username, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            })

            Router.replace("/dashboard")
        }
    }

    return (
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
          <form onSubmit={loginHandler} className="flex w-[30rem] flex-col space-y-10">
            <div className="text-center text-4xl font-medium">Log In</div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input type="text" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" name="identifier" onChange={fieldHandler} />
            </div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" name="password" onChange={fieldHandler} />
            </div>
            <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
                LOG IN
            </button>
            <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>
            <p className="text-center text-lg">
                No account?
                <Link href="/register" className="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</Link>
            </p>
          </form>
      </main>
    )
  }
  