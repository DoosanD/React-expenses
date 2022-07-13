import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={"./logo192.png"} width={"30px"} alt="logo" />
      <Link to="/">
        <div className="navbar">Home</div>
      </Link>

      <Link to="/person">
        <div className="navbar">Person</div>
      </Link>
    </nav>
  );
}
