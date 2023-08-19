import { createContext, useReducer, useState } from "react";
import RatingReducer from "./RatingReducer";

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const initialState = {
    rating: [],
    edit: {
      rate: {},
      isEdit: false,
    },
  };

  const [state, dispatch] = useReducer(RatingReducer, initialState);

  const deleteRating = (id) => {
    dispatch({
      type: "DELETE_RATING",
      payload: id,
    });
  };

  const saveRating = (rating, review) => {
    const newRating = {
      id: crypto.randomUUID(),
      rating: parseInt(rating),
      review,
    };

    dispatch({
      type: "SAVE_RATING",
      payload: newRating,
    });
  };

  const editRating = (oldRating) => {
    dispatch({
      type: "EDIT_RATING",
      payload: oldRating,
    });
  };

  const updateRating = (oldId, newRating, newReview) => {
    const updatedRating = {
      id: oldId,
      rating: newRating,
      review: newReview,
    };

    dispatch({
      type: "UPDATE_RATING",
      payload: updatedRating,
    });
  };

  return (
    <RatingContext.Provider
      value={{
        rating: state.rating,
        edit: state.edit,
        deleteRating,
        saveRating,
        editRating,
        updateRating,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
};

export default RatingContext;
