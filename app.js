const path = require('path');

const express = require('express');
const app = express();

const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',require(path.join(__dirname,'routes/route.js')));
app.use(express.static(path.join(__dirname,'public')));

app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});
