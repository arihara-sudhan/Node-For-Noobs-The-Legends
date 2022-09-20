/**
   @ Ariharasudhan - NODE JS
   @ Event indicates that something has happened
*/

const EventEmitter  = require('events');
const emitter  = new EventEmitter();

// Listener (or) Handler
emitter.on('Message Logged',function(){
	console.log("Event Listener Called");
});

// signaling that an event has happened
emitter.emit('Message Logged'); 