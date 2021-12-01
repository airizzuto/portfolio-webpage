import emailjs from "emailjs-com";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);

  const formValues = {
    name: body.name,
    email: body.email,
    message: body.message,
    "g-recaptcha-response": body.token,
  }

  // https://www.emailjs.com/docs/examples/reactjs/
  await emailjs.send(
    process.env.EMAILER_SERVICE_ID!,
    process.env.EMAILER_TEMPLATE_ID!,
    formValues,
    process.env.EMAILER_USER_ID!,
  ).then(response => {
    res.status(response.status).json({ text: response.text });
  }, (error) => {
    console.error(error);
    res.status(500)
      .json({ error: "something went wrong sending the contact request" });
  });
};

