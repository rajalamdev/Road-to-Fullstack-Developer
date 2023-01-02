import db from "../../../../libs/db"
import authorization from "../../middlewares/authorization";

export default async function(req, res){
    if(req.method !== "DELETE") return res.status(405).end();

    const auth = await authorization(req, res)

    const { id } = req.query;
    const posts = await db("posts").where({id}).del()

    const deletedPosts = await db("posts").where({id}).first()

    res.status(200)
    res.json({
        message: "Delete Field",
        deletedPosts
    })
}