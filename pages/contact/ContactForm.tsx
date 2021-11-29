import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Style from "../../styles/ContactForm.module.scss" 

// https://w3collective.com/react-contact-form/
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const formRef = useRef<HTMLFormElement>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    const details = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
  
    // FIXME: url env
    // TODO: validation
    await fetch("http://localhost:5000/v1/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(details),
    }).then(response => {
      setStatus("Submit");
      formRef.current.reset();  // TODO: test
      return response.json();
    }).catch(error => {
      alert("Something went wrong sending the email...")
      console.error("Error sending email: ", error);
    });
  }

  // https://formik.org/docs/guides/validation
  return (
    // <form className={Style.Form} id={"contactForm"} onSubmit={handleSubmit} ref={formRef} >
    //   <div className={Style.Field}>
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" id="name" required />
    //   </div>
    //   <div className={Style.Field}>
    //     <label htmlFor="email">Email:</label>
    //     <input type="email" id="email" required />
    //   </div>
    //   <div className={Style.Field}>
    //     <label htmlFor="message">Message:</label>
    //     <textarea id="message" required />
    //   </div>
    //   <button type="submit">{status}</button>
    // </form>

    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className={Style.Form} ref={formRef}>
          <div className={Style.Field}>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </div>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="span" />
          <Field type="text" name="message" />
          <ErrorMessage name="message" component="span" />
          <button type="submit" disabled={isSubmitting}>{status}</button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;