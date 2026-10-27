const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5002;

// Enable CORS so our React frontend (running on a different port) can talk to this server
app.use(cors());

// Enable JSON parsing to read data sent in POST requests
app.use(express.json());

// 1. GET API - Sends a simple message to the client
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Express.js Server!' });
});

// 2. POST API - Receives data from the client and sends back a response
app.post('/api/greet', (req, res) => {
    const { name } = req.body;
    res.json({ reply: `Hello, ${name}! Your request was successfully processed by the server.` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
