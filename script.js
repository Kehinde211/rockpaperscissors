function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let result = Math.random() * choices.length;
    if(choice[0]) {
        alert("You picked rock")
    } else if (choice[1]) {
        alert("You picked paper")
    } else if (choice[2]) {
        alert("You selected scissors")
    } else (alert("You haven't made a choice");
    console.log(result);
}
function getHumanChoice() {
    let idea = prompt("What would be your preferred choice in your developmental journey?")
   return(idea) 
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
