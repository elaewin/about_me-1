'use strict';

//This was just a test alert to make sure js was hooked to index.html
//alert('Yeaaaahhhhhhhh!!!');

//collect userName for use in the greeting
var userName = prompt('Hi user! Welcome to my About Me page. What is your name?');
alert ('Welcome ' + userName + ', glad you\'re here.');

//This varaiable stores the # of questions the user gets right and will be displayed at the end
var userAnswerTotal = 0;

//Q1: Does derek like puppies and licorice?  No, Derek likes ponies and bubblegum.
var answer1 = prompt('Does Derek like puppies and licorice?').toLowerCase();

console.log('The user answered ' + answer1 + ' to question 1.');

if (answer1 === 'yes' || answer1 === 'y'){
  alert('Sorry that\'s incorrect, Derek likes ponies and bubblegum.');
}
else if(answer1 === 'no' || answer1 === 'n'){
  alert('You\'re right!  Derek actually likes ponies and bubblegum.');
  userAnswerTotal++;
}
else{
  alert('Please enter a Yes or No (or Y/N) value for your answer.');
}

//Q2: Is Derek's favorite color green?  Yes
var answer2 = prompt('Is Derek\'s favorite color green?').toLowerCase();

console.log('The user answered ' + answer2 + ' to question 2.');

if (answer2 === 'yes' || answer2 === 'y'){
  alert('You\'re right, Derek\'s favorite color is green!');
  userAnswerTotal++;
}
else if(answer2 === 'no' || answer2 === 'n'){
  alert('Sorry you\'re wrong, Derek\'s favorite color is actually green.');
}
else{
  alert('Please enter a Yes or No (or Y/N) value for your answer.');
}

//Q3: Does Derek like bouldering? No, Derek likes rock and ice climbing.
var answer3 = prompt('Does Derek like bouldering?').toLowerCase();

console.log('The user answered ' + answer3 + ' to question 3.');

if (answer3 === 'yes' || answer3 === 'y'){
  alert('Sorry you\'re wrong, Derek likes rock and ice climing, not bouldering.');
}
else if(answer3 === 'no' || answer3 === 'n'){
  alert('You\'re right, Derek likes rock and ice climbing instead.');
  userAnswerTotal++;
}
else{
  alert('Please enter a Yes or No (or Y/N) value for your answer.');
}

//Q4: Does Derek like computer gaming?  Yes.
var answer4 = prompt('Does Derek like computer gaming?').toLowerCase();

console.log('The user answered ' + answer4 + ' to question 4.');

if (answer4 === 'yes' || answer4 === 'y'){
  alert('You\'re right, Derek does like computer gaming!');
  userAnswerTotal++;
}
else if (answer4 === 'no' || answer4 === 'n'){
  alert ('Sorry you\'re wrong, Derek does like computer gaming.');
}
else{
  alert('Please enter a Yes or No (or Y/N) value for your answer.');
}

//Q5: Did Derek graduate from High School in 2004?  No, he graduated in 2003.
var answer5 = prompt('Did Derek graduate from High School in 2004?').toLowerCase();

console.log('The user answered ' + answer5 + ' to question 5.');

if (answer5 === 'yes' || answer5 === 'y'){
  alert('Sorry you\'re wrong, Derek graduated from High School in 2003');
}
else if (answer5 === 'no' || answer5 === 'n'){
  alert('You\'re right, Derek graduated in 2003!');
  userAnswerTotal++;
}
else {
  alert('Please enter a Yes or No (or Y/N) value for your answer.');
}

//Q6: Guess at what age Derek got his first compuer of his own?  Answer: 12.  User gets 4 guesses and the question should respond with "too high" or "too low" to the user's guesses so they can narrow in on the right number.
var answer6 = parseInt(prompt('At what age did Derek get his first computer of his own? He\'s 33 now so guess a number between 0 and 33, you have 4 tries to get the right answer!'));
var question6CorrectAnswer = 12;

//i = user guess count
while (i < 4){
  //If guess right tell the user so
  if (answer6 === question6CorrectAnswer){
    i++;
    alert('You\'re right, congratulations!  And it only took you ' + i + ' guesses!');
    break;
  }
  //If guess is too high tell the user "too high"
  else if (answer6 > question6CorrectAnswer && question6CorrectAnswer < 34){
    i++;
    alert('Close but no cigar, your guess is too high.');
  }
  //If guess is too low tell the user "too low"
  else if(answer6 < question6CorrectAnswer && question6CorrectAnswer > 0){
    i++;
    alert('Close but no cigar, your guess is too low.');
  }
  //If we get here the user probably entered something that wasn't a number, tell them so
  else{
    i++;
    alert('Your guess wasn\'t between 0 and 33 or wasn\'t a number, but you still used up a guess.  Try again!');
  }
}
//Q7: Will go here

alert('Thanks for playing my get-to-know-me game ' + userName + ', you got ' + userAnswerTotal + ' questions right out of 5.');
