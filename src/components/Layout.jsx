import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import RightSide from "../pages/startingPage/rightSide/RightSide";

const Layout = ({ children }) => {
  // Verifică dacă ruta curentă este "/auth"

  return (
    <>
      <Navigation />

      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
