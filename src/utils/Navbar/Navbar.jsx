import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <div className="navbar-buttons-left-part">
          <Link className="navbar-button" to={"/"}>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </div>
        <div className="navbar-buttons-right-part">
          <Link className="navbar-button" to={"/challenge-one"}>
            Challenge 1
          </Link>
          <Link className="navbar-button" to={"/challenge-two"}>
            Challenge 2
          </Link>
          <Link className="navbar-button" to={"/challenge-three"}>
            Challenge 3
          </Link>
        </div>
      </div>
    </nav>
  );
};
