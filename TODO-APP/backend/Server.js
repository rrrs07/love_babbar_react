const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const routes = require('./routes/ToDoRoute');

//const cors = require("cors");


const app = express();
const PORT = process.env.port || 3000;


// Middleware
app.use(express.json());
app.use(cors())

// Connect to MongoDB
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`listening on: ${PORT}`))