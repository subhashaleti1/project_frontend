import { useEffect, useState } from "react";
import {
  addLikeAction,
  isLikedAction,
  removeLikeAction,
} from "../Actions/Likes";
import "./index.css";

const Likes = ({ pid }) => {
  const [liked, setLikes] = useState(false);
  const addLike = (productId) => {
    addLikeAction(productId).then((data) => {
      if (data.success) {
        setLikes(true);
      }
    });
  };
  const removeLike = (productId) => {
    removeLikeAction(productId).then((data) => {
      if (data.success) {
        setLikes(false);
      }
    });
  };
  useEffect(() => {
    isLikedAction(pid).then((data) => {
      if (data.success) {
        setLikes(data.liked);
      }
    });

    /* eslint-disable-next-line */
  }, []);
  return (
    <>
      {liked && (
        <i
          className="fa-solid fa-thumbs-up wd-is-liked"
          onClick={() => {
            removeLike(pid);
          }}
        ></i>
      )}
      {!liked && (
        <i
          className="fa-solid fa-thumbs-up wd-is-not-liked"
          onClick={() => {
            addLike(pid);
          }}
        ></i>
      )}
    </>
  );
};
export default Likes;
