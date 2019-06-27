let prompt = require("prompt-sync")();

// code below (replace this example)
let numAttempts = prompt("How many tries do you need?: ");
var randomNum = Math.ceil(Math.random()*100);
var attempts = 0;
var guessed = [];
console.log(randomNum);
while (attempts<numAttempts){
  attempts ++;
  let answer = prompt("Guess a number: ");
  if (answer == randomNum){
    console.log('You got it! You took ' + attempts + ' attempts!');
    break;
  }
  else if(guessed.includes(answer)){
    console.log('Already Guessed!');
  }
  else if(answer < randomNum){
    console.log('Too Low!');
    guessed.push(answer);
  }
  else if(answer > randomNum){
    console.log('Too High!');
    guessed.push(answer);
  }
  else{
    console.log('Not a number! Try again!');
  }
}