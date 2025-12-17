import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../reducers/authReducer";

export default function Navbar() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Create Blog</Link>
        </li>
      </ul>

      <ul className="navAuth">
        {token ? (
          <li style={{ cursor: "pointer" }} onClick={handleLogout}>
            Logout
          </li>
        ) : (
          <>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
