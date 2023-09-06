const express = require('express');
const app = express();

app.get('/header', (req, res) => {
    res.set('Content-Type', 'text/plain');
    const headers = Object.entries(req.headers)
        .map(([key, value]) => {
            return `${key}:${value}`; // Return the concatenated string
        })
    res.send(headers.join('\n'));
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
