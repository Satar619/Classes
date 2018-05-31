// function node(a, b) {
//     return a * b - 20;
// }
// node(30, 4); // out put 100
/////////////////////

//(1)- for slides 2-8

//console.log(process.argv);

//(2)

//using slice(2) we can remove the two first argument from the array - so it will be empty
//console.log(process.argv.slice(2));

/*
//(3)- Make a simple command

//args array will contain the args after node . when we call them
var args = process.argv.slice(2);

//assign the first argument of args to be the command
var command = args[0];


if (command === 'hello') {
    console.log('Hello there');
} else if (command) {
    console.log('Uknown command ' + command);
} else {
    console.log('No command given');
}
*/
/*
//(4) for Slide 10 -Simple command line tool (run node . at terminal to display)

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
/*
//(5) Basic fs commands

//include fs package
const fs = require('fs');

// readFileSynch()
// reads file synchronously: readFileSynch(<file PATH to read>, <encoding>)
// other encodings base64, hex
// var readMeSynch = fs.readFileSync('./test.txt', 'hex');

// writeFileSync()
// writes a file synchronously (it creates it if it doesn't exist): 
// writeFileSynch(<file PATH to write>, <data we want to write inside the file>)
// fs.writeFileSync('testFs.txt', 'Hello Goodbye');

// console.log(readMeSynch);

// readFile()
// reads a file asychronously (non code blocking) - it takes 3 parameters
// readFile((<file PATH to read>, <encoding>, <callBackfunction> )
// The callback function is executed after we have read the file. 
// It takes to params the error and the data to retrieve  
//var readMeAsynch = fs.readFile('test.txt', 'utf8', function(err, data) {
//   err ? console.log(err) : console.log(data);
//});

//it is executed even before the file is read 
//console.log('test');

//appendFile()
//appends data to a file asynchronously 
//append() appends the file in utf8 by default
//appendFile((<file PATH to read>, <data to append>,  <callBackfunction> )
fs.appendFile('./test.txt', '\nHello again', 'utf8', (error) => {
    if (error) {
        console.log(error);
    }

});
*/
/*

//(6) - Simple command tool written in external file (run node . at terminal to display)
//args array will contain the args after node . when we call them

//We will create a todo which should do 4 things:
// 1) Create item (add)
// 2) List all the items
// 3) Delete them
// 4) Display the available commands when the user doesn't include a command. 

//include fs
var fs = require('fs');

var args = process.argv.slice(2);

//assign the first argument of args to be the command
var command = args[0];

if (command === 'list') {
    list();
} else if (command === 'add') {
    //add the item at the data txt when command add is executed
    //if the command has many words splited with spaces, only the 1st word will be added 
    //Solution we can use '<command>' when calling it OR we can use:
    //var item = args.slice(1).join(' '); //takes all args except args(1) and fill it with spaces
    var item = args[1];
    add(item);
} else if (command === 'delete') {
    deleteItems();
} else {
    showUsage();
}

// function which could list something
function list() {
    //reads file data.txt in current folder and makes an array of commands named list. 
    //It also displays errors when we try to read it
    fs.readFile('./data.txt', 'utf8', function(error, data) {
        if (!error) {
            //make a list of commands when each command is at a different line in a file 
            //makes an array from the data string - each element from different line

            //to view it as a list 
            //var list = data.split('\n');
            //list.pop();
            //console.log(list);

            //we use slice to remove the last char from the string
            //data = data.slice(0, -1);
            console.log(data);

            //we can change what error message to show based on the error
            //EOENT error is when there is not such file or it is mispelled
        } else if (error.code === 'ENOENT') {
            console.log('no data found');
        } else {
            console.log(error);
        }

    });
}

function add(item) {
    fs.appendFile('./data.txt', item + '\n', function(error) {
        if (error) {
            console.log(error);
        }
    });
}

function showUsage() {
    fs.readFile('./usage.txt', 'utf8', function(error, usage) {
        console.log(usage);
    });
}

function deleteItems() {
    fs.writeFile('./data.txt', '', function(error) {
        if (error) {
            console.log(error);
        }
    });
}*/