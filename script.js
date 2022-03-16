let computerPick = () => {
    let picks = ["rock", "paper", "scissors"];
    let randomPick = picks[Math.floor(Math.random() * picks.length)];
    return randomPick;
}







let oneRound = (playerPick) => {
    
    let player = playerPick;
  

    let computer = computerPick();

    let winner = '';
    const para = document.createElement('p');
    const myDiv = document.querySelector('#result');
    myDiv.className = 'myDiv';
    if(player === 'Invalid') {
        return 'Invalid';
    }
    if((computer === 'rock' && player === 'scissors') || (computer === 'paper' && player === 'rock') || (computer === 'scissors' && player === 'paper')) {
        para.textContent = `You picked ${player}, the computer picked ${computer}. Computer wins!`;
        myDiv.appendChild(para);
        winner = 'computer';
        return winner;
    } else if((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        para.textContent = `You picked ${player}, the computer picked ${computer}. You win!`;
        myDiv.appendChild(para);
        winner = 'player';
        return winner;
    } else {
        para.textContent = `You picked ${player}, the computer picked ${computer}. It's a tie!`;
        myDiv.appendChild(para);
        winner = 'tie';
        return;
    }
   
}


let fullGame = () => {
    const buttons = document.querySelectorAll('#btn');
    let playerScore = 0;
    let computerScore = 0;


    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function btnChoice() {
            let roundWinner = oneRound(buttons[i].textContent.toLowerCase());
            if(roundWinner === 'player') {
                playerScore++;
            } else if(roundWinner === 'computer') {
                computerScore++;
            }
            if(playerScore === 5) {
                alert('You won the game!');
                this.removeEventListener('click', btnChoice);

                return;
            } else if(computerScore === 5) {
                alert('You lost!');
                this.removeEventListener('click', btnChoice);
                return;
            }
            
        })
        
    }

   

    

}
fullGame();