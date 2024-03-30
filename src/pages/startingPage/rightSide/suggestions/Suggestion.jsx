import { useState } from "react";
import profile1 from "./images/profile1.jpg";
import profile2 from "./images/profile2.jpg";
import profile3 from "./images/profile3.jpg";

import styles from "./Suggestion.module.scss";

const USER_LIST = [
  { id: 1, user_name: "Shell", nickname: "Pinare" },
  { id: 2, user_name: "Corrina", nickname: "Iskowitz" },
  { id: 3, user_name: "Halimeda", nickname: "Laughnan" },
  { id: 4, user_name: "Lucais", nickname: "Bodill" },
  { id: 5, user_name: "Constance", nickname: "Heindle" },
];

const Suggestion = ({ updateFollowing }) => {
  const [suggestions, setSuggestions] = useState(USER_LIST);

  const handleFollow = (id) => {
    setSuggestions((prevSuggestions) =>
      prevSuggestions.map((suggestion) =>
        suggestion.id === id
          ? { ...suggestion, isFollowed: !suggestion.isFollowed }
          : suggestion
      )
    );

    const suggestion = suggestions.find((suggestion) => suggestion.id === id);
    if (suggestion.isFollowed) {
      updateFollowing("decrement");
    } else {
      updateFollowing("increment");
    }
  };

  return (
    <div className={styles.suggestionContainer}>
      <h3 className={styles.suggestionTitle}>Suggestion for you</h3>
      <div className={styles.suggestionContent}>
        {suggestions.map((suggestion) => (
          <li className={styles.suggestionItem} key={suggestion.id}>
            <div className={styles.suggestionProfile}>
              <img width="50" src={profile1} alt="profile-image" />
              <div className={styles.suggestionWrapper}>
                <span className={styles.suggestionProfileNickname}>
                  {suggestion.nickname}
                </span>
                <span className={styles.suggestionProfileName}>
                  {suggestion.user_name}
                </span>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={() => handleFollow(suggestion.id)}>
                {suggestion.isFollowed ? "Following" : "Follow"}
              </button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
