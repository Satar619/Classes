//args array will contain the args after node . when we call them
/*var args = process.argv.slice(2);

//assign the first argument of args to be the command
var command = args[0];


if (command) {
    console.log('Hello there how can i help');
} else if (command === 'help') {
    console.log(command);
} else {
    console.log('Hello there how can i help');
}
*/

// second way 
/*
//args array will contain the args after node . when we call them
var args = process.argv.slice(2);

//assign the first argument of args to be the command
var command = args[0];

if (command === 'list') {
    list();
} else {
    showUsage();
}
// function which could list something
function list() {
    console.log('a list should be displayed')
}

//Show usage is like the node --help command which shows the availeble commands of node
function showUsage() {
    console.log('Usage: node . <command>');
}
*/