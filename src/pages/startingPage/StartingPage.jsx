import useFetch from "../../hooks/useFetch";
import styles from "./StartingPage.module.scss";
import LeftSide from "./leftside/LeftSide";
import Newsfeed from "./newsfeed/Newsfeed";
import Swiper from "./newsfeed/story/Swiper";
import RightSide from "./rightSide/RightSide";

const StartingPage = () => {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className={styles.mainContainer}>
      <aside className={styles.leftSide}>
        <LeftSide />
      </aside>
      <section className={styles.newsfeed}>
        <Swiper />
        {posts &&
          posts.map((post) => {
            return <Newsfeed postData={post} key={post.id} />;
          })}
      </section>
      <aside className={styles.rightSide}>
        <RightSide />
      </aside>
    </div>
  );
};

export default StartingPage;
