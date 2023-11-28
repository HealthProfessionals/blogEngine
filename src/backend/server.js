const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

// Sample data
const blogs = [
    { id: 1, title: "Blog 1", content: "Content for blog 1" },
    { id: 2, title: "Blog 2", content: "Content for blog 2" },
    // Add more sample blogs as needed
];

// Endpoint to get the list of blogs
app.get('/blogs', (req, res) => {
    res.json(blogs);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

