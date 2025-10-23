import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">☕ Wake Up!</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/categorias">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="nav-icons">
        <Link to="/carrito">🛒</Link>
        <Link to="/login">👤</Link>
      </div>
    </nav>
  );
}
