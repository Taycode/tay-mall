/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Error
 *   get:
 *     summary: Fetch Products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Successful
 *       400:
 *         description: Error
 */

/**
 * @swagger
 * /get:
 *   get:
 *     summary: Fetch One Product
 *     tags: [Product]
 *     parameters:
 *       - in: query
 *         name: productId
 *         required: true
 *     responses:
 *         200:
 *           description: Successful
 *         400:
 *           description: Error
 */
