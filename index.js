// Node has global.console.log() instead of window.console.log() that the browser uses
console.log("Hello World");

// Process is the most important global for now
console.log(process.platform);

// exit is the event, the function is the callback 
process.on('exit', function(){
    // do something!
})

// exit is a built-in event, but you can also create your own
const{ EventEmitter } =  require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch', function(){
    console.log("Yum!")
})

// Node has a built in file system module called 'fs' that can read, write, delete, etc. files. Can do it in blocking & non-blocking ways
eventEmitter.emit('lunch');
const{ readFile, readFileSync } = require('fs'); // sync === blocking, i.e: needs to finish all its work before rest of code runs
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);
console.log("Do this ASAP!");

// non-blocking method
// readFile('./hello.txt', 'utf8', (err, txt) =>{
//     console.log(txt)
// });
// console.log("Do this ASAP!");

// promise based colution: also asynchronous and non-blocking
// const{ readFileP } = require('fs').promises;
// const file = await readFileP('./hello.txt', 'utf8');
// old method?
// async function hello(){
//     const file = await readFileP('./hello.txt', 'utf8');
// }

// Modules: JS file that exports its code.
// require() is the common vanilla syntax
// ES modules are the newer method that uses the import/export syntax
const myModule = require('./my-module');
console.log(myModule);

// An express app allows us to create different urls & endpoints that a user can navigate to in the browser
const express = require('express');
app = express();
// A user navigating to a url in the browser is known as a get request
// First arg is the url the user will navigate to. The 2nd arg is our callback function
// The request to the url can be thought of as an event
app.get('/', (request, response) => {   // request - user's incoming data. response - your outgoing data
    // read some html from our file system and send it back to the browser
    readFile('./index.html', 'utf8', (err, html) =>{
        if(err){
            response.status(500).send('sorry out of order')
        }
        response.send(html);
    });
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));

 const{ readFileP } = require('fs').promises;
 app.get('/', async (request, response) =>{
    response.send( await readFileP('./index.html', 'utf8') )
 });