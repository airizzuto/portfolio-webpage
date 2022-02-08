import React from "react";
import useTranslation from "next-translate/useTranslation";

import ContactForm from "./ContactForm";
import ContentWrapper from "../../components/section/ContentWrapper";

export default function Contact() {
    const { t, lang } = useTranslation('contact');

    return (
      <ContentWrapper image={`nasa2.jpg`}
      >
        <ContactForm />
      </ContentWrapper>
    )
}