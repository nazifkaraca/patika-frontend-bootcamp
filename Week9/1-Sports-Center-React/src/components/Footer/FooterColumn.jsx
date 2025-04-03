const FooterColumn = ({ title, links }) => {
  return (
    <div className="d-flex flex-column text-white mx-3 my-3">
      <h4>{title}</h4>
      <ul className="list-unstyled">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              className="text-white text-decoration-none"
              target={link.target || "_self"}
              rel={link.target === "_blank" ? "noopener noreferrer" : ""}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
