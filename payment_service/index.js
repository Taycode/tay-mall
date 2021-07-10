const App = require('./src/app');
const http = require('http');


const Server = {
    async start(){
        const app = await App.boot()
        const server = http.createServer(app);
        return server.listen(5002)
    }
}

Server.start().then(()=>console.log('Payment Service is running'));
