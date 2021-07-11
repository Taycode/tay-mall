const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const docs = require('./docs');

const App = {
  boot() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    routes(app);
    docs(app);
    return app;
  },
};

module.exports = Object.freeze(App);
