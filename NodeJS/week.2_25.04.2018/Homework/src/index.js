'usestrict';
const { readFile, writeFile, appendFile } = require('fs');
letmemory = process.argv.splice(2);
constcommand = memory;
letfilePath = 'data.txt';
letencodeing = 'utf8';
if (command[0] === 'add') {
    readFile(filePath, encodeing, (err, data) => {
        if (err) { console.log(err); } else {
            letgrabedArray = JSON.parse(data);
            grabedArray.push(command[1]);
            writeFile('../data.txt', JSON.stringify(grabedArray), (err) => { if (err) { console.log(err); }; });
        }
    });
}
elseif(command[0] === 'list'); { readFile(filePath, encodeing, (err, data) => { if (err) { console.log(err); } else { console.log(data); }; }); }
elseif(command[0] === 'reset'); { writeFile(filePath, '[]', encodeing, (err) => { if (err) { console.log(err); }; }); }
elseif(command[0] === `remove`); {
    readFile(filePath, encodeing, (err, data) => {
        if (err) { console.log(err); } else {
            letgrabedArray = JSON.parse(data);
            letindexToRemove = (command[1] - 1);
            lethowManyToRemove = 1;
            grabedArray.splice(indexToRemove, howManyToRemove);
            writeFile('../data.txt', JSON.stringify(grabedArray), (err) => { if (err) { console.log(err); }; });
        };
    });
} { console.log(`list:viewthatyouhaveincluded.add:toaddsomethingtolist.remove:youcanremovebynumber(EX:remove1orremove2).reset:toremoveallthethingfromthelist.`); };

/*'use strict';

// TODO: Write the homework code in this file

const {
    readFile,
    writeFile,
    appendFile
} = require('fs');


let memory = process.argv.splice(2);


const command = memory;

//      path 
let filePath = 'data.txt';
let encodeing = 'utf8';

if (command[0] === 'add') {
    readFile(filePath, encodeing, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let grabedArray = JSON.parse(data);

            grabedArray.push(command[1]);
            writeFile('../data.txt', JSON.stringify(grabedArray), (err) => {
                if (err) {
                    console.log(err);
                };
            });
        }
    });
} else if (command[0] === 'list') {
    readFile(filePath, encodeing, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        };
    });
} else if (command[0] === 'reset') {

    writeFile(filePath, '[]', encodeing, (err) => {
        if (err) {
            console.log(err);
        };
    });
} else if (command[0] === `remove`) {
    readFile(filePath, encodeing, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let grabedArray = JSON.parse(data);

            let indexToRemove = (command[1] - 1);
            let howManyToRemove = 1;

            grabedArray.splice(indexToRemove, howManyToRemove);

            writeFile('../data.txt', JSON.stringify(grabedArray), (err) => {
                if (err) {
                    console.log(err);
                };
            });
        };
    });
}{  console.log(`   list:   view that you have included.
                    add:    to add something to list.
                    remove: you can remove by number (EX: remove 1 or remove 2).
                    reset:  to remove all the thing from the list.`);
};*/
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
/*'use strict';

//TODO: Write the homework code in this file

import { readFile, writeFile, appendFile } from "fs";


let memory = process.argv.splice(2);


const command = memory;

//              path 
let filePath = 'data.txt';
let encodeing = 'utf8';

section();

function section() {
    if (command[0] === 'add') {
        readFile(filePath, encodeing, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                let grabedArray = JSON.parse(data);
                grabedArray.push(command[1]);
                writeFile('../data.txt', JSON.stringify(grabedArray), (err) => {
                    if (err) {
                        console.log(err);
                    };
                });
            }
        });
    } else if (command[0] === 'list') {
        readFile(filePath, encodeing, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            };
        });
    } else if (command[0] === 'reset') {
        writeFile(filePath, '[]', encodeing, (err) => {
            if (err) {
                console.log(err);
            };
        });
    } else if (command[0] === `remove`) {
        readFile(filePath, encodeing, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                let grabedArray = JSON.parse(data);
                let indexToRemove = (command[1] - 1);
                let howManyToRemove = 1;
                grabedArray.splice(indexToRemove, howManyToRemove);
                writeFile('../data.txt', JSON.stringify(grabedArray), (err) => {
                    if (err) {
                        console.log(err);
                    };
                });
            };
        });
    } else {
        console.log(`   list:   view that you have included.
                    add:    to add something to list.
                    remove: you can remove by number (EX: remove 1 or remove 2).
                    reset:  to remove all the thing from the list.`);
    };
}*/