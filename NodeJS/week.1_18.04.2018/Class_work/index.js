// function i() {
//     const a = "Hello ";
//     const b = "cat";
//     return a + b;
// }
// console.log(i())

// const cat = require('cat-me');
// console.log(cat())
/////////////////////////////


// const cat = require('cat-me');
// const add = require('./add'); // get link from add.js

// console.log(cat());
// console.log(add(4, 3));
///////////////////////////////////
// const adds = require("./add");
// console.log();
// console.log(
//     adds.hi + "\n",
//     adds.num,
//     adds.add(3, 4, 200)
// );
//////////////////////////////
const http = require('http');

const server = http.createServer((request, respond) => {
    console.log("hello world ");
    console.log(request.method);
    console.log("request URL is: " + request.url);
    respond.end("its end ")
})

server.listen(8080);