import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Product Catalog
        </Link>
      </div>
    </nav>
  );
}
