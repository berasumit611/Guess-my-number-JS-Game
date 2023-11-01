'use strict';

// secret random no once created
//The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
let secret_number = Math.trunc(Math.random() * 20) + 1; //0 to 19.9999 + 1


let score = 20; //initially score initialize in a variable then decrease for wrong guess
let high_score = 0;
const displayMessage=function(message){
  document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //console.log(guess, typeof guess); //string

  if (!guess) {
    //no number
    //document.querySelector('.message').textContent = 'No Number 😥';
    displayMessage('No Number😥');
  } //else document.querySelector('.message').textContent = 'wright Number ';
  else if (guess === secret_number) {
    
    displayMessage('Correct Number 🎉');

    document.querySelector('.number').textContent = secret_number;

    //manupulating css
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > high_score) {
      high_score = score;
      document.querySelector('.highscore').textContent = high_score;
    }

    //when guess is not same with secret number
  } else if (guess !== secret_number) {
    //when guess is too high...
    if (score > 1) {
      displayMessage (guess > secret_number ? 'too high 📈' : 'too low 📉');
      score--; //for wrong guess score decreases
      document.querySelector('.score').textContent = score;
    } else {
      
      displayMessage('You Lost ❗❗❗');
      document.querySelector('.score').textContent = 0;
    }
  }

});

// reset

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
