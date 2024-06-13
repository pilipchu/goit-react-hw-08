import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
// import { useSelector } from "react-redux";
// import { selectIsLoggenIn } from "../../redux/auth/selectors";

export default function Navigation() {
  // const isLoggedIn = useSelector(selectIsLoggenIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}
