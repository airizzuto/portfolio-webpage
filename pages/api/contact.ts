import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
  
    const data = {
      serviceID: process.env.EMAILER_SERVICE_ID,
      templateID: process.env.EMAILER_TEMPLATE_ID,
      userID: process.env.EMAILER_USER_ID,
      template_params: {
        name: body.name,
        email: body.email,
        message: body.message,
        "g-recaptcha-response": body.token,
      },
      accessToken: process.env.EMAILER_ACCESS_TOKEN,
    }

    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify(data),
    }).then((result) => {
        res.status(result.status);
        res.end(JSON.stringify(result.text));
    }).catch((error) => {
      console.error(error);
      res.json(error);
      res.status(400).end();
    });
};
