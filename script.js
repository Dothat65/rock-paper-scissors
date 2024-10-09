

function getComputerChoice(){
    //when function is called, randomly return rock, paper, or scissors
    //figure out a function that returns random
    // use math.random, if number is greater then .33, return rock, else if between .33 and .66, return paper
    // else return scissors
    const result = Math.random();

    if(result <.33){
        return "rock"
    }
    else if(result>=.33 && result<.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    //prompting user
    let userInput = prompt("Please enter rock, paper, or scissors");
    let answer = userInput.toLowerCase();
    while(answer != "rock" && answer != "paper" && answer != "scissors"){
        alert("Invalid choice, please enter rock, paper, or scissors");
       userInput = prompt("Please enter rock, paper, or scissors");
       answer = userInput.toLowerCase();
    }
    return answer;
}







function playGame(){
    var humanScore = 0;
    var computerScore = 0;
function playRound(humanChoice, computerChoice){

    if(humanChoice == computerChoice){
        console.log(`It's a tie!, you selected ${humanChoice} and the computer selected ${computerChoice}`);
    }
    else{
        switch (humanChoice){
            case "rock":
                if(computerChoice=="paper"){
                    console.log(`You lose! Paper beats rock, The computer selected ${computerChoice}`)
                    computerScore++;
                }
                else if(computerChoice=="scissors"){
                    console.log(`You win! Rock beats scissors, The computer selected ${computerChoice}`);
                    humanScore++;
                }
                break;
            case "paper":
                if(computerChoice=="rock"){
                    console.log(`You win! Paper beats rock, The computer selected ${computerChoice}`);
                    humanScore++;
                }
                else if(computerChoice=="scissors"){
                    console.log(`You lose! Scissors beats paper,  The computer selected ${computerChoice}`);
                    computerScore++;
                }
                break;
            case "scissors":
                if(computerChoice=="rock"){
                    console.log(`You lose! Rock beats paper, The computer selected ${computerChoice}`);
                    computerScore++;
                }
                else if(computerChoice=="paper"){
                    console.log(`You win! scissors beats paper,  The computer selected ${computerChoice}`);
                    humanScore++;
                }   
        }
    }
    
}


for(i=0; i<5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

if(humanScore > computerScore){
    console.log("You won!")
}
else if(computerScore > humanScore){
    console.log("You lose!")
}
else{
    console.log("It's a tie!")
}
console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`)
}

playGame();