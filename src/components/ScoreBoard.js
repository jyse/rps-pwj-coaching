import React from 'react';
import "./ScoreBoard.css"

const ScoreBoard = () => {
    return (
        <div className="scoreboard">
            <div className="scoreboard__gameName">
                <img src="/images/RockPaperScissorsText.svg" alt="RockPaperScissorsText" />
            </div>
            <div className="scoreboard__score">
                <p>Score</p>
                <h1>12</h1>
            </div>
        </div>
    )
}

export default ScoreBoard