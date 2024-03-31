import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { useState } from "react";
import User from "./User";
import flow from "../assets/icons/logoflow.png";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const toggleAuth = () => {
    isLoggedIn ? navigate("/auth") : navigate("/");
    setIsLoggedIn((prevState) => !prevState);
  };

  const [isLightMode, setIsLightMode] = useState(true);

  const lightModeHandler = () => {
    isLightMode
      ? document.body.classList.add("lightMode")
      : document.body.classList.remove("lightMode");

    setIsLightMode((prevState) => !prevState);
  };
  return (
    <header>
      <NavLink to="/">
        <div className={styles.logo}>
          <img src={flow} width="70" height="70" alt="logo" />
        </div>
      </NavLink>
      <div>
        <div className={styles.menu}>
          <div className={styles.menuItemProfile}>
            <div className={styles.darkmodeItem}>
              <div className={`${isLightMode ? styles.dark : styles.light}`}>
                {isLoggedIn ? (
                  <button className={styles.modeBtn} onClick={lightModeHandler}>
                    {isLightMode ? <LightModeIcon /> : <DarkModeIcon />}
                  </button>
                ) : null}
              </div>
            </div>
            <NavLink to="/my-profile">{isLoggedIn ? <User /> : false}</NavLink>
          </div>
          <div className={styles.menuItem} onClick={toggleAuth}>
            <NavLink to="/auth">
              {isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
