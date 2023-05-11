import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/studies"}>Estudios</Link>
        <Link to={"/providers"}>Proveedores</Link>
        <Link to={"/clients"}>Clientes</Link>
        <Link to={"/"}>Home</Link>
      </nav>
    </header>
  );
};

export default Header;
