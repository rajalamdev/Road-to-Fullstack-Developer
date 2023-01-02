// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodemailer";

export default async function handler(req, res) {
  const data = req.body;
  
  console.log(data);
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      "text": "Test",
      html: `<h1>From: ${data.email}</h1>\n<p>Name: ${data.name}</h1>\n<h1>Message: ${data.message}</h1>`
    })
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ name: 'John Doe' })
}
