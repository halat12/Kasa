import emptyStar from "../../images/etoile_vide.png";
import fullStar from "../../images/etoile.png";

export default function Rate({ score }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rate-comp">
      {stars.map((level) =>
        score >= level ? (
          <img
            key={level.toString()}
            className="star"
            src={fullStar}
            alt="rating star"
          />
        ) : (
          //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
          <img
            key={level.toString()}
            className="star"
            src={emptyStar}
            alt="rating star"
          />
        )
      )}
    </div>
  );
}
