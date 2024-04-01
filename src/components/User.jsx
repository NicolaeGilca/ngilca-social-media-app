import style from "./User.module.scss";
import userPhoto from "../pages/startingPage/rightSide/imgs/profilephoto.jpeg";
const User = () => {
  return (
    <>
      <div className={style.userContainer}>
        <img
          className={style.userImg}
          width="50px"
          src={userPhoto}
          alt="userImg"
        />
        <div className={style.userGreetings}>
          <span> Hi, Nicolae G</span>
          <p>Good morning!</p>
        </div>
      </div>
    </>
  );
};

export default User;
