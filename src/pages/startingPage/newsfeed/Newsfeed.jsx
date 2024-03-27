import styles from "./Newsfeed.module.scss";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import CommentIcon from "@mui/icons-material/Comment";

import profile from "../../../assets/icons/profile.jpeg";
import post1 from "../../../assets/images/post1.jpg";
import post2 from "../../../assets/images/post2.jpg";
import { useState } from "react";
import CommentsSection from "./comments/CommentsSection";

const Newsfeed = ({ postData }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [isShared, setIsShared] = useState(false);
  const [shares, setShares] = useState(Math.floor(Math.random() * 100));
  const [isComment, setIsComment] = useState(false);
  const postImages = {
    0: post1,
    1: post2,
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prevState) => prevState + 1);
    } else {
      setLikes((prevState) => prevState - 1);
    }
    setIsLiked((prevState) => !prevState);
  };

  const handleShare = () => {
    if (!isShared) {
      setShares((prevState) => prevState + 1);
    } else {
      setShares((prevState) => prevState - 1);
    }
    setIsShared((prevState) => !prevState);
  };

  const handleComment = () => {
    setIsComment((isComment) => !isComment);
  };

  return (
    <div className={styles.mainPost}>
      <div className={styles.userInfo}>
        <div className={styles.profileInfo}>
          <Link to="/me">
            <img
              src={profile}
              alt="Profile Picture"
              className={styles.profilePictureImg}
            />
          </Link>
          <Link to="/me">U{name}</Link>
        </div>

        <div className={styles.contextMenu}>
          <MoreHorizIcon />
        </div>
      </div>

      <section className={styles.content}>
        <p>{postData.title}</p>
        <div className={styles.imageWrapper}>
          <img
            src={postImages[postData.id % 2]}
            alt="post content"
            className={styles.mainPostImage}
          />
          <div className={styles.infoIcon}></div>
        </div>

        <p>{postData.body}</p>
      </section>

      <section className={styles.reacts}>
        <div className={styles.likesNumber}>
          <ThumbUpIcon />
          <span className={styles.reactsCount}>{`${likes} Likes`}</span>
        </div>
        <div className={styles.reactsContainer}>
          <div className={styles.commentNumber}>
            <CommentIcon />
            <span className={styles.reactsComments}>Comments</span>
          </div>
          <div className={styles.sharesNumber}>
            <ReplyIcon />
            <span className={styles.reactsCount}>{`${shares} Shares`}</span>
          </div>
        </div>
      </section>

      <section className={styles.reactsActions}>
        <div
          className={`${styles.reaction} ${isLiked && styles.blue}`}
          onClick={handleLike}
        >
          <ThumbUpIcon />
          <span>Like</span>
        </div>

        <div
          onClick={handleComment}
          className={`${styles.reaction} ${isComment && styles.blue}`}
        >
          <CommentIcon />
          <span>Comments</span>
        </div>

        <div
          className={`${styles.reaction} ${isShared && styles.blue}`}
          onClick={handleShare}
        >
          <ReplyIcon />
          <span>Share</span>
        </div>
      </section>

      <section className={styles.commentContainer}>
        {isComment && <CommentsSection />}
      </section>
    </div>
  );
};

Newsfeed.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default Newsfeed;
