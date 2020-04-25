var express = require('express');
var app = express();
app.get('/', function(req, res){
   res.send("Hello Service B!");
});
app.listen(8081, () => console.log('Example app listening on port 8081!'));