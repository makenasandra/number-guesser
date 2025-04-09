let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = ()=>{
  return Math.ceil(Math.random()*10);
}

const compareGuesses = (userGuess, compGuess, target)=>{
    if (userGuess < 0 || userGuess > 9) {
        alert('Your guess is out of range! Please enter a number between 0 and 9.');
        return;
      }
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
  humanScore++;
}else{
  computerScore++;
}
}

const advanceRound = ()=>{
  currentRoundNumber++;
}
