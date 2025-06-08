import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-primary p-4 text-textLight">
      <Link
        to="/"
        className="text-xl font-bold hover:text-secondary transition"
      >
        Portfolio
      </Link>
    </nav>
  );
}

export default Navbar;
