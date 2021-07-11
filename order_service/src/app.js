const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const Database = require('./database');

const App = {
  async boot() {
    const app = express();
    app.use(cors());
    await Database.connect();
    routes(app);
    return app;
  },
};

module.exports = Object.freeze(App);
