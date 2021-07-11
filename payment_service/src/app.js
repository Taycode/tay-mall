const express = require('express');
const Workers = require('./workers');

const App = {
  async boot() {
    const app = express();
    Workers();
    return app;
  },
};

module.exports = Object.freeze(App);
