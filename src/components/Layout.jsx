import PropTypes from "prop-types";
import Navigation from "./Navigation";
import LeftSide from "../pages/startingPage/leftside/LeftSide";
import style from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div className={style.layoutContainer}>
        <div className={style.layoutNavigation}>
          <Navigation />
        </div>
        <div className={style.layoutLeftSide}>
          <LeftSide />
        </div>
        <main className={style.layoutMain}>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
