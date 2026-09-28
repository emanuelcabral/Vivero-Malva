import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SmartImage from "./SmartImage.jsx";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);
    fetch(`${import.meta.env.BASE_URL}productos.json`)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el producto.");
        return res.json();
      })
      .then((data) => setProducto(data.find((p) => p.id === Number(id)) ?? null))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p className="estado">Cargando producto...</p>;
  if (error) return <p className="estado estado--error">{error}</p>;
  if (!producto) {
    return (
      <div className="estado">
        <p>No encontramos ese producto.</p>
        <Link to="/productos" className="btn">Volver a productos</Link>
      </div>
    );
  }

  return (
    <section className="container page detalle">
      <SmartImage className="detalle__img" src={producto.imagen} alt={producto.nombre} fallback={producto.nombre} />
      <div className="detalle__info">
        <Link to={`/productos?categoria=${producto.categoria}`} className="item__tag item__tag--flat">{producto.categoria}</Link>
        <h1>{producto.nombre}</h1>
        <p className="detalle__price">${producto.precio.toLocaleString("es-AR")}</p>
        <p className="detalle__desc">{producto.descripcion}</p>
        <p className="detalle__stock">{producto.stock} unidades disponibles</p>
        <Link to="/productos" className="btn btn--ghost">Volver a productos</Link>
      </div>
    </section>
  );
}
