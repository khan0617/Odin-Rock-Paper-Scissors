let round = 0; // number of the current round we're on. goes up to 5
let playerWins = 0;
let computerWins = 0;
let ties = 0;

// function that returns a random choice of Rock, Paper, or Scissors as a String.
function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    // console.log(`Computer choice was ${choice}`);
    return choice;
}

// play a single round of rock, paper, scissors given two different string inputs.
// returns a string result.
function singleRound(playerChoice, computerChoice){
    // DEBUGGING:
    // console.log(`In singleRound, playerChoice is: ${playerChoice}, computerChoice is ${computerChoice}`);
    
    // see if this is the first round after finishing the previous match
    if(round >= 5){
        resetGameInfo();
    }

    round++; // keep track of which game round we're on
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(playerChoice == 'rock'){
        if(computerChoice == 'paper'){
            computerWins++;
            return "You lose! Paper beats Rock.";
        }
        else if(computerChoice == 'rock'){
            ties++;
            return "Tie!";
        }
        else if(computerChoice == 'scissors'){
            playerWins++;
            return "You win! Rock beats Scissors.";
        }
    }

    else if(playerChoice == 'paper'){
        if(computerChoice == 'paper'){
            ties++;
            return "Tie!";
        }
        else if(computerChoice == 'rock'){
            playerWins++;
            return "You win! Paper beats Rock.";
        }
        else if(computerChoice == 'scissors'){
            computerWins++;
            return "You lose! Scissors beat Paper.";
        }
    }

    else if(playerChoice == 'scissors'){
        if(computerChoice == 'paper'){
            playerWins++;
            return "You win! Scissors beat Paper";
        }
        else if(computerChoice == 'rock'){
            computerWins++;
            return "You lose! Rock beats Scissors.";
        }
        else if(computerChoice == 'scissors'){
            ties++;
            return "Tie!";
        }
    }
}

function resetGameInfo(){
    round = 0; // number of the current round we're on. goes up to 5
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    document.getElementById("result").style.visibility = 'hidden';
}


// update the body of the html doc based on the winner.
function updateGameResults(){
    let playerDiv = document.getElementById('player');
    let tieDiv = document.getElementById('tie');
    let computerDiv = document.getElementById('computer');
    let infoDiv = document.getElementById('info');
    infoDiv.style.visibility = 'visible';

    // update div text content
    playerDiv.textContent = playerWins == 1 ? `You've won ${playerWins} round` : `You've won ${playerWins} rounds`;
    tieDiv.textContent = ties == 1 ? `${ties} tie so far` : `${ties} ties so far`;
    computerDiv.textContent = computerWins == 1 ? `Computer has won ${computerWins} round` : `Computer has won ${computerWins} rounds`;
    infoDiv.textContent = round == 1 ? `${round} Round played` : `${round} Rounds played`;


    // set color of win counter divs
    let winString = '';
    let winColor = '';
    if(playerWins > computerWins){
        playerDiv.style.color = 'lightgreen';
        computerDiv.style.color = 'red';
        winString = "You won!";
        winColor = 'lightgreen';
    }

    else if(computerWins > playerWins){
        playerDiv.style.color = 'red';
        computerDiv.style.color = 'lightgreen';
        winString = "The computer won.";
        winColor = 'red';
    }

    else{
        playerDiv.style.color = 'white';
        computerDiv.style.color = 'white';
        winString = 'You tied with the computer.'
        winColor = 'white';
    }

    // round is 5 means the game is finished, show the winner
    if(round >= 5){
        infoDiv.textContent = `Match finished! All rounds played. Choose an option to restart.`
        let resultDiv = document.getElementById("result");
        resultDiv.textContent = winString;
        resultDiv.style.color = winColor;
        resultDiv.style.visibility = 'visible';
    }
}


// function to initialize button click listeners
function initButtons(){
    let elements = document.querySelectorAll("input");
    elements.forEach((item) => {
        // on click of a button, play a single round of the game.
        item.addEventListener('click', (event) => {
            document.getElementById('info').style.visibility = 'hidden';
            let choice = event.target.classList[0];
            singleRound(choice, computerPlay());
            updateGameResults();

            // console.log(`User clicked on: ${choice}`); // DEBUGGING
        });
    });
}

initButtons();