const items = ["rock", "paper", "scissors"];
const computerChoice = computerPlay();

// COMPUTER PLAY FUNCTION THAT RETURNS ROCK PAPER OR SCISSORS
function computerPlay() {
	return items[Math.floor(Math.random() * items.length)];
}

// Function that plays one round of the game
function playRound(userChoice, computerChoice) {
	console.log("CPU Selection: " + computerChoice);
	if (userChoice == computerChoice) {
		userScore++, computerScore++;
		return "Its a tie!";
	} else if (userChoice == "rock" && computerChoice == "paper") {
		computerScore++;
		return "You Lose! Paper beats Rock";
	} else if (userChoice == "rock" && computerChoice == "scissors") {
		userScore++;
		return "You Win! Rock beats Scissors";
	} else if (userChoice == "paper" && computerChoice == "scissors") {
		computerScore++;
		return "You Lose! Scissors beats Paper";
	} else if (userChoice == "paper" && computerChoice == "rock") {
		userScore++;
		return "You Win Paper beats Rock";
	} else if (userChoice == "scissors" && computerChoice == "rock") {
		computerScore++;
		return "You Lose! Rock beats Scissors";
	} else if (userChoice == "scissors" && computerChoice == "paper") {
		userScore++;
		return "You Win! Scissors beats Rock";
	} else {
		return "Please enter Selection";
	}
}

// Score
let userScore = 0;
let computerScore = 0;

// Game function that plays 5 rounds
function game() {
	for (let i = 0; i < 5; i++) {
		const computerChoice = computerPlay();
		const userChoice = prompt("Please choose rock, paper, or Scissors");
		console.log(playRound(userChoice.toLowerCase(), computerChoice));
		console.log("You: " + userScore, "CPU: " + computerScore);
	}
	// Tally Winner
	if (userScore == computerScore) {
		return "Its a Tie Game!";
	} else if (userScore > computerScore) {
		return "Congrats You Won";
	} else {
		return "Sorry You Lost";
	}
}

console.log(game());
