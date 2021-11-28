
let computerMoveIcon = document.getElementById("computer_moves");
let userInputRock = document.getElementById("rock");
let userInputPaper = document.getElementById("paper");
let userInputScissors = document.getElementById("scissors");
let result = document.getElementById("result");
let userScore = 0;
let computerScore = 0;



let movesSet = ["rock", "paper","scissors"];

let randomSelector = (set) => {
    let random = Math.floor(Math.random() * set.length);
    return set[random];
};

function buttonActions() {

    userInputRock.addEventListener('click', function(){
        game('rock');
    })
    userInputPaper.addEventListener('click', function(){
        game('paper');
    })
    userInputScissors.addEventListener('click', function(){
        game('scissors');
    })
}

buttonActions();



function userWin(){
    userScore++;
    document.getElementById('user').innerHTML = userScore;
}
function userLoss(){
    computerScore++;
    document.getElementById('computer').innerHTML = computerScore;
}

function game(userMove){

    let computerMove = randomSelector(movesSet);
    computerMoveIcon.src = `icons/hand-${computerMove}-solid.svg`
    if (userMove == computerMove){
        result.innerHTML = "Draw";
    }
    else if(userMove == 'rock' && computerMove == "scissors" ||
            userMove == "paper" && computerMove == "rock"    ||
            
            userMove == "scissors" && computerMove == "paper"){


        result.innerHTML = "You Win";
        userWin();

    }
    else{
        result.innerHTML = "You loss";
        userLoss();
    }
}




