const path = require("path");

const express = require("express");

const router = express.Router();


// router.get('/',(req,res,next) => {
//     res.sendFile(path.join(__dirname, '../','views','404.html'));
// });

router.get('/shop', (req, res, next) => {
  res.sendFile('shop.html', { root: path.join(__dirname, '../views') });
});

module.exports = router;