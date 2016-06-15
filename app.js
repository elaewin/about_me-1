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

alert('Thanks for playing my get-to-know-me game ' + userName + ', you got ' + userAnswerTotal + ' questions right out of 5.');
