let choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")

let userScore = 0;
let compScore = 0;

const userBoard = document.querySelector("#user-score");
const compBoard = document.querySelector("#comp-score");



const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "#081b31";
}

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const showWinner = (userChoice, compChoice, userWin) => {
    if(userWin){
        userScore++;
        userBoard.innerText = userScore;
        msg.innerText = `You win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compBoard.innerText = compScore;
        msg.innerText = `You lost!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    const compChoice = generateCompChoice();
    
    if(userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock" ){
            userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            userWin = compChoice == "scissors" ? false : true;
        }
        else{
            userWin = compChoice == "rock" ? false : true;
        }

        showWinner(userChoice, compChoice, userWin);
    }
    
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

































// let newbtn = document.createElement('button');
// newbtn.innerHTML = 'Click me';

// let body = document.querySelector("body");
// body.prepend(newbtn);

// newbtn.style.color = 'white';
// newbtn.style.backgroundColor = 'red';

// let currmode = "light"
// const toggle = () => {
//     if(currmode == "light"){
//         currmode = "dark";
//         body.style.backgroundColor = "black";
//     }
//     else{
//         currmode = "light";
//         body.style.backgroundColor = "white";
//     }
// }
// newbtn.addEventListener("click", toggle);