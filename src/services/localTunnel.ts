import localtunnel from 'localtunnel';
import { delay } from 'bluebird';

export let BASE_URL = '';

export async function startHttpsProxy() {
    await delay(1000);
    const tunnel = await localtunnel({ port: 3000, subdomain: 'metal-chairs-happen' });
    BASE_URL = tunnel.url;
}