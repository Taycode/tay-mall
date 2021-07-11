const { Router } = require('express');

const ProductController = require('../components/product/product.ctrl');

const router = Router();

router.get('/list', ProductController.getProductList);

module.exports = Object.freeze(router);
