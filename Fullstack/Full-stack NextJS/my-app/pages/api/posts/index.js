import db from "../../../libs/db"
import authorization from "../middlewares/authorization";

export default async function(req, res){
    if(req.method !== "GET") return res.status(405).end();

    const auth = await authorization(req, res);
    
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).end();

    // const authSplit = authorization.split(" ")

    // const [authType, authToken] = [authSplit[0], authSplit[1]]
    // if(authType !== "Bearer") return res.status(401).end();

    
    // try {
    //     const verify = jwt.verify(authToken, "secrettoken")
    // } catch (error) {
    //     return res.status(401).end();
    // }


    const dataPosts = await db("posts")

    res.status(200);
    res.json({
        message: "Posts",
        dataPosts
    })
}