let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
return array[(Math.ceil(Math.random()*3)) ];
}
//Top part works. randomFrom just a random computer choice to the cpu.

function checkInput(input, computerChoices) {
  if (input === "quit") {
    return true;
  }

  let computerChoice = randomFrom(computerChoices);

if (computerChoice === "rock" && input === "scissors"){
alert("Computer wins!");
return true;
} else if (computerChoice === "scissors" && input === "paper"){
alert("Computer wins!");
return true;
} else if (computerChoice === "paper" && input === "rock"){
alert("Computer wins!");
return true;
}else if(computerChoice === "scissors" && input === "rock"){
alert("User wins!");
return true;
} else if (computerChoice === "paper" && input === "scissors"){
alert("User wins!");
return true;
} else if (computerChoice === "rock" && input === "paper"){
alert("User wins!");
return true;
}
}

function start(gameOver, computerChoices) {
  while (!gameOver){
    let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
gameOver = checkInput(playerInput, computerChoices);
}
}
start(gameOver, computerChoices);
