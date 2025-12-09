import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Create Blog</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </nav>
  );
}
