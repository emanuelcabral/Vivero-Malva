import { Link } from "react-router-dom";
import SmartImage from "./SmartImage.jsx";

export default function Item({ id, nombre, categoria, precio, imagen }) {
  return (
    <article className="item">
      <Link to={`/producto/${id}`} className="item__media" aria-label={`Ver ${nombre}`}>
        <SmartImage src={imagen} alt={nombre} fallback={nombre} />
        <span className="item__tag">{categoria}</span>
      </Link>
      <div className="item__body">
        <h3 className="item__name">{nombre}</h3>
        <p className="item__price">${precio.toLocaleString("es-AR")}</p>
        <Link to={`/producto/${id}`} className="btn btn--small">Ver detalle</Link>
      </div>
    </article>
  );
}
