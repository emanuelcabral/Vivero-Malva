import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../components/Item.jsx";
import SmartImage from "../components/SmartImage.jsx";

const slides = [
  { kicker: "Somos Vivero Malva", titulo: "Plantas & Jardinería", sub: "Calidad garantizada",
    foto: "img/hero-1.jpg" },
  { kicker: "Nuevo en la tienda", titulo: "Verde para tu casa", sub: "Interior, exterior y suculentas",
    foto: "img/hero-2.jpg" },
  { kicker: "Hecho a mano", titulo: "Macetas con carácter", sub: "Cerámica esmaltada artesanal",
    foto: "img/hero-3.jpg" },
];

const ventajas = [
  { t: "Las mejores plantas", d: "Seleccionamos cada ejemplar a mano en nuestro vivero propio." },
  { t: "Expertos certificados", d: "Paisajistas y técnicos te asesoran antes y después de comprar." },
  { t: "Precios accesibles", d: "Del productor a tu casa, sin intermediarios." },
  { t: "Servicio de calidad", d: "Envíos cuidados y garantía de 30 días en todas las plantas." },
];

const servicios = [
  { t: "Diseño de jardines", d: "Armamos tu proyecto de balcón, patio o terraza según luz y presupuesto.", foto: "img/servicio-diseno.jpg" },
  { t: "Plantación y trasplante", d: "Nos encargamos de plantar, trasplantar y renovar tus macetas.", foto: "img/servicio-plantacion.jpg" },
  { t: "Cuidado de plantas", d: "Visitas periódicas de poda, riego y control de plagas.", foto: "img/servicio-cuidado.jpg" },
];

const testimonios = [
  { txt: "Mi monstera llegó perfecta y con instrucciones claras. La atención fue excelente de principio a fin.", nombre: "Alan Domínguez", lugar: "Palermo" },
  { txt: "Me armaron el balcón entero en una tarde. Quedó mejor de lo que imaginaba.", nombre: "Yamila Romero", lugar: "Belgrano" },
  { txt: "Compré macetas y tierra. Muy buenos precios y todo embalado con muchísimo cuidado.", nombre: "Juan Díaz", lugar: "Tigre" },
];

const planes = [
  { nombre: "Plan Básico", precio: "$12.000", items: ["1 planta por mes", "Guía de cuidados", "Envío incluido", "Soporte por mail"] },
  { nombre: "Plan Plus", precio: "$24.000", items: ["2 plantas por mes", "Maceta de regalo", "Envío incluido", "Asesoría por WhatsApp"], destacado: true },
  { nombre: "Plan Pro", precio: "$45.000", items: ["4 plantas por mes", "Visita de un experto", "Envío prioritario", "Garantía extendida"] },
];

export default function Home() {
  const [actual, setActual] = useState(0);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const t = setInterval(() => setActual((a) => (a + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}productos.json`)
      .then((r) => r.json())
      .then((data) => setProductos(data.slice(0, 8)))
      .catch(() => setProductos([]));
  }, []);

  const mover = (d) => setActual((a) => (a + d + slides.length) % slides.length);

  return (
    <>
      {/* HERO SLIDER */}
      <section className="hero">
        {slides.map((s, i) => (
          <div key={s.titulo} className={"hero__slide" + (i === actual ? " hero__slide--on" : "")} aria-hidden={i !== actual}>
            <SmartImage className="hero__bg" src={s.foto} alt="" fallback="" />
            <div className="hero__shade" />
            <div className="hero__content">
              <p className="hero__kicker">{s.kicker}</p>
              <h1>{s.titulo}</h1>
              <p className="hero__sub">{s.sub}</p>
              <h4 className="hero__lead">Las mejores plantas de Buenos Aires</h4>
              <p className="hero__text">Plantas sanas, macetas artesanales y consejos simples para que todo crezca en tu hogar.</p>
              <div className="hero__actions">
                <Link to="/productos" className="btn btn--outline-light">Más sobre nosotros</Link>
                <Link to="/productos" className="btn">Comprar ahora</Link>
              </div>
            </div>
          </div>
        ))}
        <button className="hero__arrow hero__arrow--prev" onClick={() => mover(-1)} aria-label="Anterior">‹</button>
        <button className="hero__arrow hero__arrow--next" onClick={() => mover(1)} aria-label="Siguiente">›</button>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="section">
        <div className="container">
          <header className="head">
            <h2>¿Por qué elegirnos?</h2>
            <span className="head__line" />
            <p>Somos un vivero familiar con casi diez años de experiencia cuidando plantas y las casas que las reciben.</p>
          </header>
          <div className="why">
            {ventajas.map((v) => (
              <article key={v.t} className="why__item">
                <span className="why__icon">✓</span>
                <h4>{v.t}</h4>
                <p>{v.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER CTA */}
      <section className="cta">
        <SmartImage className="cta__bg" src="img/banner.jpg" alt="" fallback="" />
        <div className="cta__shade" />
        <div className="container cta__inner">
          <div>
            <h2>¿Problemas con tus plantas?</h2>
            <p>Escribinos y te ayudamos a diagnosticar y recuperar tu jardín.</p>
          </div>
          <Link to="/productos" className="btn">Contactar ahora</Link>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="section">
        <div className="container">
          <header className="head">
            <h2>Nuestros servicios</h2>
            <span className="head__line" />
            <p>Más allá de la tienda, te acompañamos en todo el proceso de armar tu espacio verde.</p>
          </header>
          <div className="services">
            {servicios.map((s) => (
              <article key={s.t} className="service">
                <SmartImage src={s.foto} alt={s.t} fallback={s.t} />
                <div className="service__body">
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS (galería) */}
      <section className="section section--grey">
        <div className="container">
          <header className="head">
            <h2>Productos destacados</h2>
            <span className="head__line" />
            <p>Una selección de lo más pedido por nuestros clientes.</p>
          </header>
          <div className="grid">
            {productos.map((p) => <Item key={p.id} {...p} />)}
          </div>
          <div className="center">
            <Link to="/productos" className="btn">Ver todos</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section">
        <div className="container">
          <header className="head">
            <h2>Clientes felices</h2>
            <span className="head__line" />
            <p>Lo que dicen quienes ya tienen su rincón verde.</p>
          </header>
          <div className="quotes">
            {testimonios.map((t) => (
              <figure key={t.nombre} className="quote">
                <blockquote>“{t.txt}”</blockquote>
                <figcaption><strong>{t.nombre}</strong><span>Cliente, {t.lugar}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="section section--grey">
        <div className="container">
          <header className="head">
            <h2>Planes de suscripción</h2>
            <span className="head__line" />
            <p>Recibí plantas nuevas todos los meses, con cuidados incluidos.</p>
          </header>
          <div className="plans">
            {planes.map((p) => (
              <article key={p.nombre} className={"plan" + (p.destacado ? " plan--hot" : "")}>
                <h3>{p.nombre}</h3>
                <p className="plan__price">{p.precio}<small> / mes</small></p>
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <Link to="/productos" className={"btn" + (p.destacado ? "" : " btn--ghost")}>Saber más</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
