import { extendType, objectType } from "nexus";

export const Ok = objectType({
    name: 'Ok',
    description: 'example of object type that returns ok',
    definition(t) {
        t.nonNull.boolean('value');
    },
});

export const OkQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.field('ok', {
            type: 'Ok',
            description: 'example of query that return type ok',
            resolve(_root, _args, _ctx) {
                return { value: true };
            }
        });
    },
});

export const OkSubscription = extendType({
    type: 'Subscription',
    definition(t) {
        t.nonNull.field('boolean', {
            description: 'boolean field for testing subscriptions',
            type: 'Boolean',
            subscribe(root, args, ctx, info) {
                return (async function* () {
                    while (true) {
                        await new Promise(res => setTimeout(res, 1000));
                        yield Math.random() > .5;
                    }
                })();
            },
            resolve(eventData) {
                return eventData;
            },
        });
    },
});

export const GreetingsSubscriptions = extendType({
    type: 'Subscription',
    definition(t) {
        t.nonNull.field('greetings', {
            description: 'greetings field for testing subscriptions',
            type: 'String',
            subscribe(root, args, ctx, info) {
                return (async function* () {
                    for (const hi of ['Hi', 'Bonjour', 'Hola', 'Ciao', 'Zdravo']) {
                        yield hi;
                    }
                })();
            },
            resolve(eventData) {
                return eventData;
            },
        });
    },
});