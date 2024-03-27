import PropTypes from "prop-types";
import Navigation from "./Navigation";
import LeftSide from "../pages/startingPage/leftside/LeftSide";
import RightSide from "../pages/startingPage/rightSide/RightSide";

const Layout = ({ children }) => {
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
