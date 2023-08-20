import { useEffect, useState } from "react";
import { GetLikes } from "../Actions/GetLikes";
import LikedItem from "./LikedItem";
import {findLikesByUser} from "../Actions/Likes";

const CardsLike = () => {
  const [likes, setLikes] = useState([]);
  useEffect(() => {
      findLikesByUser().then((data) => setLikes(data));
  }, []);
  return (
    <>
      <div className="row my-4">
        {likes?.map((x) => {
          return <LikedItem like={x} />;
        })}
      </div>
    </>
  );
};
export default CardsLike;
