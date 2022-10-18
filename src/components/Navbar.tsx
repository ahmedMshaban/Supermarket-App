import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { cartCountSelector } from "../store/cartSlice";
import { switchTheme } from "../store/themeSlice";
import { Button } from "../components/ui";

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);
  const cartCount = useAppSelector((state) => cartCountSelector(state.cart));

  return (
    <nav className="navbar">
      <NavLink to="/" exact className="nav-brand">
        <img src="logo.png" alt="Orange Insoles" />
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            <>Cart ({cartCount})</>
          </NavLink>
        </li>
        <li className="nav-item">
          <Button onClick={() => dispatch(switchTheme())}>
            {isDarkTheme ? (
              <>
                <img src="./light.svg" alt="Dark theme" /> Switch to light theme
              </>
            ) : (
              <>
                <img src="./night.svg" alt="Dark theme" /> Switch to dark theme
              </>
            )}
          </Button>
        </li>
      </ul>
    </nav>
  );
};
