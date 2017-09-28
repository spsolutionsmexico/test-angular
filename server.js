const express = require('express');
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
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});
//------------------------routes--------------------------
/*  "/api/contacts"
 *    GET: finds all users
 *    POST: creates a new user
 */
app.get("/api/registros", function(req, res) {
    client.query('select * from usuarios', (err, res) => {
        if (err) {
            console.log(JSON.stringify(err));
            throw err;
        }
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
        client.end();
        //res.status(200).json(res);
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
//----------------------------------------------------