export default function coreGame() {	
	function game() {
		let playerScore = 0;
		let computerScore = 0;
		let moves = 0;
		
		function playGame() {
			const rockBtn = document.querySelector('.rock');
			const paperBtn = document.querySelector('.paper');
			const scissorBtn = document.querySelector('.scissor');
			const playerOptions = [rockBtn, paperBtn, scissorBtn];
			const computerOptions = ['rock', 'paper', 'scissors'];
			
			function handleOptionClick() {
				const movesLeft = document.querySelector('.game__movesLeft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10 - moves}`;
				
				const choiceNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[choiceNumber];
				
				winner(this.innerText, computerChoice);
				
				if (moves == 10) {
					gameOver(playerOptions, movesLeft);
				}
			}
			
			playerOptions.forEach(function(option) {
				option.addEventListener('click', handleOptionClick);
			});
		}
		
		function winner(player, computer) {
			const result = document.querySelector('.game__result');
			const playerScoreBoard = document.querySelector('.p-count');
			const computerScoreBoard = document.querySelector('.c-count');
			player = player.toLowerCase();
			computer = computer.toLowerCase();
			if (player === computer) {
				result.textContent = 'Tie';
			} else if (player == 'rock') {
				if (computer == 'paper') {
					result.textContent = 'Computer Won';
					computerScore++;
					computerScoreBoard.textContent = computerScore;
				} else {
					result.textContent = 'Player Won';
					playerScore++;
					playerScoreBoard.textContent = playerScore;
				}
			} else if (player == 'scissors') {
				if (computer == 'rock') {
					result.textContent = 'Computer Won';
					computerScore++;
					computerScoreBoard.textContent = computerScore;
				} else {
					result.textContent = 'Player Won';
					playerScore++;
					playerScoreBoard.textContent = playerScore;
				}
			} else if (player == 'paper') {
				if (computer == 'scissors') {
					result.textContent = 'Computer Won';
					computerScore++;
					computerScoreBoard.textContent = computerScore;
				} else {
					result.textContent = 'Player Won';
					playerScore++;
					playerScoreBoard.textContent = playerScore;
				}
			}
		}
		
		function gameOver(playerOptions, movesLeft) {
			const chooseMove = document.querySelector('.game__move');
			const result = document.querySelector('.game__result');
			const reloadBtn = document.querySelector('.game__reload');
			
			playerOptions.forEach(function(option) {
				option.style.display = 'none';
			});
			
			chooseMove.innerText = 'Game Over!!';
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
				result.style.color = 'grey';
			}
			reloadBtn.innerText = 'Restart';
			reloadBtn.style.display = 'flex';
			reloadBtn.addEventListener('click', function() {
				window.location.reload();
			});
		}
		
		playGame();
	}
	
	game();	 
}