const express = require('express');
const app = express();

const sumRoute = require('./routes/sum');

app.use(express.json());

// Sample endpoint for the sum of two numbers
app.use('/sum', sumRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;