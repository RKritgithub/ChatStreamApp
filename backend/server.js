const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");

const app = express();
dotenv.config();
connectDB();

app.get('/', (req, res)=>{
    res.send("APi is Running successfully")
});

app.get('/api/chat', (req, res)=>{
    res.send(chats);
});

app.get('/api/chat/:id', (req, res)=>{
    // console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);

    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;



app.listen(`${PORT}`, console.log(`server started on Port ${PORT}`.yellow.bold));
