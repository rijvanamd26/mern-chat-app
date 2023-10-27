const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('../data/data');//code is importing a variable named chats from a module located at ./data/data.
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //to accept json data (server can access json data)

app.get('/', (req, res) => {
    res.send("Welcome")
});

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound)
app.use(errorHandler)

// app.get('/api/chat', (req, res) => {
//     res.send(chats)
// })

// app.get('/api/chat/:id', (req, res) => {
//     const singleChat = chats.find((c)=>c._id === req.params.id);
//     res.send(singleChat);
// })

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server listening on port ${PORT}`.yellow.bold));