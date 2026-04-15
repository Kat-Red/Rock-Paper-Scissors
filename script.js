const getComputerChoice = () => {
	let randNum = Math.floor(Math.random() * 3);
	let choiceArr = ["rock", "paper", "scissors"];
	console.log(choiceArr[randNum]);
	return choiceArr[randNum];
}

const getHumanChoice = () => {
	let choice = prompt("Select rock, paper or scissors");
	return choice.toLowerCase();
}





const playGame = () => {
	let humanScore = 0;
	let computerScore = 0;
	const playRound = (humanChoice, computerChoice) => {


	if(humanChoice == "rock" && computerChoice == "scissors"){
		console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
		humanScore++;
	}
	else if(humanChoice == "paper" && computerChoice == "scissors"){
		console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
		computerScore++;
	}

	else if(humanChoice == "scissors" && computerChoice == "paper"){
		console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
		humanScore++;
	}
	else if(humanChoice == "rock" && computerChoice == "paper"){
		console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
		computerScore++;
	}
	else if(humanChoice == "paper" && computerChoice == "rock"){
		console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
		humanScore++;
	}
	else if(humanChoice == "scissors" && computerChoice == "rock"){
		console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
		computerScore++;
	}
	else if(humanChoice == computerChoice){
		console.log("A tie!");
	}
	else console.log("Please enter a valid choice")
	}
	let round = 0;
	while (round < 5){
		playRound(getHumanChoice(),getComputerChoice())
		round ++;
	}
	console.log(`Final Score: Human ${humanScore}. Computer: ${computerScore}`);
}

playGame();

// console.log(getComputerChoice())
// console.log(getHumanChoice())

