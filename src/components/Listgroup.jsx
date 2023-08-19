import React, { useContext } from "react";
import ListItem from "./Listitem";
import RatingContext from "../context/RatingContext";

const ListGroup = () => {
  const { rating } = useContext(RatingContext);

  return (
    <ul className="list-group my-2">
      {rating.map((rate) => (
        <ListItem key={rate.id} rate={rate} />
      ))}
    </ul>
  );
};

export default ListGroup;
