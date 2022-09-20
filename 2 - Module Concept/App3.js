/**
   @ Ariharasudhan - NODE JS
   @ Now we have a file App3.js
   @ We can call it a Module
   @ Here we have a function , sayName
   @ And a variable, name
   @ It can't be invoked out of the file, App3.js
   @ To achieve this, we gotta make it exportable
*/

function sayName(name){
	console.log("Hello "+name);
}

var name = "Ariharasudhan";
// Let's make both of them exportable ! i.e., we can call from
// another file say, App4.js

module.exports.name = name;
module.exports.sayName = sayName;
// Not necessary to have same variable/function names


