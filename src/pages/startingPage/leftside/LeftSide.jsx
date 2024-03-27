import styles from "./LeftSide.module.scss";
import "../../../index.css";
import { Link, NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
// import Navigation from "../../../components/Navigation";

const LeftSide = () => {
  return (
    <div>
      <div className={styles.menuContainer}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <NavLink to="/">
              <HomeRoundedIcon />
              Home
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/messages">
              <MessageOutlinedIcon />
              Messages
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/explor">
              <ExploreOutlinedIcon /> Explor
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/my-profile">
              <PermIdentityOutlinedIcon />
              Profile
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/group">
              <GroupsOutlinedIcon />
              Group
            </NavLink>
          </li>
        </ul>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <NavLink to="/help">
              <HelpOutlineOutlinedIcon />
              Help
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/settings">
              <SettingsRoundedIcon /> Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
