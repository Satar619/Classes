const express = require('express')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')
const PORT = 3000;
const app = express();
const ok = "ok";

app.use(bodyParser.json())

// MESSAGE ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
app.get('/', (request, response) => {
        /*request.query returns the URL prameters of the request
        e.g. http://localhost:3000/todo/481cc08d-978e-
        To access the message prameter we do : request.pramps.uuid

        if requet.pramps.uuid is undefind return a default value else 
        return the value found in request.pramps.uuid
         */
        message = (request.query.message === undefined) ? "world!" : request.query.message;
        console.log('hello', message);
        response.send(`Hello ${message}`)

    })
    // hello world,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
app.get('/', (request, response) => {
        console.log("LOG: Hello world");
        response.send("Hello world")
    })
    // ADD ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
app.get('/add', (request, response) => {
    console.log(`Added ${request.body.todo} with ${uuidv4()}`);
    /*sending response with 201 status because 
    POST change data and should client would 
    expect the CREATED status response witch is 201
     */

    response.status(201).send(ok);
});
// REMOVE ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
app.delete('/remove', (request, response) => {
    console.log(`deleting ${request.body.uuid}`);
    /*sending response with 202 status because
    DELETE marks data for deletion and client
    expects the ACCEPTED status response witch is 202*/

    response.status(202).send(ok);
});
app.listen(PORT)