import { NavLink } from "react-router-dom";

interface Props {
  cart: [];
}

export const Navbar: React.FC<Props> = ({ cart }) => {
  let quantity = 0;
  cart.forEach((product: { quantity: number }) => {
    quantity += product.quantity;
  });

  return (
    <nav className="navbar">
      <NavLink to="/" exact className="nav-brand">
        SuperM
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
            Cart ({quantity})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
