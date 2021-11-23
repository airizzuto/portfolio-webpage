import { useState } from "react";

import Style from "../../styles/ContactForm.module.scss" 

// https://w3collective.com/react-contact-form/
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    const details = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // FIXME: env undefined, cors
    await fetch(process.env.EMAILER_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(details),
    }).then(response => {
      setStatus("Submit");
      alert(response.status);
      return response.json();
    }).catch(error => {
      console.error("Error sending email: ", error);
    });
  }

  return (
    <form onSubmit={handleSubmit} className={Style.Form}>
      <div className={Style.Field}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div className={Style.Field}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div className={Style.Field}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  )
}

export default ContactForm;