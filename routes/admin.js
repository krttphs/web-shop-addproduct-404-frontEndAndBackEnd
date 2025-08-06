const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/add-product',(req,res) => {
    res.sendFile('add-product.html', { root: path.join(__dirname, '../views') });
});

router.get("/product", (req,res) => {
    res.redirect('/');
});


module.exports = router;