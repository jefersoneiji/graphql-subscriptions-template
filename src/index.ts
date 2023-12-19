import Koa from 'koa';
import cors from '@koa/cors';
import Router from '@koa/router';
import { graphqlHTTP } from 'koa-graphql';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

import { schema } from './graphql/schema';
import { context } from './graphql/context';

const app = new Koa();
const router = new Router();

const PORT = 4000;
router.all('/graphql',
    graphqlHTTP({
        schema,
        context,
        graphiql: {
            subscriptionEndpoint: `ws://localhost:${PORT}/graphql`,
            websocketClient: 'graphql-ws',
        }
    }));
app
    .use(cors({ origin: '*' }))
    .use(router.routes())
    .use(router.allowedMethods());

const server = app.listen(PORT, function () {
    const wsServer = new WebSocketServer({
        server,
        path: '/graphql',
    });

    //DON'T FORGET TO ADD CONTEXT HERE AS WELL
    useServer({ schema, context }, wsServer);
    console.log(`Server running on http://localhost:${PORT}/graphql`);
});