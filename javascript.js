function getComputerChoice()
{
    let a = Math.random();

    if (a<1/3)
    {
        return "paper";
    }

    else if (a>= 1/3 && a<2/3)
    {
        return "rock";
    }

    else
    {
        return "scissors";
    }
}

ScoreFunction = function(){

    if (humanScore==5){
        alert("You are the final winner!!");

        humanScore = 0;
        computerScore = 0;
    }

    else if (computerScore==5){
        alert("The computer is the final winner...");

        humanScore = 0;
        computerScore = 0;
    }

    score.textContent = `Human score : ${humanScore}, computer score : ${computerScore}`;
    body.appendChild(score);
}

function playRound(humanChoice, computerChoice){

    console.log(`humanScore: ${humanScore}, computerScore: ${computerScore}`);

    if (humanChoice == computerChoice){
        alert("draw!");
    }

    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            ++humanScore;
            alert("You win!");
        }

        else{
            ++computerScore;
            alert("You lose!");
        }
    }

    else if (humanChoice == "rock"){
        if (computerChoice=="scissors"){
            ++humanScore;
            alert("You win!");
        }

        else{
            ++computerScore;
            alert("You lose!");
        }
    }

    else{
         if (computerChoice == "paper"){
            ++humanScore;
            alert("You win!");
         }

         else{
            ++computerScore;
            alert("You lose!");
         }

    }
}

let humanScore = 0;
let computerScore = 0;

let body = document.body;
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const score = document.querySelector("#score");




paper.addEventListener("click", () => {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    ScoreFunction();
});

rock.addEventListener("click", () => {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    ScoreFunction();
   });

scissors.addEventListener("click", () => {
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    ScoreFunction();
    });