'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1; //number between 1 and 20. ig, if 0 included then we are not able to detect the empty input given by the user by this following algo.
//Math.random() ==> number between 0 and 1.
//Math.random()*20 ==> number between 0 and 19.  =====> HOW this works(Behind Maths) ??? 
// document.querySelector('.number').textContent = secretNumber;

//review: @me:-
/*
let score = Number(document.querySelector('.score').textContent); //let used b'coz we have to mutate the score value whenever user-guess is incorrect.
*/
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    
    // console.log(document.querySelector('.guess').value);
    let guess = document.querySelector('.guess').value;
    console.log(guess, typeof guess); //Whenever we get something from the UI(for e.g:- input field) it usually always is a string.

    //converting type for comparison. ig,we can do comparison with loosely comparison oprtr.
    guess = Number(guess); 
    console.log(guess, typeof guess);

    if(!guess){ //when user doesn't give input and click on check button.
        
        console.log(guess); //0 --> It's a falsy value.
        // document.querySelector('.message').textContent = '⛔ No Number!';
        displayMessage('⛔ No Number!');

    }else if(guess === secretNumber){
        //When player == wins
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        
        //imp: This manipulation of Style will happen on inline style. we're not changing CSS file. Style Property name must be in CamelCase not in two-words.
        // document.querySelector('body').style.backgroundColor = green;  ========> Wrong Syntax!!!!!!
        document.querySelector('body').style.backgroundColor = '#60b347'; //NOTE:- value must bev in string. 
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if(guess !== secretNumber){ 
        //when guess is wrong
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!': '📉 Too low!';   
            displayMessage(guess > secretNumber ? '📈 Too high!': '📉 Too low!');
            score--; // score -=1;
            document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.message').textContent = '💥 You loose the game!';  
            displayMessage('💥 You loose the game!');
            document.querySelector('.score').textContent = 0;
        }  

    }
}) 
//here, we have two class where btn is a generic class which is used in other place also in this html page.

/*
addEventListner() is a special kind of function b'coz it expects eventHandler function in the 2nd argument. TypeofEvent(or NameofEvent) is passed as a 1st argument in the addEventListner() fuction. 
EventHandlerFunction() contains code that we want to execute whenever the event happens.

NOTE:- Function is just a value we have learnt this. If it is just a value then we can also pass it to the another function as a argument just like any other value like string or number.
Function which expects function as an argument callled Callback Functions. ig, cnf it ???????

//Function Expression:- b'coz x stores the function expression & this function() is just a value.
const x = function(){  
    console.log(23);
}

NOTE:- we are only defining the function in the addEventListner() not calling the EventHandlerFuntion. JS engine will call the function as soon as event happens.
*/

//Implement Again Button working/Event:-
document.querySelector('.again').addEventListener('click', function(){ //--> this function is also called as anonymous eventHandler function as it doesn't have any name.
    // console.log("again btn works!");
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score; //value is in Number ????? Why difference. What should be the type of value ?
    document.querySelector('.number').textContent = '?' ; //value is in string. ????
    document.querySelector('.guess').value = ''; //imp: Value of input is always string as we know that. so, empty string means absence of any value there.
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});


