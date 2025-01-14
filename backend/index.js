// const express = require("express");
// const app = express();
// const PORT=5000;

// app.get('/',(req,res)=>{
//   res.send("API is working,welcome to book")
// });

// app.listen(PORT,()=>{
//   console.log(`Server is running on port ${PORT}`);
// })
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

const connect=require('./database/dbConnection');
const bookRouter = require('./routes/book.router');

const app=express();
// dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Welcome to Book Universe');
  });

app.use('/api', bookRouter);

connect();

app.listen(6000, () => {
  console.log('running on port');
});