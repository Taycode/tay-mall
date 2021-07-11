const swaggerJsDoc = require('swagger-jsdoc');
const { resolve } = require('path');
const swaggerUi = require('swagger-ui-express');

module.exports = (app) => {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Customer Service API',
        version: '1.0.0',
        description: 'Customer Service',
        contact: {
          name: 'Abdulmateen Tairu',
          email: 'abdulmateentairu@gmail.com',
        },
      },
    },
    apis: [
      resolve(__dirname, './*.js'),
    ],
  };
  const specs = swaggerJsDoc(options);
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
};
