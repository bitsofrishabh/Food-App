import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const HeaderComponent = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  console.log("data:", data);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-60" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-8">
          <li className="px-4">Online Status :{onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/services">Services</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login-btn font-bold"
            onClick={() => {
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText + " (" + data.loggedInUser + ")"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
