const Event = require("events");

// Initalising Class that Inherits from EventEmitter Module
class myEventEmitter extends Event {};

// Initalising Object of myEventEmitter Class
const myObj = new myEventEmitter();

// Attaching a eventListener on myObj
myObj.on('event',()=>{
    console.log("Event Fired .....");
})

// Emitting Event
myObj.emit('event');