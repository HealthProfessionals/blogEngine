const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Example endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
