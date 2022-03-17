let computerPick = () => {
    let picks = ["rock", "paper", "scissors"];
    let randomPick = picks[Math.floor(Math.random() * picks.length)];
    return randomPick;
}







let oneRound = (playerPick) => {
    
    let player = playerPick;
  

    let computer = computerPick();

    let winner = '';
    const para = document.querySelector('#para');
    const myDiv = document.querySelector('#result');
    myDiv.appendChild(para);
    myDiv.className = 'myDiv';
    if(player === 'Invalid') {
        return 'Invalid';
    }
    if((computer === 'rock' && player === 'scissors') || (computer === 'paper' && player === 'rock') || (computer === 'scissors' && player === 'paper')) {
        para.textContent = `You picked ${player}, the computer picked ${computer}. Computer wins!`;
   
        winner = 'computer';
        return winner;
    } else if((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        para.textContent = `You picked ${player}, the computer picked ${computer}. You win!`;

        winner = 'player';
        return winner;
    } else {
        para.textContent = `You picked ${player}, the computer picked ${computer}. It's a tie!`;

        winner = 'tie';
        return winner;
    }
   
}

let playAgain = () => {
    const myBtn = document.createElement('button');
    const myDiv = document.querySelector('#result');
    myBtn.textContent = 'Play again?';
    myBtn.className = 'reset-button';
    myBtn.addEventListener('click', () => {
        location.reload();
    });
    myDiv.appendChild(myBtn);
}


let fullGame = () => {
    const buttons= document.querySelectorAll('#btn');
    const btnSection = document.getElementById('buttons-section');
    let playerScore = 0;
    let computerScore = 0;
    const scores = document.querySelector('#scores');
    scores.firstChild.textContent = playerScore;
    scores.lastChild.textContent = computerScore;
    Array.from(buttons).forEach(function(btn) {
        btn.addEventListener('click', function getChoice() {
            
            let roundWinner  = oneRound(btn.getAttribute('data-value'));
            console.log(roundWinner);
            if(roundWinner == 'player') {
                playerScore++;
                scores.firstChild.textContent = playerScore;

            } else if(roundWinner == 'computer') {
                computerScore++;
                scores.lastChild.textContent = computerScore;

            }
            if(computerScore == 5) {
                console.log('lost');
                console.log(playerScore);
                console.log(computerScore);
                btn.removeEventListener('click', getChoice);
                let newContent = '<h2 style="color: purple; font-size: 50px;">You Lost!</h2>'
                newContent.className = 'new-content';
                btnSection.innerHTML = newContent;
                playAgain();
            } else if(playerScore == 5) {
                console.log('won');
                btn.removeEventListener('click', getChoice);
                let newContent = '<h2 style="color: purple; font-size: 50px;">You Won!</h2>'
                newContent.className = 'new-content';
                btnSection.innerHTML = newContent;
                playAgain();
            }

            return;
        });
    });



   

    
}

fullGame();