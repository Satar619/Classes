'use strict';

const http = require('http');
const PORT = 8080;

// We need file system access to read the files to serve
const fs = require('fs');

const server = http.createServer(function(request, response) {
  console.log(request.url);
  if (request.url === '/selection?movie=lostHighway') {
	  response.writeHead(200, 'OK');
		response.write(fs.readFileSync('./lost_highway.html'));
	} else if (request.url === '/selection?movie=tetsuoII') {
	  response.writeHead(200, 'OK');
		response.write(fs.readFileSync('./tetsuo2.html'));
	}
	response.end();
});

server.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`);
});
