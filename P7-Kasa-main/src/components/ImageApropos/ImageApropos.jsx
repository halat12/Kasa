//la bannière about est une image et un claque assombrissant qui varient selon le responsive
import image from "../../images/Apropos_Header.png";

export default function AboutBanner() {
  return (
    <div className="aboutBackground wh-msk ">
      <img
        src={image} //Affichage des flèches seulement si length > 1
        alt="imageApropos"
        className="aboutBackground"
      />
    </div>
  );
}
