# Rock Paper Scissors

This is a simple rock-paper-scissors game built with HTML, CSS, and JavaScript.
The game has a user interface with three buttons representing the three options: Rock, Paper, and Scissors.
And alternate hardcore gamemode is also available with two additional options: Lizard and Spock.
The player will play against the computer in a series of 3 rounds. (Best out of three)

After 3 rounds, the game will end and the player will see the final result.
*The hardcore gamemode consists of 5 rounds.*
*Last Man Standing only has one singular round*


### Gamemodes
To start the game, click on one of the three buttons to make your move.
The computer will randomly select its move, and the winner will be determined based on the following rules:
- Rock crushes Scissors
- Scissors cut Paper
- Paper covers Rock
- If the player and computer pick the same option, its a tie.

The Last Man Standing gamemode follows the same rules as above


For the hardcore gamemode, which adds two additional options, Lizard and Spock, the following rules apply:
- Rock crushes Scissors **and** Lizard
- Scissors cut Paper **and** Decapitates Lizard
- Paper covers Rock **and** disproves Spock 
- Lizard poisons Spock **and** eats Paper
- Spock smashes Scissors **and** vaporizes Rock.

The game will keep track of the number of moves left, and will end after the declared number of rounds.
At the end of the match, the player will see the final result - either a win, loss or tie.


### Conditions to Win or Lose

- If the player wins more rounds than the computer, the player wins the game.
- If the computer wins more rounds than the player, the player loses the game.
- If both the player and computer win an equal number of rounds, the game is a tie.
