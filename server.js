const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);
//path localtion strategy

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('Console listening!');

const bodyParser = require('body-parser');
const JSONbig = require('json-bigint');
const path = require('path');
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect();

client.query('select now();', (err, res) => {
    if (err) {
        console.log(JSON.stringify(err));
        throw err;
    }
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});