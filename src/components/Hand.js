import React from "react";
import "./Hand.css";
import { useDispatch } from "react-redux";
import { setUserHand, selectUserHand } from "../slices/gameSlice";

const Hand = ({ value }) => {
  const dispatch = useDispatch();

  const pickHand = (e, value) => {
    dispatch(setUserHand(value));
  };

  return (
    <div className="hand" onClick={(e) => pickHand(e, value)}>
      <img src={`/images/Hand${value}.png`} alt="HandUser" />
    </div>
  );
};

export default Hand;
