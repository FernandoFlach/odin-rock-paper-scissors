
let option;
let human_score = 0;
let computer_score = 0;
let x;

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


function getHumanChoice(){
    while (true){
        x = prompt("Choose either rock, paper or scissors").toLowerCase();
        if (x == "rock" ||  x == "paper" || x == "scissors"){
            return x
        }
    }
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

function play_round(){
    let computer = getComputerChoice();
    let human = getHumanChoice();
    let winner; 
    winner = calculate_winner(human, computer);
    console.log("Computer:", computer);
    console.log("Human:", human);
    console.log("Winner is:", winner);
    

    // Calculate score
    if(winner == "human"){
        human_score += 1;
    }
    else if(winner == "computer"){
        computer_score += 1;
    }

    console.log("Human:", human_score, "Computer:", computer_score);
    console.log("");
}

function play_game(){
    for(let i = 0; i < 5; i++){
        play_round();
    }
    console.log("Final Score:")
    console.log("Human:", human_score, "Computer:", computer_score);

}

play_game();