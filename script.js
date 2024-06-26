function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let result = Math.random() * choices.length;
    console.log(result);
}
function getHumanChoice() {
    let idea = prompt("What would be your preferred choice in your developmental journey?")
    let answer = idea;
    console.log(answer); 
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice == "rock" && computerChoice == "scissors")
        let immense = "You lose! Paper beats Rock";
        console.log(immense);
        humanScore++
        computerScore++
    }    
}
playRound()
playRound()
playRound()
playRound()
playRound()
