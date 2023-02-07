import { verifyToken } from "../api/auth/authToken"

export async function getServerSideProps(ctx){
    const verify = await verifyToken(ctx)

    const reqMyProfile = await fetch(`${process.env.PUBLIC_API_URL}/api/users/me?populate=*`, {
        headers: {
            "Authorization": "Bearer " + verify
        }
    })

    const resMyProfile = await reqMyProfile.json()

    return {
        props: {
            token: verify,
            me: resMyProfile
        }
    }
}

export default function edit({currentUser, me}) {
  console.log(me)  
  return (
    <div>
        <form className="flex flex-col gap-6 mx-auto max-w-[500px] text-sm">
            <div className="flex justify-center">
                <div className="relative after:absolute after:block after:content-['Name'] after:bg-bg-primary after:left-3 after:-top-[6px] after:px-1 after:text-blue-400"></div>
                <input type="text" className="w-[90%] h-8 rounded mt-1 outline-none self-center bg-bg-primary ring-1 ring-text-third px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" value={me.name} />
            </div>
            <div className="flex justify-center">
                <div className="relative after:absolute after:block after:content-['Bio'] after:bg-bg-primary after:left-3 after:-top-[6px] after:px-1 after:text-blue-400"></div>
                <input type="text" className="w-[90%] h-8 rounded mt-1 outline-none self-center bg-bg-primary ring-1 ring-text-third px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" value={me.bio} />
            </div>
            <div className="flex justify-center">
                <div className="relative after:absolute after:block after:content-['Location'] after:bg-bg-primary after:left-3 after:-top-[6px] after:px-1 after:text-blue-400"></div>
                <input type="text" className="w-[90%] h-8 rounded mt-1 outline-none self-center bg-bg-primary ring-1 ring-text-third px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" value={me.location} />
            </div>
            <div className="flex justify-center">
                <div className="relative after:absolute after:block after:content-['Link'] after:bg-bg-primary after:left-3 after:-top-[6px] after:px-1 after:text-blue-400"></div>
                <input type="text" className="w-[90%] h-8 rounded mt-1 outline-none self-center bg-bg-primary ring-1 ring-text-third px-4 focus:w-full transition-all duration-300 focus:ring-2 focus:ring-blue-400" value={me.link} />
            </div>
            <button type="submit" className="bg-blue-500 w-max mx-auto px-8 py-[6px] rounded">Save</button>
        </form>
    </div>
  )
}
