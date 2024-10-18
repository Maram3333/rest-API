
const express = require('express');
const mongoose = require('mongoose');
const connectDB=require("./config/connectDB")

const app = express();
connectDB()
app.use(express.json())

app.use("/api/users",require("./routes/userRoutes"))



const PORT = process.env.PORT || 3000;

app.listen(PORT,(err)=>{
    err?console.log(err):console.log(`server is running on port ${PORT}}`);
});

