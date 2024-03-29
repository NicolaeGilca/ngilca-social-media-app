import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { useState } from "react";
import User from "./User";
import flow from "../assets/icons/logoflow.ico";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const toggleAuth = () => {
    isLoggedIn ? navigate("/auth") : navigate("/");
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>
          <img src={flow} width="50" height="50" alt="logo" />
        </div>
      </Link>
      <div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <div className={styles.darkMode}>
              {isLoggedIn ? <button>DarkMode</button> : false}
            </div>
          </div>
          <div className={styles.menuItem}>
            <NavLink to="/my-profile">{isLoggedIn ? <User /> : false}</NavLink>
          </div>
          <div className={styles.menuItem} onClick={toggleAuth}>
            <NavLink to="/auth">{isLoggedIn ? "Logout" : "Login"}</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
