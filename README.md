# tay-mall
An Ecommerce API built using a microservice architecture.


The Project has 4 different services

Customer Service can be used to list all available Products and place an order

Order Service is the service that creates the orders and queues a transaction message for
the payment service.

Product Service is the service for listing and getting products.

Payment Service processes the transactions.

# Flow

1. You list products from the customer service using the `/product/list` route.
2. you then make an order from the customer service using the `/order` route.

When we create an order, attach the customerId from the customer service and send the payload to the order service,
the order service then creates an order with a `pending` status. After the order has been created, a transaction message is logged
to the payment service using RabbitMQ, the payment service then consumes the queue and creates transactions. When a transaction is created
and stored in the DB, the payment service sends a request to the order service to notify a successful transaction.

# How to set up
1. make sure docker is installed
2. pull the code base and build the images using `docker-compose build`
3. Product needs to be seeded into the DB, so connect to the `product-service` and run `npm run seed`.
4. Now you can test from the customer service which is on port `3001`

# Note That

1. Authentication was meant to be used for customer service but time was running out so we hardcoded the customerID in the request
2. All Services have been documented using `swagger-docs`, you can access it from the `/docs` route for all services.

