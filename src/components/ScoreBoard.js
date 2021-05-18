import React from "react";
import "./ScoreBoard.css";
import { useSelector } from "react-redux";
import { selectScore } from "../slices/gameSlice";

const ScoreBoard = () => {
  const score = useSelector(selectScore);

  return (
    <div className="scoreboard">
      <div className="scoreboard__gameName">
        <img
          src="/images/RockPaperScissorsText.svg"
          alt="RockPaperScissorsText"
        />
      </div>
      <div className="scoreboard__score">
        <p>Score</p>
        <h1>{score}</h1>
      </div>
    </div>
  );
};

export default ScoreBoard;
