/**
   @ Ariharasudhan - NODE JS
   @ Event Arguments
*/

const EventEmitter  = require('events');
const emitter  = new EventEmitter();

// Listener (or) Handler
emitter.on('Message Logged',function(obj){
	console.log("Event Listener Called");
	console.log(`So, ${obj.name} is just ${obj.age} years old`);
});

// signaling that an event has happened
emitter.emit('Message Logged',{name:'Ariharasudhan',age:19}); 

// same using Arrow function
/*

emitter.on('Message Logged',(obj)=>{
	console.log("Event Listener Called");
	console.log(`So, ${obj.name} is just ${obj.age} years old`);
});

*/
