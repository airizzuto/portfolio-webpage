import React from "react";
import useTranslation from "next-translate/useTranslation";
import ContactForm from "./ContactForm";

import Style from "../../styles/ContactForm.module.scss"
import ContentWrapper from "../../components/Content/ContentWrapper";

export default function Contact() {
    const { t, lang } = useTranslation('contact');

    return (
      <ContentWrapper image={`nasa2.jpg`}
      >
        {/* TODO: contact info card */}
        <ContactForm />
      </ContentWrapper>
    )
}