const ContactForm = () => {
  return (
    <div className="contact-input mt-3">
      <h3>Make An Appoinment</h3>
      <input
        type="text"
        placeholder="Your Name"
        className="form-control my-2"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="form-control my-2"
      />
      <textarea
        placeholder="Your Message"
        className="form-control my-2"
        rows="4"
      ></textarea>
    </div>
  );
};

export default ContactForm;
