{
const num = 22444454545542;
const text = "tesdgdfg";
const bool = true;
num[0] = 5432;
const fruit = ['banana', 'apple'];
fruit[0] = 'orange';
console.log(fruit);
}

const teachers = ['kostas', 'kosmas'];
teachers=['teacher', 'students'];
teachers[0]='teacher';
console.log(kosmas);

let satar = ['greece', 'kangfu'];
satar[1] = 'wrestling';
console.log(satar);
console.log();

Create an array with the students names, sort them, and display

let teachers = ['Dimitris', 'kosmas', 'kostas']
console.log(todays Teachers + teachers);
console.log(teachers.sort());


<body>
  <h3>[ "Tom Cruise", "Nicole Kidman", "Antony Hopkins", "Damian Lewis" ]</h3>
</body>

<script>
{
//let numberSeries = [1,2,3,4,5];
// console.log(numberSeries);
//console.log( numberSeries.length );

let actors = [ "Tom Cruise", "Nicole Kidman", "Antony Hopkins", "Damian Lewis" ];
//// Let's display our actors:
//console.log( actors );

//// Let's display the first actor on our list
// let tom = actors[0];
// console.log( tom );

//// QUICK PRACTICE:
//// Store in a variable and display:
// 1  Nicole Kidman
//  let nicole = actors[1];
//  console.log(nicole);

// 2 // Damian Lewis
//  let demian = actors[3];
//  console.log("demian full name is: "+ demian);
// 3 // Antony Hopkins
//  let antony = actors[2];
//  console.log(antony);
//// Arrays | sort
//// Let's sort them alphabetically:
// let sorted = actors.sort();
// console.log( sorted );

//// QUICK PRACTICE:
// 1 // Create an array with the students names, sort them, and display

//  let teachers = ['kostas', 'dimitris ', 'kosmas '];
// console.log('today we have ' + teachers.sort());

  // let students = ['Ermi' , 'Satar' ,'Afsane'];
  //console.log (students.sort());
  //console.log(students);
  // function sortedstuds (){
  //  let sortstuds = students.sort();
  //  console.log(sortstuds);
 // }
  //sortedstuds();
  // console.log(students);
// 2 // Display the students array length
  // console.log(students.length);

//// Arrays | Join
//// Let's join them in a single String
// let joined = actors.join();
// console.log( joined );
//// Let's join them, separated by a character:
//joined = actors.join(", ");
//console.log( joined );
//// Let's join them, separated by a String:
//let joined = actors.join(" - ");
//console.log( joined );

//// QUICK PRACTICE:
// 1 // Join using the word 'and' and required spaces
/*
let strange = [ 12, "text", true, JSON.stringify({ a: 1 }), [1,2,3] ];
console.log( strange.join(' and ') );

let Sjoined = actors.join(' and ');
console.log('The actores are ' + Sjoined);

let Ajoined = actors.join('  ');
console.log('The actores are ' + Ajoined);
*/

// 2 // Join using a dash '-' and required spaces
// actors2 = actors.join("- ");
// console.log(actors2);
// 3 // Join using a slash '/'
// actors3 = actors.join("/ ");
// console.log(actors3);

//// Arrays | Shift
//let tom = actors.shift();
//console.log( tom );
//console.log( actors );

//// Arrays | Unshift
// console.log( actors.length );
//let newActorsLength = actors.unshift( 'Tom Cruise' );
//console.log( newActorsLength );
//console.log( actors );

//// Arrays | Pop
// let damian = actors.pop();
//console.log( damian );
//console.log( actors );

//// Arrays | Push
  /*
let newActorsLength = actors.push("Damian Lewis");
console.log( newActorsLength );
console.log( actors );
actors.pop();
actors.pop();
console.log( actors );

actors.push( "Antony Hopkins", "Damian Lewis" );
console.log( actors );
*/
/*
let tom = actors.shift();
console.log( tom );
console.log( actors + 'we are all' );

tom = actors.pop();
console.log( tom );
console.log( actors + 'we are all');

tom = actors.unshift('Tom Cruise ');
console.log( tom );
console.log( actors + ' we are all!' );

tom = actors.push(' Ali ');
console.log( tom );
console.log( actors + 'we are all');
*/
//// QUICK PRACTICE:
// 1 // Remove first actor (shift) and last actor (pop)
// 2 // Add first actor (unshift) and last actor (push) again
// 3 // Remove first and second actors (shift)
// 4 // Add previously removed actors to the end of the of the actors list (push)
/*
actors.shift();
actors.pop();
console.log(actors);
actors.unshift('Satar');
actors.push('Ahmed');
console.log(actors);
let a = actors.shift();
let b = actors.shift();
console.log(a + "and" + b)
actors.push(a, b);
console.log(actors);
*/
//// Arrays | Slice
//// Let's remove first two actors with slice() and store in a variable
//let firstSecond = actors.slice(0,2);
//console.log( firstSecond );
///console.log( actors );

//// Arrays | Splice
//let firstSecond = actors.splice(0,2);
//console.log( firstSecond );
//console.log( actors );

//// QUICK PRACTICE:
// 1 // Remove last two actors (splice) store in a variable and display
// 2 // Add two students at the end of the actors list and display the list
// 3 // Add two students at the start of the list and display the list
/*{
	let ends = actors.splice(2,3);
console.log(ends);
actors.push('Ali', 'Mahmmod');
console.log(actors);
actors.unshift('Mahmmod', 'Ali');
console.log(actors);
}
let lastwo = actors.splice(2);
console.log( lastwo );
console.log( actors );
actors.push("Ahmed", "Satar")
console.log( actors );
actors.unshift("Afsan", "Ermi")
console.log( actors );
*/

//// Arrays | indexof
//console.log(actors);
/*
  let tomIndex = actors.indexOf("Tom Cruise");
let antonyIndex = actors.indexOf("Antony Hopkins");
//console.log(tomIndex, antonyIndex);

let nicoleIndex = actors.indexOf("Nicole Kidman");
console.log(nicoleIndex);
actors.splice(nicoleIndex,2)
console.log(actors);
*/
//console.log(actors);
//// Arrays | map
// actors.map( ARGUMENTS GO HERE );
{
  let satarIndices = actors.map( function(actor){
  // I really like Tom Cruise.
  return 'I really like  ==>  ' + actor +' <==' ;
});

console.log(satarIndices);
}
let result = actors.map( function(actor) {

  if (actors.indexOf(actor) !== actors.length - 1) {
    return 'I like ' + actor;
  }
  return 'I don\'t like ' + actor;

})
	.sort()
	.slice(1);

console.log(result);
// QUICK PRACTICE
// 1 // Map and display the actors name inside brackets: [ Tom Cruise ]
// 2 // Map and display the phrase: "I like <actor name>!" e.g.
//    "I like Tom cruise!"
/*let ahmedIndices = actors.map( function(actor){
	// I like Tom Cruise !
  return "I like " + actor;
});
console.log(ahmedIndices);

let a=ahmedIndices.map( function(like){
  console.log(like);
});*/


}
</script>
