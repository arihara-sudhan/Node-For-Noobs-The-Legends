/**
   @ Ariharasudhan - NODE JS
   @ Now we have a file App4.js
   @ To export an object from App3.js, we hafta use require() function
   @ It loads from that file
*/

var we_loaded = require('./App3');

console.log(we_loaded); // An object
console.log(we_loaded.name);
console.log(we_loaded.sayName("Ari"));