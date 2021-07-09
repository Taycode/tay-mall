const { Router } = require('express');
const ProductController = require('../components/product/product.ctrl');


const router = Router()

router.get('/', ProductController.home);

module.exports = Object.freeze(router);
