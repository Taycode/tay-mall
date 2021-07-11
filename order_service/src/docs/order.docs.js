/**
 * @swagger
 * /:
 *   post:
 *     summary: Create an Order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerId
 *               - productId
 *               - amount
 *               - address
 *               - phoneNumber
 *               - email
 *             properties:
 *               customerId:
 *                 type: string
 *               productId:
 *                 type: string
 *               amount:
 *                 type: number
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
