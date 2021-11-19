import { useState } from "react";

import Style from "../../styles/ContactForm.module.scss" 

// https://w3collective.com/react-contact-form/
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/sendcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
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