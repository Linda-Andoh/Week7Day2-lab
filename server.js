const express = require('express');

const app = express();

app.get('/greeting/:name', (req, res) => {
    res.json({
        greeting: `Hello ${req.params.name}, It's so great to see you!`
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000!');
});