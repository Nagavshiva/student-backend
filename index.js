const express = require('express');
const studentRoutes = require('./route/studentRoutes');
const dotenv = require("dotenv");
const cors = require("cors");
const connectionDb = require("./db/Mongodb");

const app = express();

dotenv.config()
// Connect to MongoDB
connectionDb()

app.use(cors())

// Middleware
app.use(express.json());

// Routes
app.use('/api', studentRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
