import Banner from "../../components/ImageAccueil/ImageAccueil";
import Card from "../../components/Article/Article";
import { Link } from "react-router-dom";
import listeLogements from "../FicheLogement/logements.json";
console.log(listeLogements);

export default function Home() {
  return (
    <>
      <Banner />
      <div className="cards-container">
        {listeLogements.map((logement, id) => (
          <div className="card_logement" key={id}>
            <Link
              className="link_card_logement"
              to={`/logement/${logement.id}`}
            >
              <Card cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
