FROM node:latest
RUN mkdir -p /usr/src/order-service
WORKDIR /usr/src/order-service
COPY package.json /usr/src/order-service/
RUN npm install
COPY . /usr/src/order-service
EXPOSE 3003
CMD [ "npm", "start" ]
