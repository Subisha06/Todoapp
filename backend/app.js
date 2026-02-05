require("dotenv").config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);
const express=require("express");
const app=express();
const cors = require("cors");




require("./connection/connection");
const auth=require("./routes/auth");
const list=require("./routes/list");
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello");
});

app.use("/api/v1/auth",auth);
app.use("/api/v1/list",list);
app.listen(1000,()=>{
    console.log("server started");
})