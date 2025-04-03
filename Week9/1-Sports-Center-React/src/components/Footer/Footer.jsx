// src/components/Footer/Footer.jsx
import React from "react";
import FooterLogo from "./FooterLogo";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  const infoLinks = [
    { label: "About Us", href: "#home" },
    { label: "Classes", href: "#classes" },
    { label: "Blog", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const helpfulLinks = [
    { label: "Services", href: "#services" },
    { label: "Supports", href: "mailto:nazif808@gmail.com" },
    {
      label: "Terms & Condition",
      href: "https://github.com/nazifkaraca",
      target: "_blank",
    },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section id="footer" className="mt-5">
      <div className="footer-container container w-75 d-flex flex-column gap-3">
        <FooterLogo />
        <div className="d-flex flex-row justify-content-evenly flex-wrap">
          <FooterColumn title="Information" links={infoLinks} />
          <FooterColumn title="Helpful Links" links={helpfulLinks} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
