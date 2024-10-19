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

function getHumanChoice()
{
     return prompt("Choose: paper, rock or scissors?");
}


var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    if (humanChoice== "paper" && computerChoice == "rock")
    {
            humanScore++;
            return("You win! Paper beats rock!");
    }

    else if (humanChoice== "scissors" && computerChoice == "rock")
        {
            computerScore++;
            return("You lose! Rock beats scissors ...");
        }

    else if (humanChoice==computerChoice)
        {
            return("Oh, it's a draw! No points for no one");
        }
    else if (humanChoice== "scissors" && computerChoice == "paper")
        {
            humanScore++;
            return("You win! Scissors rip paper off!");
        }

    else if (humanChoice== "paper" && computerChoice == "scissors")
        {
            computerScore++;
            return("You lose! Your piece of paper is getting torn apart ...");
        }


    else if (humanChoice=="rock" && computerChoice=="scissors")
    {
        humanScore++;
        return("Man you're beating the s*** out of him");
    }

    else if (humanChoice=="rock" && computerChoice=="paper")
    {
        computerScore++;
        return("Nah, you're done for");
    }
}


let humanChoice;
let computerChoice;

while (humanScore != 5 && computerScore != 5)
{
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
    console.log(humanScore);
}

if (computerScore>humanScore)
{
    console.log("Sorry, you lost");
}

else
{
    console.log("Congrats! You won!!!");
}