import db from "../../../../libs/db"
import authorization from "../../middlewares/authorization";

export default async function(req, res){
    if(req.method !== "GET") return res.status(405).end();

    const auth = authorization(req, res)

    const { id } = req.query;
   
    const detailPost = await db("posts").where({id}).first();

    res.status(200);
    res.json({
        message: "Edit Field",
        detailPost
    })
}