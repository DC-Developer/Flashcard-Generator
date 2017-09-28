const inquirer = require("inquirer");
const basicCard = require("./basicCard");
const clozeCard = require("./clozeCard");


//create a start function that starts the game and asks user to either make a card or take quiz

function start(){

    inquirer.prompt({
        type: "list",
        name: "userChoice" ,
        message: "Select option",
        choices: [
            "Create Cards",
            "Play Game "
        ]

    }).then(function(input){
        if(input.userChoice === "Create Cards"){
            console.log("Create a card...");
            createCard();
        }else{
            console.log("Game started");

        }
    });

}
start();

function createCard(){

    console.log("Input the first question: ");

    inquirer.prompt([
        {
            type: "input",
            name: "question",
            message: "Enter the question."},
        {
            type: "input",
            name: "answer",
            message: "Enter the answer to the question."
        }
    ]).then(function(input){
        //push the input to the newly created instance of the basicCard object 
        console.log("Current question: "+input.question);
        console.log("Current answer: "+input.answer);
    });




}

function playGame(){



}