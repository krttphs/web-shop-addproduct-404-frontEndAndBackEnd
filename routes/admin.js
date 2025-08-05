const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/add-product',(req,res) => {
    console.log("Add Product Page");
    res.sendFile('add-product.html', { root: path.join(__dirname, '../views') });
});

router.post("/product", (req,res) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;