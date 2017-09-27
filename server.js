const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);
//path localtion strategy

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('Console listening!');