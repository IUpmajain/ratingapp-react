import React, { useContext } from "react";
import RatingContext from "../context/RatingContext";

const Listitem = ({ rate }) => {
  const { deleteRating, editRating } = useContext(RatingContext);

  return (
    <li className="list-group-item rounded-0">
      <h1 className="display-5">Rating : {rate.rating}</h1>
      <h1 className="display-6">Review : {rate.review}</h1>
      <button
        className="btn btn-sm btn-warning rounded-0 float-end"
        onClick={() => editRating(rate)}
      >
        Update
      </button>
      <button
        className="btn btn-sm btn-danger rounded-0 float-end"
        onClick={() => deleteRating(rate.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Listitem;
