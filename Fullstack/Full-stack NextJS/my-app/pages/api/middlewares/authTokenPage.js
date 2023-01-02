export function authToken(ctx){
    return new Promise(resolve => {
        if(ctx.req.cookies.token){
            return ctx.res.writeHead(302, {
                location: "/posts"
            }).end()
        }

        return resolve("Unauthorize")
    })
}

export function unAuthToken(ctx){
    return new Promise((resolve, reject) => {
        if(!ctx.req.cookies.token){
            return ctx.res.writeHead(302, {
                location: "/auth/login"
            }).end()
        }

        return resolve(ctx.req.cookies.token)
    })
}