import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserHand,
  selectComputerHand,
  selectScore,
  setUserHand,
  setComputerHand,
  setScore,
} from "../slices/gameSlice";
import "./Referee.css";

const Referee = () => {
  const userHand = useSelector(selectUserHand);
  const computerHand = useSelector(selectComputerHand);
  const [decision, setDecision] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (userHand == "Paper" && computerHand == "Scissors") {
      setDecision("You Lose!");
      dispatch(setScore(-1));
    }
    if (userHand == "Paper" && computerHand == "Rock") {
      setDecision("You Win!");
      dispatch(setScore(1));
    }
    if (userHand == "Paper" && computerHand == "Paper") {
      setDecision("It's a tie!");
    }
    if (userHand == "Rock" && computerHand == "Scissors") {
      setDecision("You Win!");
      dispatch(setScore(1));
    }
    if (userHand == "Rock" && computerHand == "Paper") {
      setDecision("You Lose!");
      dispatch(setScore(-1));
    }
    if (userHand == "Rock" && computerHand == "Rock") {
      setDecision("It's a tie!");
    }
    if (userHand == "Scissors" && computerHand == "Scissors") {
      setDecision("It's a tie!");
    }
    if (userHand == "Scissors" && computerHand == "Rock") {
      setDecision("You Lose!");
      dispatch(setScore(-1));
    }
    if (userHand == "Scissors" && computerHand == "Paper") {
      setDecision("You Win!");
      dispatch(setScore(1));
    }
  }, []);

  return (
    <div className="referee">
      {decision && (
        <>
          <h1>{decision}</h1>
          <button
            onClick={(e) => {
              dispatch(setUserHand(""));
              dispatch(setComputerHand(""));
            }}
          >
            Play Again
          </button>
        </>
      )}
    </div>
  );
};

export default Referee;
