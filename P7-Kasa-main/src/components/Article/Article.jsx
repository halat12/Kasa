export default function Card({ cover, title }) {
  return (
    <article className="card-logement">
      <img src={cover} alt="location" />
      <div className="card-logement__layer">
        <p className="card-logement__title">{title}</p>
      </div>
    </article>
  );
}

/* title et cover sotn des fonction d'on récupère dans ListeLogements qui est dans le fichier Home*/
