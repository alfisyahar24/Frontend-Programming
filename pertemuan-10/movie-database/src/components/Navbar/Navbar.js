/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledNavbar>
      <StyledNavbar>
        <nav>
          <StyledNavbar>
            <h1>Movie App</h1>
          </StyledNavbar>
          <StyledNavbar>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movie/create">Add Movie</Link>
              </li>
              <li>
                <Link to="/movie/popular">Popular</Link>
              </li>
              <li>
                <Link to="/movie/now-playing">Now Playing</Link>
              </li>
              <li>
                <Link to="/movie/top-rated">Top Rated</Link>
              </li>
            </ul>
          </StyledNavbar>
        </nav>
      </StyledNavbar>
    </StyledNavbar>
  );
}

export default Navbar;
