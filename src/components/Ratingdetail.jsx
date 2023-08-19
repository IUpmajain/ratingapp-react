import React, { useContext } from "react";
import RatingContext from "../context/RatingContext";

const RatingDetail = () => {
  const { rating } = useContext(RatingContext);

  const averageRating = rating.reduce((p, c) => {
    return p + c.rating / rating.length;
  }, 0);

  return (
    <div className="w-100 d-flex align-items-center justify-content-between">
      <p className="text-secondary">Total Review : {rating.length}</p>
      <p className="text-secondary">Average Rating : {averageRating}</p>
    </div>
  );
};

export default RatingDetail;
