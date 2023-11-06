const express = require('express');

const productsRouter = require('./products.router');
// const usersRouter = require('./users.router');

function routerApi(app) {

   const router = express.Router();
   app.use('/api/v1', router);

//la ruta para llamar el el navegador seria asi:
//http://localhost:3000/api/v1/products/filter
 router.use('/products', productsRouter);
router.use('/users', productsRouter);
//  route.use('/categories', productsRouter);
}

module.exports = routerApi;
