import { Link } from "react-router-dom";
import StyledNavbar from "./navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>Covid ID</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/covid/indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/covid/province">Province</Link>
            </li>
            <li>
              <Link to="/covid/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
