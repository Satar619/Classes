const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wardak123',
    database: 'todo_app'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT 1 + 1 AS result', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].result);
});

connection.end();