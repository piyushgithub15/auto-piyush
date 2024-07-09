require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const message = process.env.MESSAGE || "Hey this is automated testing"

// Define a route handler for the default home page
app.get('/test', (req, res) => {
    res.send('Hello, World!'+ " cax  ss sssuehue "+message);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
