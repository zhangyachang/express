const express = require('express');
const router = express.Router();


router.get('/aaa', (req, res) => {
    console.log(req.query);

    res.send('Hello world');
});







module.exports = router;