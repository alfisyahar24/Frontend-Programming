import { Link } from "react-router-dom";
import StyledFooter from "./footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <div>
          <h1>Covid ID</h1>
          <p>Developed by alfisyahar</p>
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
      </footer>
    </StyledFooter>
  );
}

export default Footer;
