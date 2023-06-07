const express = require('express');
const router = express.Router();
const sum = require('../helpers/sum');

router.post('/', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    const result = sum(num1, num2);

    res.json({ sum: result });
});

module.exports = router;
