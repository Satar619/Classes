// Replace the /* TODO */ comments with your own code!

// Example 1: create a function that, given an array that contains objects representing fruits, having name and color attributes, returns all the fruit colors in the given array

const fruits = [{
    name: 'apple',
    color: 'red'
  },
  {
    name: 'banana',
    color: 'yellow'
  },
  {
    name: 'orange',
    color: 'orange'
  }
];

function findFruitColors(fruitArray) {
  const colors = [];

  for (let i = 0; i < fruitArray.length; i++) {
    /* TODO */
  }

  return colors;
}

console.log(findFruitColors(fruits)); // should print ['red', 'yellow', 'orange']

// Example 2: for each fruit in the fruits array, add a new property with key == 'isRound'. This property should hold boolean values: true if the fruit has a round shape, false if not

for (let j = 0; j < fruits.length; j++) {

  if (fruits[j].name === 'banana') {
    fruits[j].isround = false;
  } else {
    fruits[j].isround = true;
  }
}

console.log(JSON.stringify(fruits, null, 2))