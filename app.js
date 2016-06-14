'use strict';

//This was just a test alert to make sure js was hooked to index.html
//alert('Yeaaaahhhhhhhh!!!');

//collect userName for later use
var userName = prompt('Hi user! Welcome to my About Me page. What is your name?');
alert ('Welcome ' + userName + ', glad you\'re here.');

//Q1: Does derek like puppies and licorice?  No, Derek likes ponies and bubblegum.
var answer1 = prompt('Does Derek like puppies and licorice?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y'){
  alert('Sorry that\'s incorrect, Derek likes ponies and bubblegum.');
}
else if(answer1 === 'no' || answer1 === 'n'){
  alert('You\'re right!  Derek actually likes ponies and bubblegum.');
}
else{
  alert('Please enter a Yes or No (or Y/N) value for your answer.');
}

//Q2: Is Derek's favorite color green?  Yes

//Q3: Does Derek like bouldering? No, Derek likes rock and ice climbing.

//Q4: Does Derek like computer gaming?  Yes.

//Q5: Did Derek graduate from High School in 2004?  No, he graduated in 2003.
