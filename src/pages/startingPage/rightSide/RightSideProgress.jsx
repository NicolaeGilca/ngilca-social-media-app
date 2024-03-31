import style from "./RightSide.module.scss";
import { useState } from "react";
import Suggestion from "./suggestions/Suggestion";

const RightSideProgress = () => {
  const [post, setPost] = useState(15);
  const [followers, setFollowers] = useState(5);
  const [following, setFollowing] = useState(10);

  const updateFollowing = (action) => {
    if (action === "increment") {
      setFollowing((prevFollowing) => prevFollowing + 1);
    } else if (action === "decrement") {
      setFollowing((prevFollowing) => prevFollowing - 1);
    }
  };
  return (
    <>
      <div className={style.userProfile}>
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
      </div>
      <Suggestion following={following} updateFollowing={updateFollowing} />
    </>
  );
};

export default RightSideProgress;
