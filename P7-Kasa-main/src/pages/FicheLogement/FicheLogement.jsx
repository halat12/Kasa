import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

/* ici on regroupe les jsx des compoosants */

import Carrousel from "../../components/ImageArticle/Slide_Article";
import Collapse from "../../components/OuvertureCase/Ouverture_Case";
import Host from "../../components/Profil/Profil";
import Rate from "../../components/Note/Note";
import Tag from "../../components/InfoLogement/Info_Logement";

import ListeLogements from "./logements.json";
console.log(ListeLogements);

export default function FicheLogement() {
  /* récupere les donnée du dom */
  const params = useParams();
  const navigate = useNavigate();
  /*récupere dans react*/
  const [pickedAppart, setPickedAppart] = useState();
  /*renvoie les effets*/
  useEffect(() => {
    /*logements.json renvoi vers le fichier json avec les info des logments*/
    const getData = async () => {
      const res = ListeLogements;
      console.log(res);
      const picked = res.find(({ id }) => id === params.id);
      console.log(picked);
      res.map(() => setPickedAppart(picked));
      if (picked === undefined) {
        navigate("/404");
      }
    };

    getData();
  });
  /* && inclut l'élement suivant si condition vrai */
  const slidePics = pickedAppart && pickedAppart.pictures;
  const tags = pickedAppart && pickedAppart.tags;
  const equipments = pickedAppart && pickedAppart.equipments;
  /*remplissage de la case equipement */
  const equip =
    pickedAppart &&
    equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    ));
  return (
    pickedAppart && (
      <div key={params.id} className="fiche-container">
        <Carrousel slides={slidePics} />
        <section className="hostInfo-container">
          <div className="title-tags-container">
            <div className="title-container redFont">
              <h1>{pickedAppart.title}</h1>
              <h2>{pickedAppart.location}</h2>
            </div>
            <div className="tags-container">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rate-host-container">
            <div className="host-container redFont">
              <Host
                hostName={pickedAppart.host.name}
                hostPic={pickedAppart.host.picture}
              />
            </div>
            <div className="rate-container">
              <Rate score={pickedAppart.rating} />
            </div>
          </div>
        </section>
        <div className="collapse-fiche-container">
          <Collapse
            aboutTitle="Description"
            aboutText={pickedAppart.description}
          />
          <Collapse aboutTitle="Équipements" aboutText={equip} />
        </div>
      </div>
    )
  );
}
