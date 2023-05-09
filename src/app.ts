
import express from 'express';
import { routes } from './router';
import { BASE_URL, startHttpsProxy } from './services/localTunnel';


(async () => {
    const app = express();
    app.use(express.json());
    console.log('Available routes:');
    await startHttpsProxy();
    routes.forEach((route) => {
        app[route.method](route.url, async (req, res) => {
            console.log(req);
            const response = await route.handler(req);
            res.json(response);
        });
        console.log(`${BASE_URL || 'localhost:3000'}${route.url} ${route.method.toUpperCase()}`);
    });
    
    app.listen(3000);
  })();

  
process.on('uncaughtExceptionMonitor', (e) => {
    console.error('uncaughtException', e);
});

process.on('unhandledRejection', (e) => {
    console.error('unhandledRejection', e);
});