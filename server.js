const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config();

// Initialize app
const app = express();

// Middlewares
app.use(express.json()); // Body parser for JSON data
app.use(cors()); // Handle Cross-Origin requests
app.use(morgan('dev')); // Logger

// Connect to MongoDB
connectDB();

// Routes
const comicRoutes = require('./routes/comicRoutes');
app.use('/api/comics', comicRoutes);

// Error handling middleware
const { errorHandler } = require('./middleware/errorMiddleware');
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
