var express = require("express");
var bodyParser = require("body-parser");
const JSONbig = require('json-bigint');
const path = require('path');
const { Client } = require('pg');

var REGISTROS_COLLECTION = "registros";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.//-----------Data base connection--------

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});
//test data base query
client.connect();
console.log("Database connection ready");

client.query('select * from usuarios', (err, res) => {
    if (err) {
        console.log(JSON.stringify(err));
        throw err;
    }
    console.log('res: ', JSON.stringify(res));
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
    // Initialize the app.
    var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});


// registros API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

/*  "/api/registros"
 *    GET: finds all registros
 *    POST: creates a new contact
 */

app.get("/api/registros", function(req, res) {
    res.status(200).json('{{"id":"987654321","nombre":"papu de papus","cp":"12345"}}');
});






/*const express = require('express');
const app = express();
var bodyParser = require("body-parser");


app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
//path localtion strategy

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('Console listening!');
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}
//-----------Data base connection-------------------------
const JSONbig = require('json-bigint');
const path = require('path');
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect();
console.log("Database connection ready");

client.query('select * from usuarios', (err, res) => {
    if (err) {
        console.log(JSON.stringify(err));
        throw err;
    }
    console.log('res: ', JSON.stringify(res));
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});
//------------------------routes--------------------------
/*  "/api/contacts"
 *    GET: finds all users
 *    POST: creates a new user
 +/
app.get("/api/registros", function(req, res) {
    console.log('iniciando consulta');
    client.query('select * from usuarios', (err, docs) => {
        if (err) {
            console.log(JSON.stringify(err));
            throw err;
        }
        console.log('res', JSON.stringify(docs));
        for (let row of docs.rows) {
            console.log(JSON.stringify(row));
        }
        client.end();
        res.status(200).json(docs.rows);
    });
});

//app.post("/api/registros", function(req, res) {});

/*  "/api/contacts/:id"
 *    GET: find user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */

//app.get("/api/registros/:id", function(req, res) {});

//app.put("/api/registros/:id", function(req, res) {});

//app.delete("/api/registros/:id", function(req, res) {});
//----------------------------------------------------*/