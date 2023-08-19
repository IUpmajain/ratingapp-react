import React, { useContext, useState, useEffect } from "react";
import RatingContext from "../context/RatingContext";

const Form = () => {
  const { saveRating, edit, updateRating } = useContext(RatingContext);

  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      updateRating(edit.rate.id, rating, review);
    } else {
      saveRating(rating, review);
    }
    setRating("");
    setReview("");
  };

  useEffect(() => {
    setRating(edit.rate.rating);
    setReview(edit.rate.review);
  }, [edit]);

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <select
        value={rating}
        className="form-control rounded-0 my-2"
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <textarea
        value={review}
        className="form-control my-2 rounded-0"
        placeholder="Enter Review Here.."
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <button className="btn btn-dark rounded-0 w-100">Save Review</button>
    </form>
  );
};

export default Form;
