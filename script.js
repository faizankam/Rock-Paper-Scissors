//time to create rock paper scissors
let playerWins = 0;
let computerWins = 0;

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerWins++;
        return 'You win!';
    } else {
        computerWins++;
        return 'You lose!';
    }
}

function makeChoice(playerChoice) {
    if (playerWins < 5 && computerWins < 5) {
        const computer = computerChoice();
        const result = determineWinner(playerChoice, computer);
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Computer chose ${computer}. ${result}`;

        updateScore();
    } else {
        alert(`Game over! Player: ${playerWins}, Computer: ${computerWins}`);
    }
}

function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Player: ${playerWins} | Computer: ${computerWins}`;

    if (playerWins === 5 || computerWins === 5) {
        alert(`Game over! Player: ${playerWins}, Computer: ${computerWins}`);
        resetGame();
    }
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    updateScore();
}
