let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = ()=>{
  return Math.ceil(Math.random()*9);
}

const compareGuesses = (userGuess, compGuess, target)=>{
  const diff = Math.abs(target-compGuess);
  const diff2 = Math.abs(target-userGuess);
  if(diff<diff2){
    return false;
  } else{
    return true;
  }
}

const updateScore = (string)=>{
if(string==="human" ){
  humanScore ++;
}else{
  computerScore++;
}
}

const advanceRound = ()=>{
  currentRoundNumber ++;
}
