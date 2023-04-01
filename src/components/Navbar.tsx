import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <a className="navbar-brand" href="/">
          <b>Joel's Website</b>
        </a>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Podcasts">Podcast</Link>
        </li>
        <li>
          <Link to="/Movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
