// function that returns a random choice of Rock, Paper, or Scissors as a String.
function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer choice was ${choice}`);
    return choice;
}

// play a single round of rock, paper, scissors given two different string inputs.
// returns a string result.
function singleRound(playerChoice, computerChoice){
    // console.log(`In singleRound, playerChoice is: ${playerChoice}, computerChoice is ${computerChoice}`);
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(playerChoice == 'rock'){
        if(computerChoice == 'paper'){
            return "You lose! Paper beats Rock.";
        }
        else if(computerChoice == 'rock'){
            return "Tie!";
        }
        else if(computerChoice == 'scissors'){
            return "You win! Rock beats Scissors.";
        }
    }

    else if(playerChoice == 'paper'){
        if(computerChoice == 'paper'){
            return "Tie!";
        }
        else if(computerChoice == 'rock'){
            return "You win! Paper beats Rock.";
        }
        else if(computerChoice == 'scissors'){
            return "You lose! Scissors beat Paper.";
        }
    }

    else if(playerChoice == 'scissors'){
        if(computerChoice == 'paper'){
            return "You win! Scissors beat Paper";
        }
        else if(computerChoice == 'rock'){
            return "You lose! Rock beats Scissors.";
        }
        else if(computerChoice == 'scissors'){
            return "Tie!";
        }
    }

    return "Bug!";
}


// update the body of the html doc based on the winner.
function showGameResults(winCount){
    console.log(`Player Win Count: ${winCount}`);
    let body = document.getElementsByTagName('body')[0];
    let header = document.getElementById("result");
    if(winCount >= 3){
        body.style.backgroundColor = "green";
        header.innerText = "You won!";
    }
    else{
        body.style.backgroundColor = "red";
        header.innerText = "The computer won.";
    }

    body.appendChild(header);
}

function game(){
    let winCount = 0;
    let validChoices = ["rock", "paper", "scissors"];
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt(`Round ${i+1}: Choose rock, paper, or scissors!`);
        while(!validChoices.includes(playerChoice.toLowerCase())){
            playerChoice = prompt(`Invalid input!: Choose rock, paper, or scissors!`);
        }
        let result = singleRound(playerChoice, computerPlay());
        if(result.includes("win") || result.includes("Tie")){
            winCount++;
        }
        console.log(result);
    }

    showGameResults(winCount);

}

game();