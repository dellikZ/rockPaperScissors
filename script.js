function computerPlay() {
    const picks = ["rock", "paper", "scissors"];
    let computerPlay = picks[Math.floor(Math.random() * picks.length)];
    return computerPlay;
}


function playerPlay() {
    playerSelection = prompt("We are playing Rock, Paper, Scissors against the computer. Enter your pick[rock/paper/scissors]: ");
    if(playerSelection.toLowerCase() === "rock") {
        return playerSelection.toLowerCase();
    } else if(playerSelection.toLowerCase() === "paper") {
        return playerSelection.toLowerCase();
    } else if(playerSelection.toLowerCase() === "scissors") {
        return playerSelection.toLowerCase();
    } else if(playerSelection === null || playerSelection === undefined){
        console.log('Invalid');
        return 'Invalid';
    } else {
        console.log('Invalid');
        return 'Invalid';
    }
}


function oneRound(computer, player) {
    computer = computerPlay();
    player = playerPlay();
    let winner = '';

    if(player === "Invalid") {
        winner = 'invalid';
        return winner;
    }

    if(computer === player) {
        console.log(`You picked ${player} and the computer picked ${computer}. It's a tie!`);
        winner = 'tie';
        return winner;
    }

    if (computer === "rock" && player === "scissors") {
        console.log(`Computer picked ${computer}, you picked ${player}. You Lose! ${computer} beats ${player}.`);
        winner = 'computer';
        return winner;
    } else if(computer === "paper" && player === "rock") {
        console.log(`Computer picked ${computer}, you picked ${player}. You Lose! ${computer} beats ${player}.`);
        winner = 'computer';
        return winner;
    } else if(computer === "scissors" && player === "paper") {
        console.log(`Computer picked ${computer}, you picked ${player}. You lose! ${computer} beats ${player}.`);
        winner = 'computer';
        return winner;
    }

    if(player === "rock" && computer === "scissors") {
        console.log(`Computer picked ${computer}, you picked ${player}. You win! ${player} beats ${computer}.`);
        winner = "player";
        return winner;
    } else if(player === "paper" && computer === "rock") {
        console.log(`Computer picked ${computer}, you picked ${player}. You win! ${player} beats ${computer}.`);
        winner = "player";
        return winner;
    } else if(player === "scissors" && computer === "paper") {
        console.log(`Computer picked ${computer}, you picked ${player}. You win! ${player} beats ${computer}.`);
        winner = "player";
        return winner;
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        result = oneRound();
        if(result === 'invalid') {
            return;
        }
        if(result === "player") {
            playerScore++;
        } else if(result === "computer") {
            computerScore++;
        }
        
    }
    if(computerScore > playerScore) {
        return alert(` The score is\n Computer: ${computerScore}\n Player: ${playerScore}\n You lost!`);
    } else if(computerScore < playerScore) {
        return alert(` The score is\n Computer: ${computerScore}\n Player: ${playerScore}\n You won!`);
    }
}




game();