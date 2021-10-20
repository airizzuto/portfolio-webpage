import React from "react";
import ContactForm from "./ContactForm";

import Style from "./ContactForm.module.scss"

export default function Contact() {
    return (
      <div className={Style.Container}>
        <ContactForm />
      </div>
    )
}