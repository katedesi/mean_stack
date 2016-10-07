var express = require('express');
var app = express();
const port = 8000;

app.listen(port, function() {
    console.log(`Connteced ${port} port!`);
});

var p1 = require('./routes/p1')(app);
app.use('/p1', p1);

var p2 = require('./routes/p2');
app.use('/p2', p2);
