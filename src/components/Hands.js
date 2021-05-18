import React from "react";
import Hand from "./Hand";
import "./Hands.css";

const Hands = () => {
  return (
    <div className="hands">
      <div className="hands__triangle">
        <img src="/images/bg-triangle.svg" alt="triangle" />
      </div>
      <div className="hands__top">
        <Hand value="Paper" />
        <Hand value="Scissors" />
      </div>
      <div className="hands__bottom">
        <Hand value="Rock" />
      </div>
    </div>
  );
};

export default Hands;
