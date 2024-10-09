import "./App.css";
import React, { useEffect } from "react";

const App = ()  => {
  const [playerChoice, setPlayerChoice] = React.useState("");
  const[computerChoice, setComputerChoice] = React.useState("");
  const [playerScore, setPlayerScore] = React.useState(0);
  const [computerScore, setComputerScore] = React.useState(0);

  const getRandomChoice = () => {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  setComputerChoice(getRandomChoice);
    const determineWinner = () => {
      if (playerChoice === "" || computerChoice === "") {
        return;
      }  else if (playerChoice === computerChoice) {
        return "It's a tie!";
      } else if ((playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
          (playerChoice === "PAPER" && computerChoice === "ROCK") ||
          (playerChoice === "SCISSORS" && computerChoice === "PAPER")) {
            setPlayerScore(playerScore + 1);
  
        return "You win!";
      } else {
        setComputerScore(computerScore + 1);
        return "Computer wins!";
      }
    }
    

    useEffect(() => {
      if(playerChoice) {
          const computerNewChoice = getRandomChoice();
          setComputerChoice(computerNewChoice);
          determineWinner();
      }
    }, [playerChoice]);

  
 
    return(
        <div>
            <h1>Welcome to Rock, Paper and Scissor Game</h1>
              <div>
                <button onClick={() => setPlayerChoice("ROCK")}>
                    Rock
                </button>
                <button onClick={() => setPlayerChoice("PAPER")}>
                    Paper
                </button>
                <button onClick={() => setPlayerChoice("SCISSORS")}>
                    Scissors
                </button>
            </div>
            <div>
                <p>Your Choice: {playerChoice}</p>
                <p>Computer Choice: {computerChoice}</p>
                <p>Player Score: {playerScore}</p>
                <p>Computer Score: {computerScore}</p>
            </div> 
        </div>
    )
}


export default App;