function computerPlay() {
    array = ['Rock', 'Scissors', 'Paper']
    let randomIndex = Math.floor(Math.random() * 2 + 1)
    return array[randomIndex]

}
let computerSelection = computerPlay().toUpperCase();

let playerSelection=prompt("What do you choose? Rock, Paper, Scissors? ").toUpperCase();

function playRound(player, computer) {
    if (player == "ROCK") { 
        if (computer == "SCISSORS") {
            alert (`You win the game! Rock beats Scissors`)
        }
        else if (computer == "ROCK") {
            alert (`It's a draw`)
        }
        else if (computer == "Paper") {
            alert (`You lose the game! Paper beats Rock`)
        }
    }
    else if (player == "SCISSORS") { 
        if (computer == "SCISSORS") {
            alert (`It's a draw`)
        }
        else if (computer == "ROCK") {
            alert (`You lose the game! Rock beats Scissors`)
        }
        else if (computer == "PAPER") {
            alert (`You win the game! Scissors beats Paper`)
        }
    }
    else if (player == "PAPER") { 
        if (computer == "SCISSORS") {
            alert (`You lose the game! Scissors beats Paper`)
        }
        else if (computer == "ROCK") {
            alert (`You win the game! Paper beats Rock`)
        }
        else if (computer == "Paper") {
            alert (`It's a draw`)
        } 
    }
    
}