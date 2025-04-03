// src/components/Contact/Contact.jsx
import React from "react";
import ContactHeading from "./ContactHeading";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="my-5">
      <div className="contact-container container w-75 pb-5">
        <ContactHeading />
        <div className="row g-5">
          <div className="col-12 col-md-6 d-flex flex-column">
            <ContactInfo />
            <ContactForm />
          </div>
          <div className="col-12 col-md-6">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
