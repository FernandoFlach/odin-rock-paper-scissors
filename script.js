
let option, x;
let human_score = 0;
let computer_score = 0;
const total_results = document.querySelector("#results")


function getComputerChoice(){
    x = Math.random()
    if (x > 0.66){
        option = "rock"
    }
    else if (x > 0.33){
        option = "scissors"
    }
    else{
        option = "paper"
    }
    return option


}

function calculate_winner(human, computer){
    if(human == "paper"){
        if(computer == "paper"){
            return "draw"
        }
        else if(computer == "rock"){
            return "human"
        }
        else {
            return "computer"
        }
    }
    else if(human == "rock"){

        if(computer == "paper"){
            return "computer"
        }
        else if(computer == "rock"){
            return "draw"
        }
        else {
            return "human"
        }
    }
    else if(human == "scissors"){

        if(computer == "paper"){
            return "human"
        }
        else if(computer == "rock"){
            return "computer"
        }
        else {
            return "draw"
        }
}
}

// function old_play_round(human){
//     let computer = getComputerChoice();
//     //let human = getHumanChoice();
//     let winner; 
//     winner = calculate_winner(human, computer);
//     console.log("Computer:", computer);
//     console.log("Human:", human);
//     console.log("Winner is:", winner);
    

//     // Calculate score
//     if(winner == "human"){
//         human_score += 1;
//     }
//     else if(winner == "computer"){
//         computer_score += 1;
//     }

//     console.log("Human:", human_score, "Computer:", computer_score);
//     console.log("");
// }

function play_round(human){

    let computer = getComputerChoice();
    let winner = calculate_winner(human, computer);

    // Calculate score
    if(winner == "human"){
        human_score += 1;
    }
    else if(winner == "computer"){
        computer_score += 1;
    }

    
    // A parent div with three child divs
    const results = document.createElement("div");
    const computerResult = document.createElement("div");
    const humanResult = document.createElement("div");
    const winnerResult = document.createElement("div");

    results.style.marginTop = "25px";

    total_results.prepend(results);
    results.prepend(humanResult);
    results.prepend(computerResult);
    results.prepend(winnerResult);

    humanResult.textContent = `Human: ${human}`;
    computerResult.textContent = `Computer: ${computer}`;
    winnerResult.textContent = `Winner: ${winner}`;
   
    // Score
    const score = document.createElement("div");
    results.prepend(score);
    score.textContent = `Human: ${human_score} Computer: ${computer_score}`;

    if (computer_score == 5){
        const ending = document.createElement("h4");
        results.prepend(ending);
        ending.textContent = `The winner is the Computer!`
    } else if (human_score == 5) {
        const ending = document.createElement("h4");
        results.prepend(ending);
        ending.textContent = `The winner is the Human!`
    }


    console.log("Human:", human_score, "Computer:", computer_score);
    console.log("");
}


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => { play_round("rock")})
paperButton.addEventListener("click", () => { play_round("paper")})
scissorsButton.addEventListener("click", () => { play_round("scissors")})
// paperButton.addEventListener("click", play_round("paper"))
// scissorsButton.addEventListener("click", play_round("scissors"))
