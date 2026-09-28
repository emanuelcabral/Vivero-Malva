import SmartImage from "../SmartImage.jsx";

export default function TeamCard({ nombre, rol, foto, iniciales }) {
  return (
    <article className="team-card">
      <SmartImage className="team-card__avatar" src={foto} alt={nombre} fallback={iniciales} />
      <div>
        <h4>{nombre}</h4>
        <p>{rol}</p>
      </div>
    </article>
  );
}
