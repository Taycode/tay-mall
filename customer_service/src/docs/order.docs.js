/**
 * @swagger
 * /order:
 *   post:
 *     summary: Make an Order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - address
 *               - phoneNumber
 *               - email
 *             properties:
 *               productId:
 *                 type: string
 *               address:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Error
 */
