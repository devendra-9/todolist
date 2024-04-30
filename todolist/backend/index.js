const express = require('express');
const cookieParser = require('cookie-parser')
const bodyparser = require('body-parser');
const userroute = require('./routes/uroutes');
const cors = require('cors');
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(bodyparser.json());
app.use('/user',userroute);
const port = 4000;
app.listen(port , ()=>{
console.log(`Listening to port ${port}`)
});