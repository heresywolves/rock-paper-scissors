
function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
      return 'bear';
    } else if (randNum === 1) {
      return 'hunter';
    } else return 'official';
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  if (playerChoice === computerChoice) {
    return 'It\'s a tie';
  } else if (playerChoice === 'hunter' && computerChoice === 'bear') {
    return 'Hunter met with a bear in the forest and luckly he had a few tricks of the trade up his shotgun. \
    The bear was struck down in an instant. You win!';
  } else if (playerChoice === 'hunter' && computerChoice === 'official') {
    return 'The official wasn\'t a bad man, but he would pass some laws here and there in exchange for a full pocket of green bills. \
    The choices of these laws would favor the corporations, but would ultimately destroy the life of the hunter. You lose!';
  } else if (playerChoice === 'bear' && computerChoice === 'hunter') {
    return 'Hunter met with a bear in the forest and luckly he had a few tricks of the trade up his shotgun. \
    The bear was struck down in an instant. You lose!';
  } else if (playerChoice === 'bear' && computerChoice === 'official') {
    return 'The official met a huge brown bear outside his new summer cottage. \
    Too bad that no one could hear the official being eaten alive. You win!';
  } else if (playerChoice === 'official' && computerChoice === 'bear') {
    return 'The official met a huge brown bear outside his new summer cottage. \
    Too bad that no one could hear the official being eaten alive. You lose!';
  } else if (playerChoice === 'official' && computerChoice === 'hunter') {
    return 'The official wasn\'t a bad man, but he would pass some laws here and there in exchange for a full pocket of green bills. \
    The choices of these laws would favor the corporations, but would ultimately destroy the life of the hunter. You win!';
  }
}


function game() {
  const output = document.querySelector('#story');
  const scoreYou = document.querySelector('#you');
  const scoreLife = document.querySelector('#life');
  output.textContent = 'Test out your luck - play against life itself. \
    Bet on a character by choosing a card and leave the rest to the odds. \
    Total of 5 rounds.';
  
  scoreYou.textContent = `YOU: 0`; 
  scoreLife.textContent = `LIFE: 0`;

  const maxGames = 5;
  let wins = 0;
  let losses = 0;
  let currentGameCount = 1;
  
  let running = true;
  while (running) {
    const cards = document.querySelectorAll('.choice-container img');
    const versusText = document.querySelector('#vs');

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        let src = card.src;
        let arr = src.split('/');
        let image = arr[arr.length - 1];
        let playerChoice = image.split('.')[0];
        let computerChoice = getComputerChoice();

        versusText.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`;

        let roundResults = playRound(playerChoice, computerChoice);

        if (currentGameCount > maxGames) {
          versusText.textContent = `GAME ENDED`;
          if (wins > losses) {
            output.textContent = "You emerged victorious! Be proud of yourself." ;
          } else if (wins === losses) {
            output.textContent = "It\'s a tie game..." ;
          } else if (wins < losses) {
            output.textContent = "Life beat you down. What a shame.";
          } 
        } else {
          output.textContent = roundResults;
          
          let words = roundResults.split(' ');
          let lastWord = words[words.length - 1].split('!')[0];

          if (lastWord === 'tie') {
            wins++;
            losses++;
          } else if (lastWord === 'win') {
            wins++;
          } else {
            losses++;
          }
        }
        
        scoreYou.textContent = `You: ${wins}`;
        scoreLife.textContent = `Life: ${losses}`;

        currentGameCount++;

      })
    })
    break;

  }
}

game();
