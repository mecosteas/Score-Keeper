import React from 'react';
import './App.css';

function App() {
  const [playerOneScore, setPlayerOneScore] = React.useState(0);
  const [playerTwoScore, setPlayerTwoScore] = React.useState(0);

  const [playerOneName, setPlayerOneName] = React.useState("Home");
  const [playerTwoName, setPlayerTwoName] = React.useState("Visitor");

  const incrementPlayerScore = (playerName) => {
    if (playerName === playerOneName) {
      var scoreIncrement = playerOneScore + 1;
      setPlayerOneScore(scoreIncrement);
    } else {
      var scoreIncrement = playerTwoScore + 1;
      setPlayerTwoScore(scoreIncrement);
    }
    if (scoreIncrement >= 21) {
      alert(`${playerName} wins!`);
      resetBoard()
    }
  }

  const resetBoard = () => {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  }

  return (
    <div className="screen">
      <header>
        <h1>Table Tennis</h1>
        <button id="new-game-btn" className="" onClick={() => resetBoard()}>New Game</button>
      </header>

      <div id="scoreboard-container">
        <div id="left-scoreboard">
          <input onChange={(e) => setPlayerOneName(e.target.value)} type="text" value={playerOneName} for="player-one-name"></input>
          <button id="left-counter-btn" onClick={() => incrementPlayerScore(playerOneName)}>{playerOneScore}</button>
        </div>

        <div id="right-scoreboard">
          <input onChange={(e) => setPlayerTwoName(e.target.value)} type="text" value={playerTwoName} for="player-one-name"></input>
          <button id="right-counter-btn" onClick={() => incrementPlayerScore(playerTwoName)}>{playerTwoScore}</button>
        </div>
      </div>

      <div id="footer"></div>
    </div>
  );
}

export default App;
