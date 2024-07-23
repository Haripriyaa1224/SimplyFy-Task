const express = require ('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv/config');
const userRoutes = require('./Routes/user');
const articleRoutes = require('./Routes/article');

const app = express();
const port = 10000;

// console.log(process.env.CONNECTION_STRING)
app.use(express.json());

// app.use('/', (req, res)=>{
//     res.json({
//         message: 'Hello World',
//     })
// })
app.use('/user', userRoutes);
app.use('/article', articleRoutes);
mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{console.log("Connected to DB")})
.catch((err)=>{console.log("Error connecting to DB", err)})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})