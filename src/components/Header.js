import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("onlineStatus:", onlineStatus);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status :{onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/services">Services</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
