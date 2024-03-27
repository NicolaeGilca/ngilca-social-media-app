import style from "../rightSide/RightSide.module.scss";
import React from "react";
import { useState } from "react";
// import profilePhoto from "/src/pages/startingPage/rightSide/imgs/profilephoto.jpeg";
import Suggestion from "./suggestions/Suggestion";
const RightSide = () => {
  const userInfo = {
    username: "Nicolas G",
    backgoundImg: "/src/pages/startingPage/rightSide/imgs/background.jpg",
    profileImg: "/src/pages/startingPage/rightSide/imgs/profilephoto.jpeg",
  };

  const [post, setPost] = useState(15);
  const [followers, setFollowers] = useState(5);
  const [following, setFollowing] = useState(10);

  return (
    <>
      <div className={style.userProfile}>
        <div className={style.userProfileImg}>
          <div className={style.userBackgroundImg}>
            <img src={userInfo.backgoundImg} width="150px" alt="img" />
          </div>
          <div className={style.userProfileImg}>
            <img src={userInfo.profileImg} width="50px" alt="img" />
          </div>
        </div>
        <div className={style.userName}>
          <span>{userInfo.username}</span>
          <p className={style.userComment}>Hi, from Bucharest</p>
        </div>
        <div className={style.userProgres}>
          <div className={style.userPost}>
            <span>{post}</span>
            <p>Posts</p>
          </div>
          <div className={style.userFollowers}>
            <span>{followers}</span>
            <p>Followers</p>
          </div>
          <div className={style.userFollowing}>
            <span>{following}</span>
            <p>Following</p>
          </div>
        </div>
        <div className={style.userActions}>
          <form className={style.userActionsForm}>
            <textarea
              noValidate
              className={style.userActionsInput}
              type="text"
              id="addPost"
              placeholder="What do you think, Nicolae?"
            />
            <div className={style.userActionBtnContainer}>
              <button className={style.userActionBtn}>Add post</button>
              <button className={style.userActionBtn}>Add story</button>
            </div>
            <button className={style.userActionBtn}>Live</button>
          </form>
        </div>
      </div>
      <Suggestion />
    </>
  );
};

export default RightSide;
