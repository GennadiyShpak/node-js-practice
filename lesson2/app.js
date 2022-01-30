const express = require("express");
const {colors} = require('colors');
const cors = require('cors');
const booksRouter = require('./routes/booksRoutes') 

const errorHandler = require("./middlevares/error")

const connectDB = require('./config/db')
require('dotenv').config({path: './config/.env'});
const app = express();

app.use(express.json());
app.use(cors());

//Set routes
app.use('/api/v1/books', booksRouter)
app.use(errorHandler)
connectDB();

const {PORT = 5050} = process.env;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.green.italic.bold); 
})

process.on('unhandledRejection', (err, _) => {
    if (err) {
        console.log(`${err.message}`.red);
        server.close(() => process.exit(50))
    }
})