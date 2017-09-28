const inquirer = require("inquirer");
const basicCard = require("./basicCard");
const clozeCard = require("./clozeCard");
const fs = require("fs");

//create an array to hold all the questions
var questions = [];
var clozeQuestions = [];
var index = 0;
//create a start function that starts the game and asks user to either make a card or take quiz

function start(){

    inquirer.prompt({
        type: "list",
        name: "userChoice" ,
        message: "Select option",
        choices: [
            "Create Normal Cards",
            "Create Cloze Cards",
            "Play Game ",
            "Play Cloze Game"
        ]

    }).then(function(input){

       switch(input.userChoice){
            case "Create Normal Cards": 
                createBasicCard();
                break;
            case "Create Cloze Cards":
                
                createClozeCard();
                break;
            case "Play Game":
                
                playGame();
                break;
            case "Play Cloze game":
               
                playClozeGame();
                break;
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

        var logBasic = JSON.stringify(newBasic);
        
        fs.appendFile("basic.txt", logBasic);
        
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
               
            }else{
                inquirer.prompt({
                    name: "toRun",
                    message: "Would you like to start the game",
                    type: "list",
                    choices: [
                        "Yes",
                        "No"

                    ]
                }).then(function(result){
                    if(result.toRun == "Yes"){
                        playGame(questions);
                    }else{
                        start();

                    }
                });

            }
    
        });
    });

}
function createClozeCard(){
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
            
            var newCloze = new clozeCard(input.question, input.answer);
            //split the answer from the full text using the split method to create the partial string
         
            newCloze.splittingText();

            var fileCloze = JSON.stringify(newCloze.cloze);
            var fileText = JSON.stringify(newCloze.text);

            clozeQuestions.push(newCloze);
           
            fs.appendFile("cloze.txt",fileText);
            fs.appendFile("cloze.txt",fileCloze);
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
                    createClozeCard();
                   
                }else{
                    inquirer.prompt({
                        name: "toRun",
                        message: "Would you like to start the game",
                        type: "list",
                        choices: [
                            "Yes",
                            "No"
    
                        ]
                    }).then(function(result){
                        if(result.toRun == "Yes"){
                            playClozeGame(clozeQuestions);
                        }else{
                            start();
    
                        }
                    });
    
                }
        
            });
        });


}

function playGame(Questions){


if(index < Questions.length){   
    inquirer.prompt({
        type: "input",
        message: Questions[index].front,
        name: "answer" 
    }).then(function(result){
        console.log("Your answer: "+result.answer);
        
        if(result.answer == Questions[index].back){
            console.log("You got it right!");

        }else{
            console.log("Wrong! The correct answer was: "+Questions[index].back);
            
        }
        index++;//increment the counter so on the next recursion the prompt goes into the next Questions index
        playGame(questions);

    });


}//end of if loop



}//end of playgame

function playClozeGame(Questions){
    if(index < Questions.length){   
        inquirer.prompt({
            type: "input",
            message: Questions[index].partial,
            name: "answer" 
        }).then(function(result){
            console.log("Your answer: "+result.answer);
            
            if(result.answer == Questions[index].cloze){
                console.log("You got it right!");
    
            }else{
                console.log("Wrong! The correct answer was: "+Questions[index].cloze);
                
            }
            index++;//increment the counter so on the next recursion the prompt goes into the next Questions index
            playClozeGame(clozeQuestions);
    
        });
    
    
    }//end of if loop


}