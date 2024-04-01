import style from "./RightSide.module.scss";

const RightSideUserDesc = () => {
  const userInfo = {
    username: "Nicolae G",
    backgoundImg: "/src/pages/startingPage/rightSide/imgs/background.jpg",
    profileImg: "/src/pages/startingPage/rightSide/imgs/profilephoto.jpeg",
  };
  return (
    <>
      <div className={style.userProfileContent}>
        <div className={style.userBackgroundImg}>
          <div className={style.userProfileImg}>
            <img src={userInfo.profileImg} width="50px" alt="img" />
          </div>
        </div>

        <div className={style.userName}>
          <span>{userInfo.username}</span>
          <p className={style.userComment}>Hi, from Bucharest</p>
        </div>
      </div>
    </>
  );
};

export default RightSideUserDesc;
