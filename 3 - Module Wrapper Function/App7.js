/**
   @ Ariharasudhan - NODE JS
   Module Wrapper Function provides some global-looking variables that are specific to the module,
   such as: The module and exports object that can be used to export values 
   from the module. The variables like __filename and __dirname, 
   that tells us the module's absolute filename and its directory path.
*/

(function ( exports , require , module , __filename , __dirname ){
	function sayName(name){
		console.log("Hello "+name);
	}
	module.exports = sayName;
})