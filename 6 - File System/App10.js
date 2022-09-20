/**
   @ Ariharasudhan - NODE JS
   @ we have some useful functions for file handling in fs module
*/

const fs = require('fs');
const files1 = fs.readdirSync('./'); //  Current Directory
console.log(files1);

// Asynchronous Form
const files2 = fs.readdir('./',function(err,result){
	if(err) console.log(err);
	else console.log(result);
});
// Erroneous
const files2 = fs.readdir('@',function(err,result){
	if(err) console.log(err);
	else console.log(result);
});
