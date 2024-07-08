require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

// Define a route handler for the default home page
app.get('/test', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
