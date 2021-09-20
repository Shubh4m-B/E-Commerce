const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
require('dotenv').config();

// Routes importing
const authRoutes = require('./Routes/auth');
const userRoutes = require('./Routes/user');
const categoryRoutes = require('./Routes/category');
const productRoutes = require('./Routes/product');

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
app.use(expressValidator());
app.use(cors());

// routes middelware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

// Port configuration
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
})