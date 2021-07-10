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
 *       406:
 *         description: Validation Error
 *       422:
 *         description: User Exists
 *   get:
 *     summary: Fetch Products
 *     tags: [Product]
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Error
 */
