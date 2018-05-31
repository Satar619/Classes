//      --------setTimeout-----------
function fillCoffeeMaker() {
  console.log('filling coffee maker');
  setTimeout(function() {
    console.log('finished filling coffee maker');
  }, 2000);
}

function turnOnStove() {
  setTimeout(function() {
    console.log('turn on stove');
  }, 1000);
}


function waitUntilReady() {
  setTimeout(function() {
    console.log('wait until ready');
    pourCoffee(); // takes 3 seconds
  }, 1000 * 5);
}

function pourCoffee() {
  setTimeout(function() {
    console.log('pour coffee');
  }, 3000);
}

function makeCoffee() {
  fillCoffeeMaker(); // takes 2  seconds
  turnOnStove(); // takes 1 second
  waitUntilReady(); // takes 5 seconds
}
makeCoffee();
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,Next Example

//      ,,,,,,,,,,,,Callback,,,,,,,,,,
console.clear();
a = ["a", "b", "c", "d"];

a.forEach(function(letter) {
  console.log(letter);
});

function logLetter(letter) {
  console.log(letter);
}

a.forEach(logLetter);

a = ["E", "F", "G", "H"];

function myForEach(array, callback) {
  // don't use forEach
  // hint: use a regular for loop
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);

  }
}

myForEach(a, logLetter);
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,Next

//,,,,,,,,,,,,,,,,Promises,,,,,,,,,,,,,,,,,,,,,
//A way of working nicly with callback

console.clear();

function fillCoffeeMaker() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('finished filling coffee maker');
      resolve('finished filling coffee maker');
    }, 1000);
  });
}

function turnOnStove() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('turning on the stove');
      resolve('turning on the stove');
    }, 1000);
  });
}

function waitUntilReady() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('waiting for the water to boil');
      resolve('waiting for the water to boil');
    }, 1000);
  });
}

function pourCoffee() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('pouring the coffee');
      resolve('pouring the coffee');
    }, 1000);
  });
}

function makeCaffee() {
  fillCoffeeMaker()
    .then(turnOnStove)
    .then(waitUntilReady)
    .then(pourCoffee);
}
makeCaffee();