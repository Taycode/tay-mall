const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const database = require('./database');

const App = {
  async boot() {
    const app = express();
    app.use(cors());
    await database.connect();
    routes(app);
    return app;
  },
};

module.exports = Object.freeze(App);
