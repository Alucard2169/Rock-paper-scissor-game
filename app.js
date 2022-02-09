const moves = ["rock", "paper", "scissors"];
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const rock = document.querySelector('.rock');
let result = document.querySelector('.display');
let pcMove = document.querySelector('.computer_display');
let buttons = document.querySelectorAll('button');
let user = document.querySelector('.user');
let pc = document.querySelector('.computer');
let userScore = 0;
let computerScore = 0;


function randomSelector(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index]
}


buttons.forEach((button) => {
    button.addEventListener('click', function(){
        button.classList.add('click')
    })
})
function end(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('click')
}
buttons.forEach(button => { button.addEventListener('transitionend', end) })



rock.addEventListener('click', function(){
    return (game('rock'))
})
scissors.addEventListener('click', function () {
    return (game('scissors'))
})
paper.addEventListener('click', function () {
    return (game('paper'))
})

function userWin(){
    userScore++;
    document.querySelector('.u').innerHTML = " " + userScore;
}
function userLoss(){
    computerScore++;
    document.querySelector('.p').innerHTML = " "+ computerScore;
}

const game = (userInput) => {

    const computerMoves = randomSelector(moves);
    if (userInput === computerMoves) {
        result.textContent = 'draw 🤝'
        pcMove.textContent = computerMoves;

    }

    else if(userInput === 'rock' && computerMoves === "paper" ||
            userInput === "scissors" && computerMoves === "rock" ||
            userInput === 'paper' && computerMoves === "scissors") {
        result.textContent = 'you Loss 😥'
        userLoss();
        pcMove.textContent = computerMoves;
    }
    else {
        result.textContent = 'you Won 🎉'
        userWin();
        pcMove.textContent = computerMoves;
    }
}
