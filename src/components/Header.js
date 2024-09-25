import { Link } from "react-router-dom";
import { CART_URL } from "../utils/constants";
import Logo from "./Logo";
import { useState, useContext } from "react";
import { userContext } from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [name, setName] = useState("Login");
  const { userName } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <Logo />
      <div>
        <ul className="nav-items">
          <li>
            <Link className="hover:underline hover:font-extrabold" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline hover:font-extrabold" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline hover:font-extrabold"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li className="hover:border-2 border-black flex">
            <Link to="/cart">
              <span>
                <img className="w-20" src={CART_URL} /> ({cartItems.length})
                items
              </span>
            </Link>
          </li>
          <button
            onClick={() =>
              name === "Login" ? setName("Logout") : setName("Login")
            }
            className="bg-gray-200 border-2 border-black rounded-sm text-lg w-32 "
          >
            {name}
          </button>
          <li>{userName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
