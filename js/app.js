'use strict';

// // proof life
// console.log('Hello');

let userPoints = 0;
// alert('Welcome');

// let userName = prompt('What is your name?');
// console.log(userName);
// alert('Hello ' + userName + ' Lets play a guessing game.');

// // Question 1

// function checkIfILikeCars() {
//   let doILikeCars = prompt('Do I like cars? Yes or No?').toLowerCase();
//   if (doILikeCars === 'yes' || doILikeCars === 'y'){
//     //console.log('Yes, I like cars');
//     alert('Yes i like cars.');
//   } else if (doILikeCars === 'no' || doILikeCars === 'n'){
//     //console.log('That\'s incorrect');
//     alert('That\'s incorrect.');
//   } else {
//     //console.log('You need to answer with a yes or no. Do I like cars?');
//     alert('You need to answer with a yes or no. Do I like cars?');
//   }
// }
// checkIfILikeCars();

// // Question 2

// function checkBornCity() {
//   let cityBorn = prompt('Was I born in Santa Ana? Yes or No?').toLowerCase();
//   if (cityBorn === 'yes' || cityBorn === 'y'){
//     //console.log('Yes, I was born in Santa Ana.');
//     alert('Yes, I was born in Santa Ana');
//   } else if (cityBorn === 'no' || cityBorn === 'n'){
//     //console.log('That\' incorrect);
//     alert('That\' incorrect.');
//   } else {
//     //console.log('You need to answer with a yes or no. Was I born in Santa Ana? Yes or No?');
//     alert('You need to answer with a yes or no. Was I born in Santa Ana? Yes or No?');
//   }
// }
// checkBornCity();

// // Question 3

// function myFavCars() {
//   let favoriteCar = prompt('Is the BMW M3 my favorite car? Yes or No?').toLowerCase();
//   if (favoriteCar === 'yes' || favoriteCar === 'y'){
//     //console.log('Yes that\'s correct');
//     alert('Yes that\'s correct');
//   } else if (favoriteCar === 'no' || favoriteCar === 'n'){
//     //console.log('That\'s incorrect');
//     alert('That\'s incorrect');
//   } else {
//     //console.log('You need to answer with a yes or no. Is the BMW M3 my favorite car? Yes or No?);
//     alert('You need to answer with a yes or no. Is the BMW M3 my favorite car? Yes or No?');
//   }
// }
// myFavCars();

// // Question 4

// function hatePhoto() {
//   let hatePhotography = prompt('Do i hate photography? Yes or No').toLowerCase();
//   if (hatePhotography === 'yes' || hatePhotography ==='y'){
//     //console.log('No that\'s incorrect');
//     alert('No that\'s incorrect');
//   } else if (hatePhotography === 'no' || hatePhotography === 'n'){
//     //console.log('No, I love photography');
//     alert('No, I love photography');
//   } else {
//     //console.log('You need to answer with a yes or no. Do i hate photography? Yes or No?);
//     alert('You need to answer with a yes or no. Do i hate photography? Yes or No?');
//   }
// }
// hatePhoto();

// // Question 5

// function colorBlack() {
//   let secondFavoriteColor = prompt('Is black my favorite color? Yes or No?').toLowerCase();
//   if (secondFavoriteColor === 'yes' || secondFavoriteColor === 'y'){
//     //console.log('No, that\'s incorrect ');
//     alert('No, that\'s incorrect ');
//   } else if (secondFavoriteColor === 'No' || secondFavoriteColor === 'n' ){
//     //console.log('That\'s Correct');
//     alert('That\'s Correct');
//   } else {
//     //console.log('You need to answer with a yes or no.Is black my favorite color? Yes or No?');
//     alert('You need to answer with a yes or no. Is black my favorite color? Yes or No?');
//   }
// }
// colorBlack();

// // Question 6

// function pickCorrectNumber() {
//   let attempts = 4;
//   let correctNumber = 7;

//   for (let i = 0; i < attempts; i++) {
//     let userGuess = prompt(`Pick a number from 1 to 10. (You have ${attempts - i} attemps reamining):`);
//     userGuess = parseInt(userGuess);
//     console.log(correctNumber);
//     console.log(userGuess);
//     console.log(typeof userGuess);
//     if (userGuess < correctNumber) {
//       alert('Too Low!');
//     } else if (userGuess > correctNumber) {
//       alert('Too High');
//     } else if (userGuess === correctNumber) {
//       alert('Just right');
//       break;
//     }
//   }
//   alert('The answer is 7');
// }
// pickCorrectNumber();

// // Question 7


let favCarsAnswers = ['BMW E36', 'BMW E30', 'Porsche 997', 'BMW E46', 'Toyota AE86 Trueno', 'Nissan 240 S14', 'Nissan 240 S13', 'Mazda RX7 FD', 'Nissan R32 Skyline', 'Ford Mustang 1968'];
let attemptsToGo = 6;

for (let i = 0; i < attemptsToGo; i++) {
  console.log(attemptsToGo);
  let userGuess = prompt(`what is one of my favorite cars? You have  ${attemptsToGo - i - 1}   left.`);
  console.log(attemptsToGo);
  for (let j = 0; j < favCarsAnswers.length; j++) {
    console.log(favCarsAnswers[j].toLowerCase);
    console.log(typeof favCarsAnswers);
    if (userGuess === favCarsAnswers[j].toLowerCase()) {
      console.log('You are correct!');
      alert('You are correct!');
      break;
    }
    else {
      console.log(`No try again. You have  ${attemptsToGo - i - 1}   left.`);
    }
  }
}


