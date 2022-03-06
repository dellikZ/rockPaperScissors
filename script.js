let computerPick = () => {
    let picks = ["rock", "paper", "scissors"];
    let randomPick = picks[Math.floor(Math.random() * picks.length)];
    return randomPick;
}

let playerPick = () => {
    let pick = prompt("Welcome to my little Rock, Paper, Scissors game! Enter your pick[rock/paper/scissors]: ");
    if(pick === null) {
        return 'Invalid';
    }
    let playerChoice = (pick.toLowerCase() === 'rock' || pick.toLowerCase() === 'paper' || pick.toLowerCase() === 'scissors') ? pick.toLowerCase() : "Invalid";
    return playerChoice;
}

let oneRound = () => {
    let computer = computerPick();
    let player = playerPick();
    let winner = '';
    if(player === 'Invalid') {
        return 'Invalid';
    }
    if((computer === 'rock' && player === 'scissors') || (computer === 'paper' && player === 'rock') || (computer === 'scissors' && player === 'paper')) {
        console.log(`You picked ${player}, the computer picked ${computer}. Computer wins!`);
        winner = 'computer';
    } else {
        console.log(`You picked ${player}, the computer picked ${computer}. You win!`);
        winner = 'player';
    }
    return winner;
}

let fullGame = () => {
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++) {
        let gameResult = oneRound();
        if(gameResult === 'Invalid') {
            console.log("Wait...That's illegal.");
            return;
        }
        if(gameResult === 'player') {
            playerWins++;
        } else {
            computerWins++;
        }
    }
    let gameWinner = playerWins > computerWins ? alert(`The final score is: \n Computer: ${computerWins} \n Player: ${playerWins} \n You won the game!`) : alert(`The final score is: \n Computer: ${computerWins}\n Player: ${playerWins} \n You lost.`);
    return gameWinner;
}

fullGame();

