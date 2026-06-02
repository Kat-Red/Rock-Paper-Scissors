const getComputerChoice = () => {
	let randNum = Math.floor(Math.random() * 3);
	let choiceArr = ["rock", "paper", "scissors"];
	console.log(choiceArr[randNum]);
	return choiceArr[randNum];
}

const playGame = (playerSelection) => {
	
	const playRound = (humanChoice, computerChoice) => {
		if(humanChoice == "rock" && computerChoice == "scissors"){
			dialog.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
			humanScore++;
		}
		else if(humanChoice == "paper" && computerChoice == "scissors"){
			dialog.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
			computerScore++;
		}

		else if(humanChoice == "scissors" && computerChoice == "paper"){
			dialog.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
			humanScore++;
		}
		else if(humanChoice == "rock" && computerChoice == "paper"){
			dialog.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
			computerScore++;
		}
		else if(humanChoice == "paper" && computerChoice == "rock"){
			dialog.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
			humanScore++;
		}
		else if(humanChoice == "scissors" && computerChoice == "rock"){
			dialog.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
			computerScore++;
		}
		else if(humanChoice == computerChoice){
			dialog.textContent = "A tie!";
		}
	}
	playRound(playerSelection, getComputerChoice())
	hScore.textContent = humanScore;
	cScore.textContent = computerScore;
}

let humanScore = 0;
let computerScore = 0;

const paper = document.createElement('button');
const scissors = document.createElement('button');
const rock = document.createElement('button');

const choice = document.querySelector('#selection');

const dialog = document.createElement('p');
const hScore = document.querySelector("#human");
const cScore = document.querySelector("#computer");

paper.textContent = "Paper";
scissors.textContent = "Scissors";
rock.textContent = "Rock";

paper.addEventListener('click', ()=>{
	playGame("paper")
})

scissors.addEventListener('click', ()=>{
	playGame("scissors")
})

rock.addEventListener('click', ()=>{
	playGame("rock")
})

choice.appendChild(paper);
choice.appendChild(scissors);
choice.appendChild(rock);
choice.appendChild(dialog);