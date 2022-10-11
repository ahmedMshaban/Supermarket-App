import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./AppContext";
import { Button } from "../components/ui";

export const Navbar: React.FC = () => {
  const { getCartCount, isDarkTheme, handleThemeClick } =
    useContext(AppContext);

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
            <>Cart ({getCartCount()})</>
          </NavLink>
        </li>
        <li className="nav-item">
          <Button onClick={handleThemeClick} >
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
