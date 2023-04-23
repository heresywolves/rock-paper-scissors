
function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
      return 'rock';
    } else if (randNum === 1) {
      return 'paper';
    } else return 'scissors';
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  if (playerChoice === computerChoice) {
    return 'It\'s a tie';
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    return 'Paper beats rock. You lose!';
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return 'Rock beats scissors. You win!';
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    return 'Paper beats rock. You win!';
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return 'Scissors beat paper. You lose!';
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return 'Scissors cut paper. You win!';
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return 'Rock beats scissors. You lose!';
  }
}

function game() {
  const maxGames = 5;
  let currentGameCount = 0;
  let running = true;
  while (running) {
    currentGameCount++;
    let playerChoice = prompt('Enter rock paper or scissors');
    let computerChoice = getComputerChoice();

    console.log(playRound(playerChoice, computerChoice));
    
    if (currentGameCount === maxGames) {
      running = false;
    }
  }
}

game();

