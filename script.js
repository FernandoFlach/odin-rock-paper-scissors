
let option;

function getComputerChoice(){
    x = Math.random()
    if (x > 0.66){
        option = "Rock"
    }
    else if (x > 0.33){
        option = "Scissors"
    }
    else{
        option = "Paper"
    }

    console.log(option)

}
getComputerChoice()
