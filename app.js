'use strict';

//This was just a test alert to make sure js was hooked to index.html
//alert('Yeaaaahhhhhhhh!!!');

//collect userName for later use
var userName = prompt('Hi user! Welcome to my About Me page. What is your name?');
alert ('Welcome ' + userName + ', glad you\'re here.');

var answer1 = prompt('The answer to question 1 is no.').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y'){
  alert('Tell user they\'re wrong');
}
else if(answer1 === 'no' || answer1 === 'n'){
  alert('Tell the user they\'re right');
}
else{
  alert('Please enter a Yes or No value for your answer.');
}
