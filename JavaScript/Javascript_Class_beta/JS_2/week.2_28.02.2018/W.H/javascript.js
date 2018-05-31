/*jshint esversion: 6 */
/*function num(start, end, threeCallback, fiveCallback) {
  let array = []

  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  console.log(array);

  for (let i = 0; i < array.length; i++) {

    if (i % 3 === 0) {
      threeCallback();
    } else if (i % 5 === 0) {
      fiveCallback();
    }
  }
}

function threeCallback() {

  console.log('say threeCallback');
}

function fiveCallback() {
  console.log('say fiveCallback');
}
num(3, 7, threeCallback, fiveCallback);


//  A2
// for loop
function repeatStringNumTimes(str, num) {
  // repeat after me
  let first = "";
  for (let i = 0; i < num; i++) {

    first += str;
  }
  return first;
}
repeatStringNumTimes("abc", 3);

// While loop
function repeatStringNumTimes(str, num) {
  // repeat after me
  let second = '';
  let i = 0;

  while (i < num) {
    i++;

    second += str;
  }
  return second;
}
repeatStringNumTimes("abc", 3);

// Do While


//A3

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

var MotorBike = function() {

  this.engines = 5;
  this.wheels = 6;
  this.seats = 7;
};

// A4 Nested loops
function multiplyAll(arr) {
  var product = 1;


  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      product *= arr[i][j];
    }
  }

  return product;
}


multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7]
]);

// A5

var myMultiArray = [
  [1, 2, 3, 4, 5, [1, 2, 3, 4, 5]],
  [6, 7, 8, 9, 10, [1, 2, 3, 4, 6]],
  [11, 12, 13, 14, 15, [1, 2, 3, 4, 5]],
  [16, 17, 18, 19, 20, [1, 2, 3, 4, 5]]
];

console.log(myMultiArray[1][5][4]); // Outputs 6 , the value in the last element of the last element of the second element of myMultiArray.

var arr2d = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(arr2d[0][0]) // Outputs 2
console.log(arr2d[0][1]) // Outputs 4
console.log(arr2d[1][0]) // Outputs 6
console.log(arr2d[1][1]) // Outputs 2
console.log(arr2d[2][0]) // Outputs 4
console.log(arr2d[2][1]) // Outputs 6

// A6

var x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x); // Outputs 9 because it does not read function it just console log the var


var y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); */ // Outputs { x: 10 } because y is = 9 and we val.x = val.x + 1; that means 9 + 1

// Step 3: Homework for JavaScript