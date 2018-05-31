/*

lick to classlicture
   1///
   Array.filter
   Array.reduse()


   ///////////////////
       test

   console.clear();

const fruits = [
  {
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
  },
  {
    name: 'tangerine',
    color: 'orange'
  }
];


// 1. Use Array.forEach() on the fruits array and print the name of each fruit

fruits.forEach(function (fruit, index) {
  // print the fruit color
  if( index  === fruits.length-1){
    console.log(fruit.name)
  }
});

// 2. Use Array.map() to create a new array that holds all the colors in the fruits array. The result should be ['red', 'yellow', 'orange', 'orange']

const fruitColors = fruits.map(function (fruit) {
  // TODO: return the fruit color
  return fruit.color;
});

console.log(fruitColors);



// 3. Use Array.filter() to create a new array that contains only fruits of orange color. The result should be an array of lenght === 2.

const orangeFruits = fruits.filter(function(fruit) {
  // TODO to check if the fruit color is orange. If it is, then return the fruit

  return fruit.color === "orange";
});
console.log(orangeFruits);



// 4. Write a function named reverseSort that takes an array containing only stringa as an argument and sorts it in reverse order. For example, an argument of ['blue', 'orange', 'brown'] would give a result of ['orange', 'brown', 'blue']

const testStrings = ['orange', 'brown', 'blue']; // TODO: add any 3 strings you prefer, for example 3 names, or 3 countries etc

function reverseSort(strArray) {
  strArray.sort();
  let reversed = strArray.reverse();
  // TODO: use sort() on the array argument and storethe result in sorted;
  // TODO: use reverse() on the sorted array and sort the result in reversed;
  return reversed;
}
console.log(reverseSort(testStrings));





*/
////////////////////////////////////////////////////////////////////////////////