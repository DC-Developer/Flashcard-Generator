const inquirer = require("inquirer");
const basicCard = require("./basicCard");
const clozeCard = require("./clozeCard");

//create an array to hold all the questions
var questions = [];

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
            createBasicCard();
        }else{
            console.log("Game started");

        }
    });

}
start();

function createBasicCard(){

    console.log("Input the question: ");

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
        //console.log("Current question: "+input.question);
        //console.log("Current answer: "+input.answer);
        var newBasic = new basicCard(input.question, input.answer);

        
        questions.push(newBasic);
        //console.log(questions);
        
        inquirer.prompt({
            type: "list",
            name: "query",
            message: "Would you like to make another card?",
            choices: [
                
                "Yes", 
                "No"

            ]
        }).then(function(choice){

            if(choice.query === "Yes"){
                createBasicCard();
               
            }
            

        });



        
    });




}
function createClozeCard(){



}

function playGame(Questions){

for(i = 0; i < Questions.length; i++){
    
    inquirer.prompt({
        type: "input",
        message: Questions[i].front,
        name: "answer" 
    }).then(function(result){
        console.log("Your answer: "+result.answer);
        
        if(result.answer == Questions[i].back){
            console.log("You got it right!");

        }
    });


}//end of for loop



}//end of playgame