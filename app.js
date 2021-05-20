const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Routes importing
const userRoutes = require('./Routes/user');

// Database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
}).catch(() => {
    console.log("Some problem in DB connection")
})

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
// routes middelware
app.use('/api', userRoutes);

// Port configuration
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
})