import style from "./RightSide.module.scss";
const RightSideUserAcctions = () => {
  return (
    <>
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
    </>
  );
};

export default RightSideUserAcctions;
