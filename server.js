const express = require('express');
const app = express();
const mongoose = require('mongoose');

const indexrouter = require('./route/indexRoute');

mongoose.connect('mongodb://localhost:27017/Kodecamptest', (error)=>{
    if(error){
        console.log(error);}
        else{
            console.log('Database connected successfully');
        };
});

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/', indexrouter);

const port = 3000;
app.listen(port, () =>{
    console.log(`server running on ${port}`);
})