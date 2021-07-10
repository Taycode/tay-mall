const http = require('http');
const App = require('./src/app');


const Server = {
    async start(){
        const app = await App.boot();
        const server = http.createServer(app);

        return server.listen(3000);
    },
};

Server.start()
    .then(()=> console.log('Product Service is running'))
