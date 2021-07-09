const http = require('http');
const App = require('./src/app');


(async ()=>{
    const app = await App.boot();
    const server = http.createServer(app);

    return server.listen(5000, ()=> console.log('App is running'));
})();
