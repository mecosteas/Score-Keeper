import React from 'react';
import './App.css';

function App() {
  const [playerOneScore, setPlayerOneScore] = React.useState(0);
  const [playerTwoScore, setPlayerTwoScore] = React.useState(0);

  const [playerOneName, setPlayerOneName] = React.useState("Home");
  const [playerTwoName, setPlayerTwoName] = React.useState("Visitor");

  const resetBoard = () => {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  }

  React.useEffect(() => {
    // can only with after reaching 21 points, and must win by a 2 point difference
    if (playerOneScore > 20 && (playerOneScore - playerTwoScore) > 1) {
      alert(`${playerOneName} wins!`);
      resetBoard()
    }
    else if (playerTwoScore > 20 && (playerTwoScore - playerOneScore) > 1) {
      alert(`${playerTwoName} wins!`);
      resetBoard()
    }
  });

  return (
    <div className="screen">
      <header>
        <h1>Table Tennis</h1>
        <button id="new-game-btn" className="" onClick={() => resetBoard()}>New Game</button>
      </header>

      <div id="scoreboard-container">
        <div className="scoreboard">
          <input className="item1" onChange={(e) => setPlayerOneName(e.target.value)} type="text" value={playerOneName} htmlFor="player-one-name"></input>
          <button className="item2 counter-btn" onClick={() => setPlayerOneScore(playerOneScore - 1)}></button>
          <div className="item3 player-score">{playerOneScore}</div>
          <button className="item4 counter-btn" onClick={() => setPlayerOneScore(playerOneScore + 1)}></button>
        </div>

        <div className="scoreboard">
          <input className="item1" onChange={(e) => setPlayerTwoName(e.target.value)} type="text" value={playerTwoName} htmlFor="player-one-name"></input>
          <button className="item2 counter-btn" onClick={() => setPlayerTwoScore(playerTwoScore - 1)}></button>
          <div className="item3 player-score">{playerTwoScore}</div>
          <button className="item4 counter-btn" onClick={() => setPlayerTwoScore(playerTwoScore + 1)}></button>
        </div>
      </div>

      <div id="footer">
      </div>
    </div>
  );
}

export default App;
