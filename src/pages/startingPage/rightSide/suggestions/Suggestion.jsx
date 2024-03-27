import styles from "./Suggestion.module.scss";

const Suggestion = () => {
  return (
    <>
      <div className={styles.suggestionContainer}>
        <h3 className={styles.suggestionTitle}>Suggestion for you</h3>
        <div className={styles.suggestionContent}>
          <ul className={styles.suggestionList}>
            <li className={styles.suggestionItem}>
              <img src="" alt="" />
              <div className={styles.suggestionProfile}>
                <span className={styles.suggestionProfileNickname}>
                  _Havakins
                </span>
                <span className={styles.suggestionProfileName}>
                  Guy Havakins
                </span>
              </div>
            </li>
            <li className={styles.suggestionItem}>
              <img src="" alt="" />
              <div className={styles.suggestionProfile}>
                <span className={styles.suggestionProfileNickname}>
                  cameron
                </span>
                <span className={styles.suggestionProfileName}>
                  Cameron Williams
                </span>
              </div>
            </li>
            <li className={styles.suggestionItem}>
              <img src="" alt="" />
              <div className={styles.suggestionProfile}>
                <span className={styles.suggestionProfileNickname}>
                  darelli
                </span>
                <span className={styles.suggestionProfileName}>
                  Darelli Steward
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Suggestion;
