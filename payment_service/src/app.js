const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const App = {
    async boot(){
        const app = express();
        app.use(cors());
        routes(app);
        return app;
    }
}

module.exports = Object.freeze(App);
