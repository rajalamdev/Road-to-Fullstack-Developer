import db from "../../../libs/db"
import bcrypt from "bcryptjs"

export default async function(req, res){
    if (req.method !== "POST") return res.status(405).end();

    const { email, password } = req.body;

    if (email == "" || password == "") return res.status(401).end();

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const register = await db("users").insert({
        email,
        password: passwordHash
    })

    const registeredUser = await db("users").where({id: register}).first();

    res.status(200);
    res.json({
        message: "Register Successfully",
        registeredUser
    })
}