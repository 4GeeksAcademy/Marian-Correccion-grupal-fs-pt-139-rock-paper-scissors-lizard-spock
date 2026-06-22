const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"]
};

const jugar = (userChoice) => {

    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];


    let mensajeHTML = `<class = bg-succes>You'r choice: <strong>${userChoice}</strong>
       <br>
       Sheldon choice: <strong>${computerChoice}</strong>
       <br><br>`;


    if (userChoice === computerChoice) {
      /*return*/ mensajeHTML += "¡I'ts a tie! 🤝";
    }
    if (rules[userChoice].includes(computerChoice)) {
      /*return*/ mensajeHTML += "¡You win! 🎉";
    } 
    if(rules[computerChoice].includes(userChoice)){
      /*return*/ mensajeHTML += "Lusser, tray again 😉";
    }

  
  
    document.getElementById("result").innerHTML = mensajeHTML;
}; 

//console.log(jugar("rock"));