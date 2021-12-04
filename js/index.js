const options = {
  rock: "images/icon-rock.svg",
  paper: "images/icon-paper.svg",
  scissors: "images/icon-scissors.svg",
};

let SCORE = 0;

function pickUserHand(hand) {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";
  
  // set user Image
  document.getElementById("handImageHolder1").className = hand;
  
  document.getElementById("userPickImage").src = options[hand];
  

  pickComputerHand(hand);
}

const pickComputerHand = (hand) => {
  let choices = ["rock", "paper", "scissors"];
  let cpHand = choices[Math.floor(Math.random() * choices.length)];
    
  // set computer image 
  
  document.getElementById("handImageHolder2").className = cpHand;
  document.getElementById("computerPickImage").src = options[cpHand];
  result(hand, cpHand);
}

const result = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
}

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = SCORE;
}

