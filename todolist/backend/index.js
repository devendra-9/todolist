const express = require('express');
const bodyparser = require('body-parser');
const userroute = require('./routes/uroutes');
const app = express();
app.use(bodyparser.json());
app.use('/user',userroute);
const port = 4000;
app.listen(port,()=>{
console.log(`Listening to port ${port}`)
});