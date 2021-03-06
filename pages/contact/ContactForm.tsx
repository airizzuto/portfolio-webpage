import React, { useRef, useState } from "react";
import useTranslation from 'next-translate/useTranslation';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

import formSchema from "../../validators/formValidation";

import Style from "../../styles/ContactForm.module.scss" 

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { t, lang } = useTranslation('contact');
  const labels = {
    name: t("contact_name"),
    email: t("contact_email"),
    message: t("contact_message"),
  }
  const [status, setStatus] = useState("Send");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (values: FormValues) => {
    const token = await recaptchaRef.current?.executeAsync();

    setStatus("Sending...");

    const config = {
      serviceID: process.env.NEXT_PUBLIC_EMAILER_SERVICE_ID!,
      templateID: process.env.NEXT_PUBLIC_EMAILER_TEMPLATE_ID!,
      userID: process.env.NEXT_PUBLIC_EMAILER_USER_ID!,
    }

    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
      "g-recaptcha-response": token,
    }

    await emailjs.send(
      config.serviceID,
      config.templateID,
      templateParams,
      config.userID,
    ).then(result => {
      console.log('SUCCESS!', result.status, result.text);
    }).catch(error => {
      console.error("FAILED", error);
      alert("There was a problem sending the contact request...");
      setStatus("Send");
  });

    setStatus("Send");
  };

  return (
    <div className={Style.Container}>
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
              <label>{labels.name}</label>
              <Field type="text" name="name"/>
              <ErrorMessage name="name" component="span" />
            </div>
            <div className={Style.Field}>
              <label>{labels.email}</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="span" />
            </div>
            <div className={Style.Field}>
              <label>{labels.message}</label>
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component="span" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {status}
            </button>
          </Form>
        )}
      </Formik>
    </div>
    
  );
}

export default ContactForm;