import { useState } from "react";
import { Link } from "react-router-dom";
import TeamCard from "./TeamCard.jsx";

const equipo = [
  { nombre: "Lucía Fernández", rol: "Fundadora y paisajista", iniciales: "LF", foto: "https://i.pravatar.cc/120?img=47" },
  { nombre: "Martín Ortega", rol: "Responsable de vivero", iniciales: "MO", foto: "https://i.pravatar.cc/120?img=12" },
  { nombre: "Sofía Ledesma", rol: "Atención al cliente", iniciales: "SL", foto: "https://i.pravatar.cc/120?img=32" },
];

const sedes = [
  { zona: "Palermo", direccion: "Honduras 4800, CABA" },
  { zona: "Belgrano", direccion: "Av. Cabildo 2300, CABA" },
  { zona: "Tigre", direccion: "Av. Cazón 1100, Tigre" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEnviado(true);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <section>
          <h3>Vivero Malva</h3>
          <p>Plantas, macetas y asesoría para armar tu espacio verde. Vivero familiar en Buenos Aires desde 2015.</p>
          <Link to="/productos" className="footer__more">Ver catálogo ›</Link>
          <h3 className="footer__sub">Legales</h3>
          <ul className="footer__links">
            <li><Link to="/">Políticas de privacidad</Link></li>
            <li><Link to="/">Términos y condiciones</Link></li>
            <li><Link to="/">Cambios y devoluciones</Link></li>
          </ul>
        </section>

        <section>
          <h3>Contacto</h3>
          <dl className="footer__dl">
            <dt>Dirección:</dt><dd>Honduras 4800, Palermo, CABA</dd>
            <dt>Teléfono:</dt><dd>(011) 5555-0123</dd>
            <dt>Email:</dt><dd>hola@viveromalva.com.ar</dd>
          </dl>
          <h3 className="footer__sub">Sucursales</h3>
          <ul className="footer__list">
            {sedes.map((s) => (
              <li key={s.zona}><strong>{s.zona}</strong> · {s.direccion}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Horarios</h3>
          <p>Lunes a sábados: 09:00 - 19:00</p>
          <p>Domingos: 10:00 - 15:00</p>
          <p>Feriados: cerrado</p>
          <h3 className="footer__sub">Newsletter</h3>
          <form className="newsletter" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">Correo electrónico</label>
            <input id="newsletter-email" type="email" placeholder="tu@correo.com" value={email}
              onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit" className="btn btn--small">Suscribirme</button>
          </form>
          {enviado && <p className="newsletter__ok">¡Listo! Te suscribiste al newsletter.</p>}
        </section>

        <section className="footer__team">
          <h3>Nuestro equipo</h3>
          <div className="team-list">
            {equipo.map((p) => <TeamCard key={p.nombre} {...p} />)}
          </div>
        </section>
      </div>

      <div className="footer__legal">
        <div className="container">
          © {new Date().getFullYear()} Vivero Malva S.R.L. Todos los derechos reservados. Nombre, logo e imágenes son propiedad intelectual de la empresa.
        </div>
      </div>
    </footer>
  );
}
