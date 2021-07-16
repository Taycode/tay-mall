FROM node:latest
RUN mkdir -p /usr/src/customer-service
WORKDIR /usr/src/customer-service
COPY package.json /usr/src/customer-service/
RUN npm install
COPY . /usr/src/customer-service
EXPOSE 3001
CMD [ "npm", "start" ]
