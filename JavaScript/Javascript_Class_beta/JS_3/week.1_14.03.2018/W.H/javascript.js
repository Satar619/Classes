/*jshint esversion: 6 */

//Step 4: Some freeCodeCamp challenges:========>>>>>>>>>>>>>>>>>>

// 1////////////////////////////////////
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {

    return "Yes";
  }


  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

//   2 /////////////////////////////////////////

// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line

function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = [value];
    }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

// 3 ////////////////////////////////////////
var oldArray = [1, 2, 3, 4, 5];

// Only change code below this line.

var newArray = oldArray.map(function(val) {
  return val + 3;
});

// Step 5: More map, filter, reduce, and ===========>>>>>>>>>>>>>

//1
let numbers = [1, 2, 3, 4]
  .filter((number) => {
    return number % 2 !== 0;
  })
  .map(function(N) {
    return N * 2;
  });
console.log(numbers);


//
numbers.filter((number) => {
  return number % 2 !== 0;
});

let newNumbers = numbers.map((N) => {
  return N * 2;
});
console.log(numbers);
console.log(newNumbers);


//2
let result = numbers.reduce((newArray, num) => {
  newArray.push(num);
  if (num % 2 === 0) {
    newArray.push(num);
  }
  return newArray;
}, []);
console.log("The final numbers are", result); // [1, 2, 2, 3, 4, 4]

//3

let monday = [{
    name: 'Write a summary HTML/CSS',
    duration: 180 // 3 hours
  },
  {
    name: 'Some web development',
    duration: 120 // 2 hours
  },
  {
    name: 'Try to convince teachers to fix homework class10',
    duration: 30
  },
  {
    name: 'Fix homework for class10 myself',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200 // 3 hours 20 minutes
  }
];

let tuesday = [{
    name: 'Keep writing summery',
    duration: 240 // 4 hours
  },
  {
    name: 'Some more web development',
    duration: 180 // 3 hours
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200 // 3 hours 20 minutes
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

let tasks = [monday, tuesday];


let allTasks = tuesday.reduce(function(accumulator, item) {
  accumulator.push(item);
  return accumulator;
}, monday);

const Day = allTasks.map((task, i) => ({
  id: i,
  name: task.name,
  duration: task.duration / 60
}));

console.log(Day);


//