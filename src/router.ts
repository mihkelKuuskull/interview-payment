import { handler as PingHandler } from "./routes/ping.get";
/* import { handler as NotificationHandler } from "./routes/notification.post";
import { handler as DepositHandler } from "./routes/deposit.post"; */

export const routes = [
    { url: '/ping', method: 'get', handler: PingHandler },
    /* { url: '/deposit', method: 'post', handler: DepositHandler },
    { url: '/notification', method: 'post', handler: NotificationHandler }, */
];
