const express = require('express');
const router = require('./products.router');
const router = express.Router();
module.exports = router;




router.get('/users', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
       res.json({
         limit,
         offset
       });
     } else {
       res.send('No hay parametros');
     }
    });