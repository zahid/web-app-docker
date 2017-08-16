/**
 * This is a very rudimentary example of an API server.
 *
 * This HTTP server will respond to all requests with a 200 status code and the body will contain "Pong"
 */

const http = require('http');

const server = http.createServer(function (req, res) {
    console.log('API-Server just for a request for', req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Pong');
    res.end();
});

server.listen(3000, (err) => {
    if (err) {
        console.error('API-Server could not start!');
        process.exit(1);
    }

    console.log('API-Server started!');
});
