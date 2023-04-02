import logo from "../../images/logo_footer.png";
import Nav from "../Liens/Liens_Pages";

export default function Header() {
  return (
    <header className="headerWrap">
      <figure className="headerWrap__fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}
