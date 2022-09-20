/**
   @ Ariharasudhan - NODE JS
   @ Create a file and save it as App2.js
   @ Enter the following code
   @ Go to CMD Line Interface and type node App2.js
   @ The output!
*/

function sayName(name){
	console.log("Hello"+name);
}

setInterval(function(){sayName("Ari");},2000); // Call