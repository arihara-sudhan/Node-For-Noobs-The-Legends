/**
   @ Ariharasudhan - NODE JS
   @ HTTP is the fundamental! :)
*/

const http = require('http');

// Behaves like EventEmitter
const server = http.createServer((req,res)=>{
	if(req.url=='/'){
		res.write("Hello");
		res.end();
	}
});

server.on('connection',(socket)=>{
	console.log("New connection");
});

server.listen(3000);


console.log("Listening on port 3000");