FROM node:latest
RUN mkdir -p /usr/src/payment-service
WORKDIR /usr/src/payment-service
COPY package.json /usr/src/payment-service/
RUN npm install
COPY . /usr/src/payment-service
EXPOSE 3002
CMD [ "npm", "start" ]
