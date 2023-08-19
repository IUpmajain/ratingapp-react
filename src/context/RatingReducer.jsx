const RatingReducer = (state, action) => {
    switch (action.type) {
      case "DELETE_RATING":
        return {
          ...state,
          rating: state.rating.filter((rate) => rate.id !== action.payload),
        };
      case "SAVE_RATING":
        return {
          ...state,
          rating: [action.payload, ...state.rating],
        };
      case "EDIT_RATING":
        return {
          ...state,
          edit: { rate: action.payload, isEdit: true },
        };
      case "UPDATE_RATING":
        return {
          ...state,
          rating: state.rating.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  rating: action.payload.rating,
                  review: action.payload.review,
                }
              : item
          ),
          edit: { rate: {}, isEdit: false },
        };
    }
  };
  
  export default RatingReducer;
  