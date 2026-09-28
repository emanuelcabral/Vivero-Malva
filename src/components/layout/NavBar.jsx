import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/productos", label: "Productos" },
  { to: "/carrito", label: "Carrito" },
];

export default function NavBar() {
  return (
    <nav className="nav" aria-label="Navegación principal">
      <div className="container nav__inner">
        <Link to="/" className="nav__logo">
          <span className="nav__mark">M</span> Vivero Malva
        </Link>
        <ul className="nav__list">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => "nav__link" + (isActive ? " nav__link--active" : "")}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/productos" className="btn btn--small nav__cta">Comprar ahora</Link>
      </div>
    </nav>
  );
}
