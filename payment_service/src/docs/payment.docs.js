/**
 * @swagger
 * /listen:
 *   post:
 *     summary: Log a Transaction
 *     tags: [Transaction]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerId
 *               - productId
 *               - orderId
 *               - amount
 *             properties:
 *               customerId:
 *                 type: string
 *               productId:
 *                 type: string
 *               orderId:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Error
 */
