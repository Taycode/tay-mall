FROM node:latest
RUN mkdir -p /usr/src/product-service
WORKDIR /usr/src/product-service
COPY package.json /usr/src/product-service/
RUN npm install
COPY . /usr/src/product-service
EXPOSE 3000
CMD [ "npm", "start" ]
