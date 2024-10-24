import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const[message, setMessage] = useState("");

  const getRandomChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoices = [Math.floor(Math.random() * choices.length)];
    const computerChoices = choices[randomChoices];
    console.log(computerChoice);
    setComputerChoice(computerChoices);
  };

  const determineWinner = () => {
     if (playerChoice === computerChoice) {
      setMessage("It's a tie!");
      setComputerScore(computerScore + 1);
      setPlayerChoice(playerScore + 1);
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") &&
      (playerChoice === "Paper" && computerChoice === "Rock") &&
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      setPlayerScore(playerScore + 1);
      setMessage("You win!");
    } else {
      setComputerScore(computerScore + 1);
      setMessage("Computer wins!");
    }
  };

  useEffect(() => {
    if (playerChoice) {
      determineWinner();
      getRandomChoice();
    }
  }, [playerChoice]);

  return (
    <div className="container">
      <div className="main">
        <h1>Welcome to Rock, Paper and Scissor Game</h1>
        <div className="button-container">
          <button name="rock" onClick={() => setPlayerChoice("Rock")}>
            Rock
          </button>
          <button
            name="paper"
            value={playerChoice}
            onClick={() => setPlayerChoice("Paper")}
          >
            Paper
          </button>
          <button
            name="scissors"
            value={playerChoice}
            onClick={() => setPlayerChoice("Scissors")}
          >
            Scissors
          </button>
        </div>
        <span className="message">{<p>{message}</p>}</span>
        <div className="result-container">
          <p>Your Choice:<span className="values1">{playerChoice}</span> </p>
          <p>Computer Choice: <span className="values2">{computerChoice}</span> </p>
          <p>Player Score: <span className="values3">{playerScore}</span> </p>
          <p>Computer Score: <span className="values4">{computerScore}</span></p>
        </div>
      </div>
    </div>
  );
};

export default App;
