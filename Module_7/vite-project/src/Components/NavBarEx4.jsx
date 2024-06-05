import { NavLink } from "react-router-dom";

export default function NavBarEx4() {

  return (
    <nav
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login Page</NavLink>
        </li>
        <li>
          <NavLink to="/bitcoinrates">Rates</NavLink>
        </li>
      </ul>
    </nav>
  );
}