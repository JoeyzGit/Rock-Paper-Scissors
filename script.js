let humanScore = 0;

let computerScore = 0;


function getComputerChoice() {
    const choice =  Math.floor(Math.random() * 3) + 1;

    if(choice === 1) {
        return 'Rock';
    } else if (choice === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (Rock, Paper, Scissors) : ");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    
    let hChoice = humanChoice.toLowerCase(); 

    // Computer Choice : Rock
    
    if(computerChoice === 'Rock') {
        if(hChoice === 'rock') {
            console.log("You Draw! Good One.");
        } else if (hChoice === 'paper') {
            console.log("Bravo! You won the round!");
        } else {
            console.log("You lose! Hahahahah")
        }
    }

    if(computerChoice === 'Paper') {
        if(hChoice === 'scissors') {
            console.log("You Win!, well done!");
        } else if (hChoice === 'paper') {
            console.log("You Draw! Good One.");
        } else {
            console.log("Take the L bro :)")
        }
    }
}

const humanSelects = getHumanChoice();
const computerSelects = getComputerChoice();

playRound(humanSelects, computerSelects);

// console.log(getComputerChoice());
// console.log(getHumanChoice());