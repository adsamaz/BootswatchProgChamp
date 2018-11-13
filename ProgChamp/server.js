const express = require('express');
const path = require('path');
// Init App
const app = express();

// Load View Engine
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "views")));


app.get('/', function(req, res){
  res.render("log_in.html");
});

// Start Server
app.listen(3001, function(){
  console.log('Server started on port 3001...');
});
