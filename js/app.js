'use strict';

// proof life
console.log('Hello');

alert('Welcome');

let userName = prompt('What is your name?');
console.log(userName);
alert('Hello ' + userName);

let doILikeCars = prompt('Do I like cars? Yes or No?').toLowerCase();
if (doILikeCars === 'yes' || doILikeCars === 'y'){
  //console.log('Yes, I like cars');
  alert('Yes i like cars.');
} else if (doILikeCars === 'no' || doILikeCars === 'n'){
  //console.log('That\'s incorrect');
  alert('That\'s incorrect.');
} else {
  //console.log('You need to answer with a yes or no. Do I like cars?');
  alert('You need to answer with a yes or no. Do I like cars?');
}
let cityBorn = prompt('Was I born in Santa Ana? Yes or No?').toLowerCase();
if (cityBorn === 'yes' || cityBorn === 'y'){
  //console.log('Yes, I was born in Santa Ana.');
  alert('Yes, I was born in Santa Ana');
} else if (cityBorn === 'no' || cityBorn === 'n'){
  //console.log('That\' incorrect);
  alert('That\' incorrect.');
} else {
  //console.log('You need to answer with a yes or no. Was I born in Santa Ana? Yes or No?');
  alert('You need to answer with a yes or no. Was I born in Santa Ana? Yes or No?');
}

let favoriteCar = prompt('Is the BMW M3 my favorite car? Yes or No?').toLowerCase();
if (favoriteCar === 'yes' || favoriteCar === 'y'){
  //console.log('Yes that\'s correct');
  alert('Yes that\'s correct');
} else if (favoriteCar === 'no' || favoriteCar === 'n'){
  //console.log('That\'s incorrect');
  alert('That\'s incorrect');
} else {
  //console.log('You need to answer with a yes or no. Is the BMW M3 my favorite car? Yes or No?);
  alert('You need to answer with a yes or no. Is the BMW M3 my favorite car? Yes or No?');
}

let hatePhotography = prompt('Do i hate photography? Yes or No').toLowerCase();
if (hatePhotography === 'yes' || hatePhotography ==='y'){
  //console.log('No that\'s incorrect');
  alert('No that\'s incorrect');
} else if (hatePhotography === 'no' || hatePhotography === 'n'){
  //console.log('No, I love photography');
  alert('No, I love photography');
} else {
  //console.log('You need to answer with a yes or no. Do i hate photography? Yes or No?);
  alert('You need to answer with a yes or no. Do i hate photography? Yes or No?');
}

let secondFavoriteColor = prompt('Is black my favorite color? Yes or No?').toLowerCase();
if (secondFavoriteColor === 'yes' || secondFavoriteColor === 'y'){
  //console.log('No, that\'s incorrect ');
  alert('No, that\'s incorrect ');
} else if (secondFavoriteColor === 'No' || secondFavoriteColor === 'n' ){
  //console.log('That\'s Correct');
  alert('That\'s Correct');
} else {
  //console.log('You need to answer with a yes or no.Is black my favorite color? Yes or No?');
  alert('You need to answer with a yes or no. Is black my favorite color? Yes or No?');
}
