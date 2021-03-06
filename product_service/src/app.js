const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const database = require('./database');
const docs = require('./docs');

const App = {
  async boot() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    await database.connect();
    routes(app);
    docs(app);
    return app;
  },
};

module.exports = Object.freeze(App);
