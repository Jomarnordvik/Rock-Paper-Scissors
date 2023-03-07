export default function secondaryGame() {
	const allowedPaths = ["/html/gamemode2.html", "/#", ""];
	
	for (let i = 0; i < allowedPaths.length; i++) {
		if (window.location.pathname == allowedPaths[i]) {
			function secondaryGameMechanics() {
				let playerScore = 0;
				let computerScore = 0;
				let moves = 0;
				
				function playSecondaryGame() {
					const rockButton = document.querySelector('.secondaryGame__rock');
					const paperButton = document.querySelector('.secondaryGame__paper');
					const scissorButton = document.querySelector('.secondaryGame__scissor');
					const lizardButton = document.querySelector('.secondaryGame__lizard');
					const spockButton = document.querySelector('.secondaryGame__spock');
					const playerOptions = [rockButton, paperButton, scissorButton, lizardButton, spockButton];
					const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
					
					function handleOptionClick() {
						const movesLeft = document.querySelector('.game__movesLeft');
						moves++;
						movesLeft.innerText = `Moves Left: ${5 - moves}`;
						
						const choiceNumber = Math.floor(Math.random() * 5);
						const computerChoice = computerOptions[choiceNumber];
						
						winner(this.innerText, computerChoice);
						
						if (moves == 5) {
							gameOver(playerOptions, movesLeft);
						}
					}
					
					playerOptions.forEach(function(option) {
						option.addEventListener('click', handleOptionClick);
					});
				} 
				
				function winner(player, computer) {
					const result = document.querySelector('.game__result');
					const playerScoreBoard = document.querySelector('.game__player-score-count');
					const computerScoreBoard = document.querySelector('.game__cpu-score-count');
					player = player.toLowerCase();
					computer = computer.toLowerCase();
					
					const computerChoiceDisplay = document.querySelector('.game__computerChoice');
					computerChoiceDisplay.textContent = `Computer Chose: ${computer}!`;
					
					if (player === computer) {
						result.textContent = 'Tie';
					} else if (player == 'rock') {
						if (computer == 'paper' || computer == 'spock') {
							result.textContent = 'Computer Won';
							computerScore++;
							computerScoreBoard.textContent = computerScore;
						} else {
							result.textContent = 'Player Won';
							playerScore++;
							playerScoreBoard.textContent = playerScore;
						}
					} else if (player == 'scissors') {
						if (computer == 'rock' || computer == 'spock') {
							result.textContent = 'Computer Won';
							computerScore++;
							computerScoreBoard.textContent = computerScore;
						} else if (computer == 'paper' || computer == 'lizard') {
							result.textContent = 'Player Won';
							playerScore++;
							playerScoreBoard.textContent = playerScore;
						} else {
							result.textContent = 'Tie';
						}
					} else if (player == 'paper') {
						if (computer == 'scissors' || computer == 'lizard') {
							result.textContent = 'Computer Won';
							computerScore++;
							computerScoreBoard.textContent = computerScore;
						} else {
							result.textContent = 'Player Won';
							playerScore++;
							playerScoreBoard.textContent = playerScore;
						}
					} else if (player == 'lizard') {
						if (computer == 'rock' || computer == 'scissors') {
							result.textContent = 'Computer Won';
							computerScore++;
							computerScoreBoard.textContent = computerScore;
						} else if (computer == 'paper' || computer == 'spock') {
							result.textContent = 'Player Won';
							playerScore++;
						}
					}
				}
				
				function gameOver(playerOptions, movesLeft) {
					const chooseMove = document.querySelector('.game__move');
					const result = document.querySelector('.game__result');
					const reloadButton = document.querySelector('.game__reload');
					
					playerOptions.forEach(function(option) {
						option.style.display = 'none';
					});
					
					chooseMove.innerText = 'Good Game!';
					movesLeft.style.display = 'none';
					
					if (playerScore > computerScore) {
						result.style.fontSize = '2rem';
						result.innerText = 'You Won The Game';
						result.style.color = '#308D46';
					} else if (playerScore < computerScore) {
						result.style.fontSize = '2rem';
						result.innerText = 'You Lost The Game';
						result.style.color = 'red';
					} else {
						result.style.fontSize = '2rem';
						result.innerText = 'Tie';
						result.style.color = 'black';
					}
					reloadButton.innerText = 'Restart';
					reloadButton.style.display = 'flex';
					reloadButton.classList.add('game__reload-button');
					reloadButton.addEventListener('click', function() {
						window.location.reload();
					});
				}
				
				playSecondaryGame();
			}
			
			secondaryGameMechanics();	
		} else {
			break
		}
	}
}