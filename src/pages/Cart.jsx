import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <section className="container estado">
      <h1 className="titulo">Carrito</h1>
      <p>Tu carrito está vacío. Cuando sumemos la funcionalidad completa, vas a ver tus productos acá.</p>
      <Link to="/productos" className="btn">Explorar productos</Link>
    </section>
  );
}
