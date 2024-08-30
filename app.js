let userScore = 0;
let compScore = 0;

let msg = document.querySelector(".msg-container");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  console.log("User Choice : ", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice : ", compChoice);

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //compchoice ya toh paper hogi ya scissor kyunki agr rock hoti toh pahele hi draw ho jaate.
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const draw = () => {
  msg.innerText = "Match Draw.";
  msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win..Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose..${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
