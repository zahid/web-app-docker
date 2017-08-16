/**
 * This is a very rudimentary example of an API server.
 *
 * This HTTP server will respond to all requests with a 200 status code and the body will contain "Pong"
 */

const http = require('http');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'database',
    user     : 'root',
    password : '',
    database : 'web_app_db'
});

const server = http.createServer(function (req, res) {
    console.log('API-Server just got a request for', req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    connection.query('SELECT * FROM messages;', function (error, results, fields) {
        if (error) {
            console.error("There was an error:", error);
        } else {
            res.write(JSON.stringify(results));
        }
        res.end();
    });
});

server.listen(3000, (err) => {
    if (err) {
        console.error('API-Server could not start!');
        process.exit(1);
    }

    console.log('API-Server started!');
});
