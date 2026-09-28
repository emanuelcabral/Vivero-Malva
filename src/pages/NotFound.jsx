import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container estado">
      <h1 className="titulo">Página no encontrada</h1>
      <p>La dirección que buscás no existe.</p>
      <Link to="/" className="btn">Volver al inicio</Link>
    </section>
  );
}
