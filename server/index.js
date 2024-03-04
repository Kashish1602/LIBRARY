const express = require("express");
const dotenv=require("dotenv");
const cors = require("cors")
const connect = require("./connectionMD/connect");
const routes=require("./router/userRoutes")
const app =express();
dotenv.config();
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST",
    credentials:true
}))
connect();
app.use(express.json())
app.use("/",routes)

app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`);
})
