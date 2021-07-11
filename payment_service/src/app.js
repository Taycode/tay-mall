const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const docs = require('./docs');
const Workers = require('./workers');

const App = {
  async boot() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    routes(app);
    docs(app);
    Workers();
    return app;
  },
};

module.exports = Object.freeze(App);
