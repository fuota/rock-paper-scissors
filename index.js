function computerPlay() {
    array = ['Rock', 'Scissors', 'Paper']
    let randomIndex = Math.floor(Math.random() * 2 + 1)
    return array[randomIndex]

}
function playRound(player, computer) {
    if (player == "ROCK") { 
        if (computer == "SCISSORS") {
            console.log(`You win the game! Rock beats Scissors`)
        }
        else if (computer == "ROCK") {
            console.log(`It's a draw`)
        }
        else if (computer == "Paper") {
            console.log(`You lose the game! Paper beats Rock`)
        }
    }
    else if (player == "SCISSORS") { 
        if (computer == "SCISSORS") {
            console.log(`It's a draw`)
        }
        else if (computer == "ROCK") {
            console.log(`You lose the game! Rock beats Scissors`)
        }
        else if (computer == "PAPER") {
            console.log(`You win the game! Scissors beats Paper`)
        }
    }
    else if (player == "PAPER") { 
        if (computer == "SCISSORS") {
            console.log(`You lose the game! Scissors beats Paper`)
        }
        else if (computer == "ROCK") {
            console.log(`You win the game! Paper beats Rock`)
        }
        else if (computer == "Paper") {
            console.log(`It's a draw`)
        } 
    }
    
}

function game() {

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay().toUpperCase();
        let playerSelection=prompt("What do you choose? Rock, Paper, Scissors? ").toUpperCase();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();