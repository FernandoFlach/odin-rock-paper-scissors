
let option;
let human_score = 0;
let computer_score = 0;

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

function getHumanChoice(text = "Choose either rock, paper or scissors"){
    x = prompt(text)
    if (x == "rock" ||  x == "paper" || x == "scissors"){
        return x
    }
    else {
        getHumanChoice("Please insert a valid option")
    }
    
}

function winner(human, computer){
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
}}

let computer = getComputerChoice();
let human = getHumanChoice();
console.log("Computer:", computer)
console.log("Human:", human)
console.log("Winner is:", winner(human, computer));