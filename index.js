const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/myRouts');

require('dotenv').config();

const port = process.env.PORT;


app.use(express.static('public'))
app.use("/", router)


app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})