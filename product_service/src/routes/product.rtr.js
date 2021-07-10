const { Router } = require('express');
const ProductController = require('../components/product/product.ctrl');

const router = Router();

router.get('/', ProductController.fetch);
router.post('/', ProductController.create);

module.exports = Object.freeze(router);
