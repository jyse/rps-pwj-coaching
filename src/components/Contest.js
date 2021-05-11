import React, { useEffect, useState } from "react";
import "./Contest.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserHand,
  selectComputerHand,
  setComputerHand,
} from "../slices/gameSlice";

const Contest = () => {
  const userHand = useSelector(selectUserHand);
  const computerHand = useSelector(selectComputerHand);
  const dispatch = useDispatch();
  const hands = ["Rock", "Paper", "Scissors"];
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    let cpHand = hands[Math.floor(Math.random() * hands.length)];

    setTimeout(function () {
      dispatch(setComputerHand(cpHand));
    }, 500);

    setTimeout(function () {
      setTimeOut(true);
    }, 1000);
  }, [userHand]);

  return (
    <div className="contest">
      <div className="contest__container">
        <div className="contest__handContainer">
          <h1>You Picked</h1>
          <img src={`/images/Hand${userHand}.png`} alt="HandUser" />
        </div>
        <div className="contest__handContainer">
          <h1>The House Picked</h1>
          <img
            src={`/images/Hand${!computerHand ? "Blank" : computerHand}.png`}
            alt="HandComputer"
          />
        </div>
      </div>
    </div>
  );
};

export default Contest;
