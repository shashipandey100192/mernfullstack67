const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');


const app = express();
require('dotenv').config();
const port = process.env.PORT || 7800;

app.get("/",(req,res)=>{
    res.send("welcome to exress js");
});

app.get("/about",(req,res)=>{
    res.send("this is about pagepppppppppp");
})

app.use(cors());



app.listen(port,()=>{
    console.log(`server is running at port no : ${port}`);
})





