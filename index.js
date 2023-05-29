import express from "express";
import bodyParser from "body-parser"
import modelsSync from "./models/all-list.js";

const app=express()

app.use(bodyParser.json())

app.get('/',(req,res)=>
{
  res.send('Hello world')
})

modelsSync()

app.listen(3000,()=>console.log("app listening on port 3000"))