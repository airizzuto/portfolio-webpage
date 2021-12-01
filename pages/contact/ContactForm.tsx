import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

import formSchema from "../../validators/formValidation";

import Style from "../../styles/ContactForm.module.scss" 

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [status, setStatus] = useState("Send");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (values: FormValues) => {
    const token = await recaptchaRef.current?.executeAsync();

    setStatus("Sending...");

    const formValues = {
      "name": values.name,
      "email": values.email,
      "message": values.message,
      "g-recaptcha-response": token,
    }

    await fetch(
      "api/contact",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues)
      },
    ).then((res) => {
      console.log(res.json());
    }).catch(error => { 
      alert("There was a problem sending the contact request...");
    });

    setStatus("Send");
  };

  // https://formik.org/docs/guides/validation
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={formSchema}
      onSubmit={(
        values: FormValues,
        { setSubmitting, resetForm }: FormikHelpers<FormValues>,
      ) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
            resetForm();
          }, 400);
        }
      }
    >
      {({ isSubmitting }) => (
        <Form className={Style.Form}>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          />
          <div className={Style.Field}>
            <label>Name:</label>
            <Field type="text" name="name"/>
            <ErrorMessage name="name" component="span" />
          </div>
          <div className={Style.Field}>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <div className={Style.Field}>
            <label>Message:</label>
            <Field as="textarea" name="message" />
            <ErrorMessage name="message" component="span" />
          </div>
          <button type="submit" disabled={isSubmitting}>{status}</button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;