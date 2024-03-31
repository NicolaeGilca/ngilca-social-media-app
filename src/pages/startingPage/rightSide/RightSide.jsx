import React from "react";
// import profilePhoto from "/src/pages/startingPage/rightSide/imgs/profilephoto.jpeg";

import RightSideUserAcctions from "./RightSideUserAcctions";
import RightSideUserDesc from "./RightSideUserDesc";
import RightSideProgress from "./RightSideProgress";
const RightSide = () => {
  return (
    <>
      <RightSideUserDesc />
      <RightSideUserAcctions />
      <RightSideProgress />
    </>
  );
};

export default RightSide;
