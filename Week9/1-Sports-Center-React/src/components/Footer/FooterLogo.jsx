import logo from "../../assets/logo.png";

const FooterLogo = () => {
  return (
    <div className="d-flex flex-column">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" />
      </a>
      <p className="text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat error
        sit saepe, incidunt necessitatibus eos exercitationem debitis aut
        deleniti dolores nesciunt iusto nemo neque, facere rem possimus dolorum
        corrupti excepturi vel magnam iste suscipit.
      </p>
    </div>
  );
};

export default FooterLogo;
