import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Item from "./Item.jsx";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useSearchParams();
  const categoria = params.get("categoria");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}productos.json`)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el catálogo.");
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p className="estado">Cargando productos...</p>;
  if (error) return <p className="estado estado--error">{error} Probá recargar la página.</p>;

  const categorias = [...new Set(productos.map((p) => p.categoria))];
  const visibles = categoria ? productos.filter((p) => p.categoria === categoria) : productos;

  return (
    <section className="container page">
      <h1 className="titulo">Productos</h1>
      <div className="chips" role="group" aria-label="Filtrar por categoría">
        <button className={"chip" + (!categoria ? " chip--on" : "")} onClick={() => setParams({})}>Todos</button>
        {categorias.map((c) => (
          <button key={c} className={"chip" + (categoria === c ? " chip--on" : "")} onClick={() => setParams({ categoria: c })}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid">
        {visibles.map((p) => <Item key={p.id} {...p} />)}
      </div>
    </section>
  );
}
