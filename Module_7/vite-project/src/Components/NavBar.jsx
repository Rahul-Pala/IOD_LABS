import { NavLink } from "react-router-dom";

export default function NavBar() {

  return (
    <nav
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dash">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      {/* ++ Add another page with route and component */}
    </nav>
  );
}
